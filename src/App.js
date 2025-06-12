import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import Navbar from './Navbar';
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  let [todostate, setTodostate] = useState([]);
  let [todoInput, setTodoInput] = useState('');

  let submitData = (event) => {
    event.preventDefault();
    let todoname = todoInput.trim();
    if (!todostate.includes(todoname) && todoname !== '') {
      let finalToDoList = [...todostate, todoname];
      setTodostate(finalToDoList);
      setTodoInput('');
    } else {
      toast.warning("Data already exists or is empty");
    }
  };

  let list = todostate.map((value, index) => {
    return (
      <ToDoLitItems
        value={value}
        key={index}
        indexNum={index}
        todostate={todostate}
        setTodostate={setTodostate}
      />
    );
  });

  return (
    <div className="App">
      <Navbar />
      <ToastContainer />
      <h1>To Do List</h1>
      <form className="form" onSubmit={submitData}>
        <input
          type="text"
          name="todoname"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button>Save</button>
      </form>
      <div className="outerdiv">
        <ul className="list">{list}</ul>
      </div>
    </div>
  );
}
export default App;

function ToDoLitItems({value,key,indexNum,todostate,setTodostate}){
  let deleterow = ()=>{
    let Data = todostate.filter((v,i)=>i !== indexNum )
    setTodostate(Data);
  }
  return(
    <li>
      {indexNum+1}. {value} <span onClick={deleterow}>&times;</span>
    </li>
  )
}