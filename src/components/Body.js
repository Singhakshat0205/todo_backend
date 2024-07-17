import React, { useEffect, useState } from 'react'
import axios from 'axios';
import TodoCard from './TodoCard';
const Body = () => {


    const [todos, setTodos]= useState([]);


    
   
    const getTodos= async()=>{
    
        const data= await axios.get('http://localhost:8000/todos');
      //  const data= await axios.get('http://[::1]:8080/todos');
        console.log(data.data);
        setTodos(data.data);
    }

    useEffect(()=>{
        getTodos();
      },[]);

    const deleteTodo= async(id)=>{
        
        const res=await axios.delete(`http://localhost:8000/todos/${id}`);
        
        if(res.data._id){
            const filteredTodos= todos.filter((t)=>t._id!== res.data._id);
            setTodos(filteredTodos);
        }

    }


  return (
    <div className="flex flex-wrap"> 
    {
        todos.map((todo,index)=><TodoCard data={todo} key={index} deleteTodo={deleteTodo} />)
    }
    </div>
  )
}

export default Body;