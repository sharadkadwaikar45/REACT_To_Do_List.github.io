import logo from './logo.svg';
import './App.css';
import Header from './Header';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import Navbar from './Navbar';
import { Card } from 'react-bootstrap';
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  let header = "Our Coursess"
  let [todostate,setTodostate]= useState([])

  let submitData = (event)=>{
     event.preventDefault()
     let todoname = event.target.todoname.value
     if(!todostate.includes(todoname)){
        let finalToDoList = [...todostate,todoname];
        setTodostate(finalToDoList);
        
     }else{
        toast.warning("Data allready exist");
     }
  }

  let list =  todostate.map((value,index)=>{
    return(
      <ToDoLitItems value={value} key={index} indexNum={index} todostate={todostate} setTodostate={setTodostate}/>
    )
  })
  return (
    <div className="App">
      <Navbar />
      <ToastContainer />
      {/* <Header header={header}/> */}
      <h1>To Do List</h1>
      <form className="form" onSubmit={submitData}>
        <input type="text" name="todoname" /> <button>Save</button>
      </form>

      <div className='outerdiv'>
        <ul className="list">
          {list}
        </ul>
      </div>
    </div>
  );
}
export default App;

function ToDoLitItems({value,key,indexNum,todostate,setTodostate}){
  let deleterow = ()=>{
    let Data = todostate.filter((v,i)=>i != indexNum )
    setTodostate(Data);
  }
  return(
    <li>
      {indexNum+1}. {value} <span onClick={deleterow}>&times;</span>
    </li>
  )
}