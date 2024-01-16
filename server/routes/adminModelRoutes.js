const adminModelRoutes = require('express').Router();
const { fetchUser } = require('../middleware/fetchUser')
const {
    signup,
    createNewAdmin,
    login,
    fetchAdminModelData,
    deleteAdminByDBId,
    updatePasswordFieldOfAdmin,
} = require('../controllers/adminModelController');

// 1. signup : for making a administrator (superAdmin) :- has a full access and created by developer (only one time) : body :- name (String), email (String), password (String)

// 2. createNewAdmin : for creating new admins : perform by superAdmin : body :- name (String), email (String), password (String)

// 3. login : admin and administrator (superAdmin) login api : body :- email (String), password (String)

// 4. view all admins : query :- roleType (admin, superAdmin, all)

// 5. delete admin : one by one : params :- dbId

// 6. update admin password : params :- dbId, body :- password

adminModelRoutes.route("/api/v1/signup-njdcljdsncjlkdnscndsjlcnldn").post(signup);
adminModelRoutes.route("/api/v1/adminsLogin").post(login);

adminModelRoutes.route("/api/v1/createNewAdmin").post(fetchUser, createNewAdmin);
adminModelRoutes.route("/api/v1/fetchAdminModelData").get(fetchUser, fetchAdminModelData);
adminModelRoutes.route("/api/v1/deleteAdminByDBId/:dbId").delete(fetchUser, deleteAdminByDBId);
adminModelRoutes.route("/api/v1/updatePasswordFieldOfAdmin/:dbId").put(fetchUser, updatePasswordFieldOfAdmin);

module.exports = adminModelRoutes;