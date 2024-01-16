const careerModel = require("../models/careerModel");
const adminModel = require("../models/adminModel");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const { validationResult } = require("express-validator");

// 1. ..................................................Send a request.....................................................
exports.createCareer = catchAsyncError(async (req, res, next) => {
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
    const { position, count, salary, active, link, requirementArray, responsibilityArray } = req.body;


    // if fields are undefined
    if (!position || !count || !salary || !active || !link || !requirementArray || !responsibilityArray) {
        return next(
            new ErrorHandler(
                "Invalid request format. Check field keys and values.",
                400
            )
        );
    }

    //   save data
    const data = await careerModel.create({ position, count, salary, active, link, requirementArray, responsibilityArray });

    // send response
    return res
        .status(200)
        .json({ success: true, message: "Form submitted successfully.", data });
});

// 2. fetch all career posts
exports.fetchallCareer = catchAsyncError(async (req, res, next) => {
    // validate req
    const err = await validationResult(req);
    if (!err.isEmpty()) {
        return res.status(400).json({ success: false, error: err });
    }

    count = await careerModel.count();
    data = await careerModel
        .find().sort({ createdAt: -1 })
        .exec();

    return res
        .status(200)
        .json({ success: true, count, resultCount: data ? data.length : 0, data });
});

// 3.delete a career 
exports.deleteCareer = catchAsyncError(async (req, res, next) => {
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
    const data = await careerModel.findByIdAndDelete(dbId);

    // check if data already deleted or not exists situation...
    if (!data) {
        return res
            .status(400)
            .json({ success: false, message: "Data already deleted or not exists." });
    }

    // return
    res.status(200).json({ success: true, message: "Deletion successful." });

})


// 4.update career
exports.updateCareer = catchAsyncError(async (req, res, next) => {
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
    let career = await careerModel.findById(dbId);

    // check if data already deleted or not exists situation...
    if (!career) {
        return res
            .status(400)
            .json({ success: false, message: "Data not exists." });
    }

    let Status = career.active;

    await careerModel.findByIdAndUpdate(dbId, { active: !Status }, { new: true });

    // return
    res.status(200).json({ success: true, message: "Updation successful" });
})