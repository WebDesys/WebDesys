require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(express.json({ limit: '10mb' }));
app.use(cors());

// Uncaught Exception Error
process.on("uncaughtException", (err) => {
    console.log(`Error:${err.message}`);
    console.log(`Shutdown the server due to Uncaught Exception`);
    process.exit(1);
});

// Routers
app.get("/", (req, res) => {
    return res.status(200).json({ success: true, message: "API Works" });
})

// admin routes
const adminModelRoutes = require('./routes/adminModelRoutes');
app.use(adminModelRoutes);

// contact routes
const contactModelRoutes = require('./routes/ContactMessageRoutes');
app.use(contactModelRoutes)

// career routes
const careerPageRoutes = require('./routes/CareerPageRoutes')
app.use(careerPageRoutes)

// blogs Routes
const blogModelRoutes = require("./routes/blogModelRoutes"); 7
app.use(blogModelRoutes)

// project routes
const projectModelRoutes = require("./routes/projectModelRoutes")
app.use(projectModelRoutes)

// client Logo Model routes
const clientLogoModelRoutes = require('./routes/clientLogoModelRoutes')
app.use(clientLogoModelRoutes)

// testimonial model routes
const testimonialModelRoutes = require('./routes/testimonailModelRoute');
app.use(testimonialModelRoutes);

let server;
// Connect Database
const dbConnect = require("./database/dbConnect");
dbConnect().then(() => {
    server = app.listen(process.env.PORT, (e) => {
        console.log(
            `server running at PORT: ${process.env.PORT}`
        )
    })
});



// Unhandled Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutdown the server due to Unhandled Rejection`);
    server.close(() => {
        process.exit(1);
    });
});
