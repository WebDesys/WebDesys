const clientLogoRoutes = require('express').Router();
const { fetchUser } = require('../middleware/fetchUser');
const { createClientLogo, fetchallClientLogo, deleteClientLogo } = require('../controllers/clientLogoModelController');

// link

// 1.-------------create client logo-----------------
// {
//     "link": "cdcdsc",
// }
clientLogoRoutes.route("/api/v1/createclientlogo").post(fetchUser, createClientLogo);



// 2.-----------------fetch client logo---------------
clientLogoRoutes.route("/api/v1/fetchallclientlogos").get(fetchallClientLogo);


// 3...................delete a client logo---------------
clientLogoRoutes.route("/api/v1/deleteclientlogo/:dbId").delete(fetchUser, deleteClientLogo);

module.exports = clientLogoRoutes;