import { useEffect, useState } from "react";

const Todos = () => {
const url ="https://jsonplaceholder.typicode.com/todos";
const [todos, settodos]=useState([]);

useEffect(()=>{
const getTodos = async()=>{
    const res =await fetch(url);
    const todos=await res.json();
    settodos(todos);
}
getTodos();
},[]);
return (
    <div>
        todos
        {
            todos.length<=0?<h1>No todos found</h1>:
            <ul>
                {todos.map((todo)=>
            <li key={todo.id}> {todo.title}
            </li>)}
            </ul>
        }
        </div>
  )
}

export default Todos