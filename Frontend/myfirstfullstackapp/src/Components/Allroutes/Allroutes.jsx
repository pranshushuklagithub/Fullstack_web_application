import { Route,Routes } from "react-router-dom";
import LoginSignup from "../Login-Signup";
import Home from "../Home";
import YourAds from "../YourAds";

export default function Allroute() {
    return <Routes>
        <Route path="/loginSignup" element={<LoginSignup/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/yourAds" element={<YourAds/>}/>
    </Routes>
}