import React, { useState } from 'react'
import axios from 'axios'



const AddExpenses = () => {
    const [name ,setName]=useState("");
    const [category, setCategory]=useState("");
    const [price, setPrice]= useState("");
    const [date, setDate ]=useState("");
 
  const submitHandler = (e) => {
    e.preventDefault();
    //console.log(name, category, price, date);
    axios.post('http://localhost:4000/expenses',{name,category,price,date})
    .then((res) => {
       // console.log(res.data)
        alert('New Expense added successfully')
        setName('')
        setCategory('')
        setPrice('')
        setDate('')
    })
    .catch((err)=>{
        console.log(err);
    })
  }

  return (
    <div className='container mb-5 mt-5'>
        <div className='col-lg-6 p-5 shadow1 mx-auto'>
            <h2 className='mb-3'>Add Expenses</h2>
            <form onSubmit={submitHandler}>
                    <input type="text" name="name" onChange={(e)=>setName(e.target.value)}placeholder="Name" value={name} className="form-control mb-3"/>
                    {/*<input type="text" name="category" onChange={(e)=>setCategory(e.target.value)} placeholder="Catogery" value={category} />*/}
                    <select name="category" onChange={(e)=>setCategory(e.target.value)} value={category} className="form-control mb-3">
                    <option >
                            select Category
                        </option>
                        <option>
                          food
                        </option>
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
                    <input type="text" name="price" onChange={(e)=>setPrice(e.target.value)}placeholder="Price" value={price} className="form-control mb-3"/>
                    <input type="date" name="date" onChange={(e)=>setDate(e.target.value)} placeholder="Date" value={date} className="form-control mb-3"/>
                    
                    <input type="submit" value={`Add Expenses`} className="btn btn-primary"/>
                </form>
        </div>
    </div>
  )
}

export default AddExpenses