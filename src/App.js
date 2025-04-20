
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import 'datatables.net-dt/css/dataTables.dataTables.min.css'
import 'datatables.net-dt/js/dataTables.dataTables.min.js'
import "animate.css"
import './App.css';
import Header from './Expense/Header';
import Footer from "./Expense/Footer";
import Routing from "./Expense/Routing";
import { createContext, useState } from "react";


export const loginStatus=createContext()

function App() {
  const [login,setLogin]=useState(false)
  return (
    <div className="App">
      <loginStatus.Provider value={[login, setLogin]}>
      <Header />
      <Routing/>
     <Footer/>
      </loginStatus.Provider>
    
     
    </div>
  );
}

export default App;
