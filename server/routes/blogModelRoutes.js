const blogRoutes = require('express').Router();
const { fetchUser } = require('../middleware/fetchUser');
const { createBlog, fetchallBlogs, deleteBlog, fetchaBlog } = require('../controllers/BlogModelController');

// name, image , desc, content


// 1.-------------create career-----------------
// {
//     "name": "cdcdsc",
//      "image": "vnkfvmk",
//      "desc": "c sdkmvck",
//      "content": "v ksvns"
// }
blogRoutes.route("/api/v1/createblog").post(fetchUser, createBlog);

// 2.-----------------fetch all career---------------
// /api/v1/fetchallblogs?pageNo=4&pageSize=2
blogRoutes.route("/api/v1/fetchallblogs").get(fetchallBlogs)

// 3...................delete a career---------------
blogRoutes.route("/api/v1/deleteblog/:dbId").delete(fetchUser, deleteBlog);


blogRoutes.route("/api/v1/fetchablog/:dbId").get(fetchaBlog);


module.exports = blogRoutes;