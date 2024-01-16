const projectRoutes = require('express').Router();
const { fetchUser } = require('../middleware/fetchUser');
const { createProject, fetchallProjects, deleteProject } = require('../controllers/projectModelController');

// name, image, desc, link, active 

// 1.-------------create project-----------------
// {
//     "name": "ndskc",
//      "image": "nkfdn",
//      "desc": "ndskvc",
//     "link": "ncdm"
// }
projectRoutes.route("/api/v1/createproject").post(fetchUser, createProject);


// 2.-----------------fetch all projects---------------
// /api/v1 / fetchallblogs ? pageNo = 5 & pageSize=2
projectRoutes.route("/api/v1/fetchallprojects").get(fetchallProjects);


// 3...................delete a project---------------
projectRoutes.route("/api/v1/deleteproject/:dbId").delete(fetchUser, deleteProject);



module.exports = projectRoutes;