const adminModel = require("../models/adminModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const { validationResult } = require("express-validator");
const JWT_SECRET = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

// 1.---------signup : for making a administrator (superAdmin) :- has a full access and created by programmer (only one time)-------
exports.signup = catchAsyncError(async (req, res, next) => {
    // validate req
    const err = await validationResult(req);
    if (!err.isEmpty()) {
        return res.status(400).json({ success: false, error: err });
    }

    const { name, email, password } = req.body;

    // check if this email id is already used or not
    const check = await adminModel.findOne({ email: email.toLowerCase().trim() });
    if (check) {
        return res
            .status(400)
            .json({ success: false, message: "User already exist..." });
    }

    // if allthings right, then create super admin (administrator)

    // create hash of the password
    const salt = await bcryptjs.genSalt(10);
    const enPassword = await bcryptjs.hash(password.trim(), salt);

    // create
    const data = await adminModel.create({
        name: name.trim(),
        email: email.toLowerCase().trim(),
        password: enPassword,
        role: "superAdmin",
    });

    return res.status(200).json({ success: true, data });
});


// 2. ------------------------------------------------createNewAdmin : for creating new admins--------------------------------------
exports.createNewAdmin = catchAsyncError(async (req, res, next) => {
    const err = await validationResult(req);
    if (!err.isEmpty()) {
        return res.status(400).json({ success: false, error: err });
    }

    // check permission
    const isAdministrator = await adminModel.findById(req.id);
    if (isAdministrator.role !== "superAdmin") {
        return res
            .status(400)
            .json({ success: false, message: "You have no permission." });
    }

    const { name, email, password, role } = req.body;

    // Check if any required field is undefined
    if (!name || !email || !password || !role) {
        return next(
            new ErrorHandler(
                "Invalid request format. Check field keys and values.",
                400
            )
        );
    }

    // check email already exists or not
    const find = await adminModel.findOne({ email: email.toLowerCase().trim() });
    if (find) {
        return res
            .status(400)
            .json({ success: false, message: "Mail id already exists." });
    }

    // create hash of the password
    const salt = await bcryptjs.genSalt(10);
    const enPassword = await bcryptjs.hash(password.trim(), salt);

    // now, create admin
    const user = await adminModel.create({
        name: name.trim(),
        email: email.toLowerCase().trim(),
        password: enPassword,
        role: role.trim(),
    });

    return res.status(200).json({
        success: true,
        message: "Admin created successfully.",
        data: user,
    });
});

// 3. -----------------------------------------login : admin and administrator (superAdmin) login api--------------------------------
exports.login = catchAsyncError(async (req, res, next) => {
    const err = await validationResult(req);
    if (!err.isEmpty()) {
        return res.status(400).json({ success: false, error: err });
    }

    const { email, password } = req.body;

    // Check if any required field is undefined
    if (!email || !password) {
        return next(
            new ErrorHandler(
                "Invalid request format. Check field keys and values.",
                400
            )
        );
    }

    const user = await adminModel
        .findOne({ email: email.toLowerCase().trim() })
        .select("+password");
    if (!user) {
        return res
            .status(400)
            .json({ success: false, message: "check your credentials." });
    }

    // match password
    const isMatch = await bcryptjs.compare(password.trim(), user.password);
    if (!isMatch) {
        return next(new ErrorHandler("Invalid Email or Password", 400));
    }

    // now, if password matched successfully, then send token
    const token = jwt.sign(
        { _id: user._id, name: user.name, email: user.email, role: user.role },
        JWT_SECRET
    );

    return res.status(200).json({ success: true, token });
});


// 4. ......................................view all admins : query :- admin, superAdmin, all ........................................
exports.fetchAdminModelData = catchAsyncError(async (req, res, next) => {
    const err = await validationResult(req);
    if (!err.isEmpty()) {
        return res.status(400).json({ success: false, error: err });
    }

    // check permission
    const check = await adminModel.findById(req.id);
    if (!check || check.role !== "superAdmin") {
        return res
            .status(400)
            .json({ success: false, message: "You are not authorized." });
    }

    let data;
    data = await adminModel.find({ role: { $ne: 'superAdmin' } }).sort({ createdAt: -1 });
    return res.status(200).json({ success: true, data });
});

// 5. ................................................. delete admin : one by one ....................................................
exports.deleteAdminByDBId = catchAsyncError(async (req, res, next) => {
    const err = await validationResult(req);
    if (!err.isEmpty()) {
        return res.status(400).json({ success: false, error: err });
    }

    // check permission
    const check = await adminModel.findById(req.id);
    if (!check || check.role !== "superAdmin") {
        return res
            .status(400)
            .json({ success: false, message: "You are not authorized." });
    }

    //  params
    const { dbId } = req.params;

    const test = await adminModel.findById(dbId);
    if (!test)
        return res.status(400).json({
            success: false,
            message: "Data not exist.",
        });
    if (test.role === "superAdmin")
        return res.status(400).json({
            success: false,
            message: "You can not delete administrator account (superAdmin).",
        });

    const data = await adminModel.findByIdAndDelete(dbId);

    // check if data already deleted or not exists situation...
    if (!data) {
        return res
            .status(400)
            .json({ success: false, message: "Data already deleted or not exists." });
    }

    return res
        .status(200)
        .json({ success: true, message: `${data.role} deleted successfully.` });
});


// 6. ................................................. update admin password .........................................................
exports.updatePasswordFieldOfAdmin = catchAsyncError(async (req, res, next) => {
    const err = await validationResult(req);
    if (!err.isEmpty()) {
        return res.status(400).json({ success: false, error: err });
    }

    // check permission
    const check = await adminModel.findById(req.id);
    if (!check || check.role !== "superAdmin") {
        return res
            .status(400)
            .json({ success: false, message: "You are not authorized." });
    }

    //  params
    const { dbId } = req.params;
    // body
    const { password } = req.body;

    // check if admin exists or not
    const temp = await adminModel.findById(dbId);
    if (!temp) {
        return res
            .status(400)
            .json({ success: false, message: "Admin data not exists." });
    }

    // not encrypt password
    const salt = await bcryptjs.genSalt(10);
    const enPassword = await bcryptjs.hash(password.trim(), salt);

    // update password
    const ans = await adminModel.findByIdAndUpdate(
        dbId,
        { password: enPassword },
        { new: true }
    ).select('+password');

    return res
        .status(200)
        .json({ success: true, message: "Password updated successfully.", user: ans });
});