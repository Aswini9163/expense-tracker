import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import NoPage from './NoPage'
import AboutUs from './AboutUs'
import AdminLogin from './Admin/AdminLogin'
import Dashboard from './Admin/Dashboard'
import AddExpenses from './Admin/AddExpenses'
import ViewExpenses from './Admin/ViewExpenses'
import TotalExpenses from './Admin/TotalExpenses'
import Welcome from './Admin/Welcome'

import FilterExpenses from './Admin/FilterExpenses'



const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/dashboard" Component={Dashboard} > 
            <Route path="" Component={Welcome} />
            <Route path="addexpenses" Component={AddExpenses} />
            <Route path="viewexpenses" Component={ViewExpenses} />
            <Route path="totalexpenses" Component={TotalExpenses}/>
           
            <Route path="filterexpenses" Component={FilterExpenses}/>
            </Route>
        <Route path="*" element={<NoPage/>} />
    </Routes>
  )
}

export default Routing