import React, { useState } from 'react'

function Todo() {
  const[item,setItem]=useState("")
  const[task,setTask]=useState([])
  const addtask=()=>{
    if(item==="") return
    setTask([...task,item])
    setItem("")
  }
  const deletetask=(index)=>{
    const filter=task.filter((_,i)=>i!==index)
    setTask(filter)
  }
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 flex flex-col gap-6 shadow-2xl w-96">
        <h1 className="text-white text-2xl font-bold tracking-tight">Todo App</h1>
        <div className="flex gap-2">
          <input
            placeholder="Enter a item"
            value={item}
            onChange={(e)=>setItem(e.target.value)}
            className="flex-1 bg-gray-800 text-white placeholder-gray-500 text-sm px-4 py-2.5 rounded-xl border border-gray-700 outline-none focus:border-emerald-500 transition-colors"
          />
          <button
            onClick={addtask}
            className="bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors duration-150"
          >
            Add
          </button>
        </div>
        <ul className="flex flex-col gap-2">
          {task.map((t,i)=>(
            <li key={i} className="flex items-center justify-between bg-gray-800 px-4 py-3 rounded-xl border border-gray-700">
              <span className="text-white text-sm">{t}</span>
              <button
                onClick={()=>deletetask(i)}
                className="text-red-400 hover:text-red-300 text-xs font-semibold transition-colors duration-150"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Todo

