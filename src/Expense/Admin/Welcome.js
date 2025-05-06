import React from "react";
import { NavLink } from "react-router-dom";
import TotalExpenses from "./TotalExpenses";

const Welcome = () => {
  return (
    <div className="p-2">
      <h1>Welcome To Expense Tracker</h1>
      <div className="col-lg-6 d-flex justify-content-between p-5 mx-auto">
        <p>Add New Expense</p>
        <NavLink to={"addexpenses"}>
          <button className="btn text-bg-success plus">+</button>
        </NavLink>
      </div>
        <TotalExpenses/>
    </div>
  );
};

export default Welcome;
