import React from 'react';


const TodoCard = (props) => {
 
    const {task, description,tags,deadline, _id}= props.data;
    const {deleteTodo}= props;
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) {
          return 'Invalid Date';
        }
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const year = String(date.getFullYear()).slice(-2); // Get last two digits of year
        return `${day}/${month}/${year}`;
      };
    

  return (
     
    <div className="m-4 p-4 w-[250px] h-[400px] bg-indigo-200 rounded-2xl  hover:bg-blue-300">
    <img className="w-[220px] h-[130px] rounded-2xl mb-3"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd4Q8H-byRIxvTBVEPBR6fDFusPXWMxRsNeA&s" alt="product pic" />
    <h1 className="text-xl font-bold ">{task}</h1>
    <p className='text-gray-700 '>{description}</p>
    <h2 className='text-gray-500 ' >{formatDate(deadline)}</h2>
    <h2 className='text-gray-500 '>{tags}</h2>
    <div className="flex justify-center ">
        <button onClick={()=>deleteTodo(_id)} className="bg-blue-500 w-[150px] mt-5 h-10 text-white px-4 py-2 rounded-2xl justify-end">
          Complete Task
        </button>
      </div>

</div>
  )
}

export default TodoCard