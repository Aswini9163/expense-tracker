import React, { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import AdminLogin from './AdminLogin'
import { loginStatus } from '../../App'

const Dashboard = () => {
  const [login, setLogin] = useContext(loginStatus)
  if(login){
  return (
    <div className='p-2 container-fluid width'>
      <div className='row'>
        <aside className='col-lg-3'>
          <NavLink to={''}>
           <h1 className='btn adminpanel mb-3'>Admin Dashboard</h1>
          </NavLink>

          <NavLink to={'addexpenses'}>
           <button>Add Expenses</button>
          </NavLink>

          <NavLink to={'viewexpenses'}>
            <button>View Expenses</button>
          </NavLink>
         
          <NavLink to={'filterexpenses'}>
            <button>Filter Expenses</button>
          </NavLink>

          <NavLink to={'totalexpenses'}>
            <button>Total Expenses</button>
          </NavLink>




        </aside>
        <div className='col-lg-9'>
          <Outlet/>
          </div>
      </div>

    </div>
  )
}
else{
  return <AdminLogin/>
  }
}

export default Dashboard