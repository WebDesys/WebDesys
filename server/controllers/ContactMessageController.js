const contactModel = require("../models/contactModel");
const adminModel = require("../models/adminModel");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const { validationResult } = require("express-validator");
const nodemailer = require('nodemailer');


// 1. ..................................................Send a request.....................................................
exports.sendARequestForContact = catchAsyncError(async (req, res, next) => {
    // validate req
    const err = await validationResult(req);
    if (!err.isEmpty()) {
        return res.status(400).json({ success: false, error: err });
    }

    //   body
    const { name, email, mobile, type, message } = req.body;


    // if fields are undefined
    if (!name || !email || !mobile || !type || !message) {
        return next(
            new ErrorHandler(
                "Invalid request format. Check field keys and values.",
                400
            )
        );
    }

    let mailTransporter = nodemailer.createTransport({
        host: 'premium275.web-hosting.com',
        port: 465,
        service: 'cPanel Webmail',
        secure: true,
        auth: {
            user: "developers@webdesys.com",
            pass: "developersSV26"
        }
    });

    let details = {
        from: "developers@webdesys.com",
        to: 'utpalrai@webdesys.com, sales@webdesys.com, info@webdesys.com, business@webdesys.com, shubhvaish50@gmail.com',
        subject: `Contact Message Received From - ${name} `,
        html: `
            <!DOCTYPE html>
                <html>
                <head>
                <title>Manuscript Submission Confirmation</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 20px;
                        border: 1px solid #252525;
                        padding: 20px;
                    }
                </style>
                </head>
                <body>
                <table style="border-collapse: collapse; border: 1px solid black; width: 100%;">
                    <tr>
                    <td style="padding: 20px;">
                    <div>
                        Name : ${name} <br/>
                        Email : ${email} <br/>
                        Mobile : ${mobile} <br/>
                        Message : ${message} <br/>
                        Type : ${type} <br/>
                    </div>
                    </td>
                    </tr>
                </table>
                </body>
            </html>
`
    }


    mailTransporter.sendMail(details)

    //   save data
    const data = await contactModel.create({
        name: name ? name.trim() : undefined,
        email: email ? email.trim() : undefined,
        mobile: mobile ? mobile.trim() : undefined,
        type: type ? type.trim() : undefined,
        message: message ? message.trim() : undefined,
    });

    // send response
    return res
        .status(200)
        .json({ success: true, message: "Form submitted successfully.", data });
});

// 2. .................................................View all request....................................................
exports.fetchAllRequestsOfContacts = catchAsyncError(async (req, res, next) => {
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

    count = await contactModel.count();
    data = await contactModel
        .find().sort({ createdAt: -1 })
        .skip((pageNo - 1) * pageSize)
        .limit(pageSize)
        .exec();

    return res
        .status(200)
        .json({ success: true, count, resultCount: data ? data.length : 0, data });
});

// 3. ..................................................delete request.....................................................
exports.deleteContactRequest = catchAsyncError(async (req, res, next) => {
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
    const data = await contactModel.findByIdAndDelete(dbId);

    // check if data already deleted or not exists situation...
    if (!data) {
        return res
            .status(400)
            .json({ success: false, message: "Data already deleted or not exists." });
    }

    // return
    res.status(200).json({ success: true, message: "Deletion successful." });
});