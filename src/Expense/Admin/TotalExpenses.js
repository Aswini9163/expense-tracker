import axios from 'axios'
import React, { useEffect, useState } from 'react'

const TotalExpenses = () => {
  const [expenses, setExpenses] = useState([])
  const [budget, setBudget] = useState(40000)
 

  useEffect(()=>{
    axios.get(`http://localhost:4000/expenses`)
    .then(response => {
      //console.log(response.data)
      setExpenses(response.data)
      })
      .catch(error => {
        console.error(error)
        })
  },[])
  const total = expenses.reduce((sum, exp) => sum +Number(exp.price), 0);
   const remaining = budget-total;
   
      return (
        <div className='container-fluid'>
          <h2>Total Expenses</h2>
          <div className='container p-5 expenses'>
            <button>Budget: ₹{budget}</button>
          <button>Total Expenses: ₹{total}</button>
          <button>Remaining: ₹{remaining}</button>
          </div>
          </div>
        )
}

export default TotalExpenses
