const mongoose = require('mongoose');

const dbConnect = async() => {
    mongoose.connect(process.env.MONGO_URL, { dbName: process.env.DB_NAME })
        .then(() => {
            console.log("Database connected successfully.");
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = dbConnect;