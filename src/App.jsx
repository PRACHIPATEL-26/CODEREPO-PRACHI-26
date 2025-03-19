import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Userprofile from "./pages/Userprofile";
import Userlogin from "./pages/Userlogin";
import Usersignup from "./pages/Usersignup";
import Appointment from "./pages/Appointment";
// // import Userforgotpw from "./pages/Userforgotpw";
import ContactUs from "./pages/Contactus";
import AboutUspage from "./pages/Aboutuspage";
// // import Adminsignup from "./pages/Adminsignup";
// import Admindashboard from "./pages/Admindashboard";
import HomePage from "./pages/Homepage";
import  AppBar  from "./pages/Appbar";
function Glamourshine(){
    return(
<BrowserRouter>
<AppBar/>

<Routes>
    
    {/* <Userprofile/> */}
    {/* <Route path="/Adminsignup" Component={Adminsignup}></Route> */}
{/* <Route path="/Userprofile" Component={Userprofile}></Route> */}
<Route path="/Contactus" Component={ContactUs}></Route>
    <Route path="/Userlogin" Component={Userlogin}></Route>
    <Route path="/Usersignup" Component={Usersignup}></Route>
    <Route path="/Appointment" Component={Appointment}></Route>
     <Route path="/Aboutuspage" Component={AboutUspage}></Route> 
     {/* <Route path="/Admindashboard" Component={Admindashboard}></Route>  */}
      {/* <Route path="/Userforgotpw" Component={Userforgotpw}></Route>  */}
      <Route path="/Homepage" Component={HomePage}></Route>
</Routes>
</BrowserRouter>
    )
}
export default Glamourshine;
