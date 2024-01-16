const blogModel = require("../models/blogsModel");
const adminModel = require("../models/adminModel");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const { validationResult } = require("express-validator");
const { ObjectId } = require('mongodb');

// 1. ..................................................Send a request.....................................................
exports.createBlog = catchAsyncError(async (req, res, next) => {
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
    const { name, image, desc, content } = req.body;


    // if fields are undefined
    if (!name || !image || !desc || !content) {
        return next(
            new ErrorHandler(
                "Invalid request format. Check field keys and values.",
                400
            )
        );
    }

    //   save data
    const data = await blogModel.create({ name, image, desc, content });

    // send response
    return res
        .status(200)
        .json({ success: true, message: "Form submitted successfully.", data });
});

// 2. fetch all blog posts
exports.fetchallBlogs = catchAsyncError(async (req, res, next) => {
    // validate req
    const err = await validationResult(req);
    if (!err.isEmpty()) {
        return res.status(400).json({ success: false, error: err });
    }

    //   query
    const { pageNo, pageSize } = req.query;

    //   check query
    if (pageNo < 1)
        return res
            .status(400)
            .json({ success: false, message: "Page No. must be greater than zero." });
    if (pageSize < 1)
        return res
            .status(400)
            .json({ success: false, message: "Page Size must be greater than zero" });

    // now, fetch data
    let data;
    let count;

    count = await blogModel.count();
    data = await blogModel
        .find().select('-content').sort({ createdAt: -1 })
        .skip((pageNo - 1) * pageSize)
        .limit(pageSize)
        .exec()
        ;

    return res
        .status(200)
        .json({ success: true, count, resultCount: data ? data.length : 0, data });
});

// 3.delete a blog 
exports.deleteBlog = catchAsyncError(async (req, res, next) => {
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
    const data = await blogModel.findByIdAndDelete(dbId);

    // check if data already deleted or not exists situation...
    if (!data) {
        return res
            .status(400)
            .json({ success: false, message: "Data already deleted or not exists." });
    }

    // return
    res.status(200).json({ success: true, message: "Deletion successful." });

})


// 4. fetch a blog
exports.fetchaBlog = catchAsyncError(async (req, res, next) => {
    // validate req
    const err = await validationResult(req);
    if (!err.isEmpty()) {
        return res.status(400).json({ success: false, error: err });
    }

    //   params
    const { dbId } = req.params;

    if (!ObjectId.isValid(dbId)) {
        return res.status(400).json({ success: false, message: "Url not found" });
    }

    // delete data
    const data = await blogModel.findById(dbId);

    // check if data already deleted or not exists situation...
    if (!data) {
        return res
            .status(400)
            .json({ success: false, message: "Data not exists." });
    }

    // return
    res.status(200).json({ success: true, data });

})