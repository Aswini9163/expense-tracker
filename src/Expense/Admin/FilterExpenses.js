

import axios from 'axios';
import React, { useEffect, useState } from 'react'


const FilterExpenses = () => {
 
    const [expenses, setExpenses] = useState([]);
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");

   useEffect(()=>{
    axios.get('http://localhost:4000/expenses')
    .then(res => {
      console.log(res.data)
   })
   .catch(error => {
    console.error(error);
   })
})


   const FilterExpenses = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:4000/expenses?date=${date}&category=${category }`)
    .then(res => {
      //console.log(res.data)
      setExpenses(res.data)
      })
      .catch(error => {
        console.error(error);
        })
        }

   
      return(
        <div className='container-fluid'>
        <h2 className='mb-3'>Filter Expenses</h2>
        <form className='col-lg-6 shadow mx-auto p-5 ' onSubmit={FilterExpenses}>
        <select name="category" onChange={(e)=>setCategory(e.target.value)} value={category} className="form-control mb-3">
                    <option>select Category</option>
                        <option>food </option>
                        <option>
                            transport
                        </option>
                        <option>
                           shopping
                        </option>
                        <option>
                            other
                        </option>
                    </select>
        <input type="date" name="date" onChange={(e)=>setDate(e.target.value)} placeholder="Date" value={date} className="form-control mb-3"/>
        <button className="btn btn-primary">check</button>
        </form>
       
       <h3 className='mt-3 mb-3'>Filtered Expenses</h3>
     <table className='table table-bordered mt-3'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
      {
                    expenses.map((exp, index)=>{
                        return (
                            <tr key={index}>
                              <td>{exp.id}</td>
                                <td>{exp.name}</td>
                                <td>{exp.category}</td>
                                <td>{exp.price}</td>
                                <td>{exp.date}</td>
                                
                            </tr>
                        )
                    })
                }

      </tbody>
     </table>
          
         


      </div>
      )
}


export default FilterExpenses