import React, { useRef, useState } from 'react'

function Stopwatch() {
  const[time,setTime]=useState(0)
  const timeRef=useRef(null)
  const handleStart=()=>{
    if(timeRef.current!==null) return
    timeRef.current=setInterval(() => {
      setTime(prev=>prev+1)
    }, 1000);
  }
  const handleStop=()=>{
    clearInterval(timeRef.current)
    timeRef.current=null
  }
  const handleReset=()=>{
    clearInterval(timeRef.current)
    timeRef.current=null
    setTime(0)
  }
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10 flex flex-col items-center gap-8 shadow-2xl w-80">
        <p className="text-white font-mono text-5xl font-bold tracking-tight">Time: {time}</p>
        <div className="flex gap-3 w-full">
          <button onClick={handleStart} className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold py-3 rounded-xl transition-colors duration-150">Start</button>
          <button onClick={handleStop} className="flex-1 bg-gray-700 hover:bg-gray-600 text-white text-sm font-semibold py-3 rounded-xl transition-colors duration-150">Stop</button>
          <button onClick={handleReset} className="flex-1 bg-red-500 hover:bg-red-400 text-white text-sm font-semibold py-3 rounded-xl transition-colors duration-150">Reset</button>
        </div>
      </div>
    </div>
  )
}

export default Stopwatch