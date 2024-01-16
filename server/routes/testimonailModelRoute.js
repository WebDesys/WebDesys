const testimonialRoutes = require('express').Router();
const { fetchUser } = require('../middleware/fetchUser');
const { createTestimonail, fetchallTestimonials, deleteTestimonial } = require('../controllers/testimonialModelController');

//  {name, designation, message, image, rating}

//1......... create a testimonial..........
testimonialRoutes.route("/api/v1/createtestimonial").post(fetchUser, createTestimonail);


// 2.-----------------fetch all testimonial---------------
testimonialRoutes.route("/api/v1/fetchalltestimonials").get(fetchallTestimonials);

// 3...................delete a testimonial---------------
testimonialRoutes.route("/api/v1/deletetestimonial/:dbId").delete(fetchUser, deleteTestimonial);


module.exports = testimonialRoutes;