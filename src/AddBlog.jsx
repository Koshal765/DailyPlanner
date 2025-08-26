import React from 'react'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import axios from "axios"

const AddBlog = () => {
  const[title, setTitle]=useState("")
  const[blogVal, setBlogVal]=useState("")
  const[date, setDate]=useState("")

  const handleSubmit =  async (e) => {
    e.preventDefault();
    setTitle(true);
    setBlogVal (true);
    setDate(true);
    // Navigate("/displayShelf");


    const Blog = {
      title,
      blogVal,
      date
    };

    console.log(Blog);
    try{
       await axios.post("https://6880ebc1f1dcae717b63f960.mockapi.io/blog",Blog)
    } catch(error){
   console.log("Error",error)
    }
   

  }

  return (
   <>
   
       <div className='flex justify-center'>
        <div className='bg-gray-200 rounded-2xl mt-15 w-100 '>
          <h1 className='text-4xl font-bold ml-30 mt-5 text-purple-600 rounded-full'>Add Task</h1>
          <form className='mt-5 ml-10' onSubmit={handleSubmit}>
            
          <input required placeholder='Title' className='ml-6 h-10 w-75 mt-2 bg-gray-300 rounded-full'
          value={title}onChange={(e)=>setTitle(e.target.value) }
          ></input><br/>
          <input type='date' required className='ml-6 w-75 h-10 mt-3 bg-gray-300 rounded-full' value={date}onChange={(e)=>setDate(e.target.value)}></input><br/>
          <textarea className=' bg-gray-300 ml-6 w-75 h-10 mt-3 rounded-full' value={blogVal}onChange={(e)=>setBlogVal(e.target.value)}></textarea><br/>
          <button className='bg-gray-400 p-2 ml-15 mt-3 w-45 mb-5 rounded-full hover:' >+</button>
        </form>
        </div>
       </div>
   </>
  )
} 

export default AddBlog