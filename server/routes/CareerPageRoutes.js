const careerRoutes = require('express').Router();
const { fetchUser } = require('../middleware/fetchUser');
const { createCareer, fetchallCareer, deleteCareer, updateCareer } = require('../controllers/CareerPageController');


// 1.-------------create career-----------------
// {
//    "position": "nwdjcnkl",
//    "count": "12",
//    "salary": "10000",
//    "active": true,
//    "link": "cmdlc",
//    "requirementArray": ["cndj", "ndksc"],
//    "responsibilityArray": ["cndj", "ndksc"]
// }
careerRoutes.route("/api/v1/createcareer").post(fetchUser, createCareer);

// 2.-----------------fetch all career---------------
careerRoutes.route("/api/v1/fetchallcareer").get(fetchallCareer)


// 3...................delete a career---------------
careerRoutes.route("/api/v1/deletecareer/:dbId").delete(fetchUser, deleteCareer);


// 4--------------------update career---------------------------
careerRoutes.route("/api/v1/updatecareerstatus/:dbId").put(fetchUser, updateCareer);

module.exports = careerRoutes;