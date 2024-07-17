import axios from 'axios';
import React, { useState } from 'react'

const Addtodo = () => {



    const [formData, setFormData]= useState({
        task:'',
        description:'',
        deadline:'',
        tags:'Medium'

    })
    

    const handleChange=(e)=>{
    
    setFormData({
        ...formData,
         [e.target.name]: e.target.value
      });

    }

    console.log(formData);

    const handleSubmit= (e)=>{

     e.preventDefault();

      addTodo(formData);
    }

     const addTodo= async()=>{

        const res= await axios.post("http://localhost:8080/todos", formData);
        console.log(res.data.msg);
     }
  
    return <div className="bg-gray-100 flex items-center justify-center min-h-screen">
    <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Product Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="task" className="block text-gray-700 font-medium mb-2">Task</label>
          <input
            type="text"
            id="task"
            name="task"
            value={formData.task}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
    
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="deadline" className="block text-gray-700 font-medium mb-2">Deadline</label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tags">
          Tags
        </label>
        <select
          id="tags"
          value={formData.tags}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
          
        </div>
        
        
        <div>
          <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
        </div>
      </form>
      
    </div>
  </div>


}

export default Addtodo;