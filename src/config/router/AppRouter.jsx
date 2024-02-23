import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../../screens/homePage/Home'
import AuthRoutes from '../privateRoutes/AuthRoutes'
import Login from '../../screens/login/Login'


const AppRouter = () => <Router>
    <Routes>
        <Route element={<AuthRoutes />}>
            <Route path='/' element={<HomePage />} />
        </Route>

        <Route path='/login' element={<Login />} />

    </Routes>
</Router>

export default AppRouter