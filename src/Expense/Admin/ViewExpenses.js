import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'datatables.net-dt'

const ViewExpenses = () => {
    const [id, setId] = useState("");
     const [name ,setName]=useState("");
        const [category, setCategory]=useState("");
        const [price, setPrice]= useState("");
        const [date, setDate ]=useState("");
     const [expenses, setExpenses]=useState([]);

     useEffect(()=>{
        axios.get('http://localhost:4000/expenses')
        .then((res)=> {
           // console.log(res.data)
           console.log(res.json)
             setExpenses(res.data);
        })
        .catch((err)=>{
            console.log(err);
            })
            setTimeout(()=>{
       
            let table = new DataTable('#myTable');
           
           },[2000])

     },[])
     const deleteOneRecord = (expid) => {
        axios.delete(`http://localhost:4000/expenses/${expid}`)
        .then((res) => {
          alert('One Record is Deleted')
        })
        .catch((err) => {
            console.log(err);
            })

     }
     const getOneRecord = (expid) => {
        axios.get(`http://localhost:4000/expenses/${expid}`)
        .then((res) => {
            setId(res.data.id);
            setName(res.data.name);
            setCategory(res.data.category);
            setPrice(res.data.price);
            setDate(res.data.date);
            })
            
     }
     const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:4000/expenses/${id}`, {id,name,category,price,date})
        .then((res) => {
            alert('One Record is Updated')
        })
        .catch((err) => {
            console.log(err);
            })
        }
  return (
    <div className='container p-5'>
        <h2 className='text-center mb-3'>View Expenses</h2>
        <table className='table table-bordered' id='myTable'>
            <thead>
                <tr>
                    <th>Expense Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Date</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    expenses.map((exp, index)=>{
                        return (
                            <tr key={index}>
                                <td>{exp.name}</td>
                                <td>{exp.category}</td>
                                <td>{exp.price}</td>
                                <td>{exp.date}</td>
                                <td><button className='btn btn-primary'onClick={()=>getOneRecord(exp.id)}data-bs-toggle="modal" data-bs-target="#exampleModal" ><i className="bi bi-pencil"></i></button></td>
                                <td><button className='btn btn-danger'onClick={()=>deleteOneRecord(exp.id)}><i className="bi bi-trash3"></i></button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <div class="modal fade" id="exampleModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5">Edit Expenses</h1>
                   </div>
                   <div class="modal-body">
                 
                    <form onSubmit={submitHandler}>
                    <input type="text" name="name" onChange={(e)=>setName(e.target.value)}placeholder="Name" value={name} className="form-control mb-3"/>
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
                    <input type="text" name="price" onChange={(e)=>setPrice(e.target.value)}placeholder="Price" value={price} className="form-control mb-3"/>
                    <input type="date" name="date" onChange={(e)=>setDate(e.target.value)} placeholder="Date" value={date} className="form-control mb-3"/>
                    
                    <input type="submit" value={`Edit Expenses`} className="btn btn-primary"/>
                </form>
                </div>
                </div>
                </div>
              
                </div>
    </div>
  )
}

export default ViewExpenses


  

