const clientLogoModel = require("../models/clientLogoModel");
const adminModel = require("../models/adminModel");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const { validationResult } = require("express-validator");

// 1. ..................................................Send a request.....................................................
exports.createClientLogo = catchAsyncError(async (req, res, next) => {
    // validate req
    const err = await validationResult(req);
    if (!err.isEmpty()) {
        return res.status(400).json({ success: false, error: err });
    }

    // check permission
    const check = await adminModel.findById(req.id);
    if (!check) {
        return res
            .status(400)
            .json({ success: false, message: "You are not authorized." });
    }

    //   body
    const { link } = req.body;


    // if fields are undefined
    if (!link) {
        return next(
            new ErrorHandler(
                "Invalid request format. Check field keys and values.",
                400
            )
        );
    }

    //   save data
    const data = await clientLogoModel.create({ link });

    // send response
    return res
        .status(200)
        .json({ success: true, message: "Form submitted successfully.", data });
});


// 2. fetch all client logo
exports.fetchallClientLogo = catchAsyncError(async (req, res, next) => {
    // validate req
    const err = await validationResult(req);
    if (!err.isEmpty()) {
        return res.status(400).json({ success: false, error: err });
    }

    count = await clientLogoModel.count();
    data = await clientLogoModel
        .find().sort({ createdAt: -1 })
        .exec();

    return res
        .status(200)
        .json({ success: true, count, resultCount: data ? data.length : 0, data });
});


// 3.delete a client logo 
exports.deleteClientLogo = catchAsyncError(async (req, res, next) => {
    // validate req
    const err = await validationResult(req);
    if (!err.isEmpty()) {
        return res.status(400).json({ success: false, error: err });
    }

    // check permission
    const check = await adminModel.findById(req.id);
    if (!check) {
        return res
            .status(400)
            .json({ success: false, message: "You are not authorized." });
    }

    //   params
    const { dbId } = req.params;

    // delete data
    const data = await clientLogoModel.findByIdAndDelete(dbId);

    // check if data already deleted or not exists situation...
    if (!data) {
        return res
            .status(400)
            .json({ success: false, message: "Data already deleted or not exists." });
    }

    // return
    res.status(200).json({ success: true, message: "Deletion successful." });

})
