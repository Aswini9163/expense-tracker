import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { loginStatus } from '../../App';

const AdminLogin = () => {
  const [details, setDetails] = useState({ username: "", password: "" });
  const [login, setLogin] = useContext(loginStatus);
  const navigate = useNavigate();

  const updateDetails = (e) => {
    //console.log(e.target.name, e.target.value)
    setDetails({ ...details, [e.target.name]: e.target.value });
  }
  const SubmitHandler = (e) => {
    e.preventDefault();
  // console.log(details);

    //destructuring
    const { username, password } = details;
    console.log(username, password);
  if (username === "" && password === "") {
    alert("Please enter your credentials");
    } else{

    if (username === "admin" && password === "admin") {
      setLogin(true);
      alert("login successful");
      navigate("/dashboard");
      } else {
        alert("Invalid credentials");
        }
        }

  }
  return (
    <div className='container '>
      <div className='col-md-6 p-5 shadow m-5 mx-auto'>
        <h3 className='mb-3'>Admin login</h3>
        <form onSubmit={SubmitHandler}>
          <div className="form-group">
           
            <input type="text" className="form-control mb-3" onChange={updateDetails}id="username" placeholder="Enter username " name="username"/>
          </div>
          <div className="form-group">
         
            <input type="password" className="form-control mb-3" onChange={updateDetails}id="password" placeholder="Enter password " name="password"/>
          </div>
          <input type="submit" className="btn btn-primary " value="Login"/>
        </form>

      </div>
      </div>
  )
}

export default AdminLogin