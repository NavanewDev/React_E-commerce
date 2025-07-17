import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Auth from "../Pages/Auth/Auth";
import Error from "../Pages/Error";
import AuthCheck from "../Pages/Auth/AuthCheck";

function MainLayout()
{
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route index element={
                    <AuthCheck>
                        <Home/>
                    </AuthCheck>
                }/>
                <Route path="auth" element={<Auth />}>
                    <Route path="login" element={<Login/>}/>
                    <Route path="register" element={<Register/>}/>
                </Route>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default MainLayout;