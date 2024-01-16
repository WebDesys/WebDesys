// Model for client logos in home page
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    link: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const model = mongoose.model("clientLogoModel", schema);

module.exports = model;