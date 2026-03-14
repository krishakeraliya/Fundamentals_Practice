import { useEffect, useState } from "react";

function useDebounce(value,delay=500){
  const[debouncedvalue,setDebouncevalue]=useState("")
  useEffect(()=>{
const timer=setTimeout(() => {
  setDebouncevalue(value)
}, delay);
return(()=>{
  clearInterval(timer)
})
  },[value])
  return debouncedvalue;

}
export default useDebounce;
