const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "name is required."]
    },
    email: {
        type: String,
        require: [true, "email is required."]
    },
    password: {
        type: String,
        require: [true, "password is required."],
        select: false
    },
    role: {
        type: String,
        require: true,
    }
}, { timestamps: true });

const model = mongoose.model("admins", schema);

module.exports = model;