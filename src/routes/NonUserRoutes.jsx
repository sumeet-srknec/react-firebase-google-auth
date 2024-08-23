import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import CreateUser from '../pages/CreateUser'
import Login from '../pages/Login'
import NavBar from '../components/NavBar'

export default function NonUserRoutes() {
    return (
        <div>
            <NavBar>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create-user" element={<CreateUser />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/*" element={<Home />} />
                </Routes>
            </NavBar>
        </div>
    )
}
