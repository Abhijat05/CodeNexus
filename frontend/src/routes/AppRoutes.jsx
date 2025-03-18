import React from "react";
import Login from "../screens/Login";
import Register from "../screens/Register";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../screens/Home";

const AppRoutes = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>

        </BrowserRouter>
    );
}

export default AppRoutes;
