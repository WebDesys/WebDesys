const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    link: {
        type: String,
    }
}, { timestamps: true });

const model = mongoose.model("projectModel", schema);

module.exports = model;