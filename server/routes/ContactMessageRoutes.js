const contactRoutes = require('express').Router();
const { fetchUser } = require('../middleware/fetchUser');
const { sendARequestForContact, fetchAllRequestsOfContacts, deleteContactRequest, } = require('../controllers/ContactMessageController');

// 1. Send a request for contact : perform by user : body :- name (String), email (String), mobile (String), type (String), message (String)

// 2. view all request : admin pannel (pageNo, pageSize)

// 3. delete contact request : perform by admin, superAdmin : params :- dbId

contactRoutes.route("/api/v1/sendARequestForContact").post(sendARequestForContact);
contactRoutes.route("/api/v1/fetchAllRequestsOfContacts").get(fetchUser, fetchAllRequestsOfContacts);
contactRoutes.route("/api/v1/deleteContactRequest/:dbId").delete(fetchUser, deleteContactRequest);

module.exports = contactRoutes;