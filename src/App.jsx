import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userprofile from "./pages/Userprofile";
import Userlogin from "./pages/Userlogin";
import Usersignup from "./pages/Usersignup";
import Userforgotpw from "./pages/Userforgotpw";
import Artistforgotpw from "./pages/Artistforgotpw";
import ContactUs from "./pages/Contactus";
import AboutUspage from "./pages/Aboutuspage";
import Admindashboard from "./pages/Admindashboard";
import Homepage from "./pages/Homepage";
import AppBar from "./pages/Appbar";
import Payment from "./pages/Payment";
import Appointment from "./pages/Appointment";
import Mahendiartist from "./pages/Mahendiartist";
import Nailartist from "./pages/Nailartist";
import Makeupartist from "./pages/Makeupartist";
import Mahendiartistdetail from "./pages/Mahendiartistdetail";
import Orders from "./pages/Orders";
import Artistsignup from "./pages/Artistsignup";
import Artistlogin from "./pages/Artistlogin";
import Artistbooking from "./pages/Artistbooking";
import Artistprofile from "./pages/Artistprofile";

function Glamourshine() {
    return (
        <BrowserRouter>
            <AppBar />

            <Routes>
                <Route path="/User/Profile" Component={Userprofile}></Route>
                <Route path="/Contactus" Component={ContactUs}></Route>
                <Route path="/User/login" Component={Userlogin}></Route>
                <Route path="/User/signup" Component={Usersignup}></Route>
                <Route path="/Aboutuspage" Component={AboutUspage}></Route>
                <Route path="/Admindashboard" Component={Admindashboard}></Route>
                <Route path="/User/Forgotpw" Component={Userforgotpw}></Route> 
                <Route path="/Artist/Forgotpw" Component={Artistforgotpw}></Route>
                <Route path="/Homepage" Component={Homepage}></Route>
                <Route path="/User/Payment" Component={Payment}></Route>
                <Route path="/User/Appointment" Component={Appointment}></Route>
                <Route path="/User/Mahendiartist" Component={Mahendiartist}></Route>
                <Route path="/User/Nailartist" Component={Nailartist}></Route>
                <Route path="/User/Makeupartist" Component={Makeupartist}></Route>
                <Route path="/User/Mahendiartistdetail" Component={Mahendiartistdetail}></Route>
                <Route path="/User/Orders" Component={Orders}></Route>
                <Route path="/Artist/Signup" Component={Artistsignup}></Route>
                <Route path="/Artist/Login" Component={Artistlogin}></Route>
                <Route path="/Artist/Booking" Component={Artistbooking}></Route>
                <Route path="/Artist/Profile" Component={Artistprofile}></Route>

            </Routes>
        </BrowserRouter>
    )
}
export default Glamourshine;
