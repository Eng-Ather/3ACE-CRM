const dev_url = "http://localhost:4000";

 const prod_url = 'https://3-ace-crm-backend.vercel.app';

// const Base_URL = dev_url;
const Base_URL = prod_url;


const AppRouts = {
  signin: Base_URL + "/user/login",
  signup: Base_URL + "/user/signup",
 getCurrentUserInfo: Base_URL + "/user/currentUserInfo",

  getAllProject: Base_URL + "/projects/allproject",
  getSpecificProject: Base_URL + "/projects/",
  editProject: Base_URL + "/projects",
  deleteProject: Base_URL + "/projects",
  addNewProject: Base_URL + "/projects/newproject",

};
export default AppRouts;
