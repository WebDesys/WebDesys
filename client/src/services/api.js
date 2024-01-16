export const BASE_URL = 'http://localhost:8080'
// export const BASE_URL = 'https://api.webdesys.com'

export const Admins = {
    AllAdmins_API: BASE_URL + "/api/v1/fetchAdminModelData",
    CreateAdmin_API: BASE_URL + "/api/v1/createNewAdmin",
    DeleteAdmin_API: BASE_URL + "/api/v1/deleteAdminByDBId",
    UpdateAdmin_API: BASE_URL + "/api/v1/updatePasswordFieldOfAdmin",
    LoginAdmin_API: BASE_URL + "/api/v1/adminsLogin"
};


export const ContactPageAPI = {
    CreateAContact_API: BASE_URL + "/api/v1/sendARequestForContact",
    AllContact_API: BASE_URL + "/api/v1/fetchAllRequestsOfContacts",
    DeleteContact_API: BASE_URL + "/api/v1/deleteContactRequest"
}

export const CareerPage = {
    CreateCareer_API: BASE_URL + "/api/v1/createcareer",
    AllCareer_API: BASE_URL + "/api/v1/fetchallcareer",
    DeleteCareer_API: BASE_URL + "/api/v1/deletecareer",
    UpdateCareerStatus_API: BASE_URL + "/api/v1/updatecareerstatus"
}


export const BlogsAPI = {
    CreateBlog_API: BASE_URL + "/api/v1/createBlog",
    AllBlogs_API: BASE_URL + "/api/v1/fetchallblogs",
    DeleteBlogs_API: BASE_URL + "/api/v1/deleteblog",
    SingleBlog_API: BASE_URL + "/api/v1/fetchablog"
}

export const Testimonial = {
    CreateTestimonial_API: BASE_URL + "/api/v1/createtestimonial",
    AllTestimonial_API: BASE_URL + "/api/v1/fetchalltestimonials",
    DeleteTestimonial_API: BASE_URL + "/api/v1/deletetestimonial",
}

export const ClientsLogo = {
    CreateClientLogo_API: BASE_URL + "/api/v1/createclientlogo",
    AllClientLogo_API: BASE_URL + "/api/v1/fetchallclientlogos",
    DeleteClientLogo_API: BASE_URL + "/api/v1/deleteclientlogo"
}


export const ProjectAPI = {
    CreateProject_API: BASE_URL + "/api/v1/createproject",
    AllClientProject_API: BASE_URL + "/api/v1/fetchallprojects",
    DeleteClientProject_API: BASE_URL + "/api/v1/deleteproject"
}