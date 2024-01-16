const mongoose = require('mongoose');

const schema = mongoose.Schema({
    position: {
        type: String,
        require: true,
    },
    count: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        default: true,
    },
    link: {
        type: String,
    },
    requirementArray: {
        type: Array,
        required: true,
    },
    responsibilityArray: {
        type: Array,
        required: true,
    }
}, { timestamps: true });

const model = mongoose.model("careerModel", schema);

module.exports = model;