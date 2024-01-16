const testimonialModel = require("../models/testimonialModel");
const adminModel = require("../models/adminModel");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const { validationResult } = require("express-validator");

// 1. ..................................................Send a request.....................................................
exports.createTestimonail = catchAsyncError(async (req, res, next) => {
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
    const { name, designation, message, image, rating } = req.body;


    // if fields are undefined
    if (!name || !image || !designation || !message || !rating) {
        return next(
            new ErrorHandler(
                "Invalid request format. Check field keys and values.",
                400
            )
        );
    }

    //   save data
    const data = await testimonialModel.create({ name, designation, message, image, rating });

    // send response
    return res
        .status(200)
        .json({ success: true, message: "Form submitted successfully.", data });
});


// 2. fetch all testimonials
exports.fetchallTestimonials = catchAsyncError(async (req, res, next) => {
    // validate req
    const err = await validationResult(req);
    if (!err.isEmpty()) {
        return res.status(400).json({ success: false, error: err });
    }

    count = await testimonialModel.count();
    data = await testimonialModel
        .find().sort({ createdAt: -1 })
        .exec();

    return res
        .status(200)
        .json({ success: true, count, resultCount: data ? data.length : 0, data });
});


// 3..delete a project
exports.deleteTestimonial = catchAsyncError(async (req, res, next) => {
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
    const data = await testimonialModel.findByIdAndDelete(dbId);

    // check if data already deleted or not exists situation...
    if (!data) {
        return res
            .status(400)
            .json({ success: false, message: "Data already deleted or not exists." });
    }

    // return
    res.status(200).json({ success: true, message: "Deletion successful." });

})

