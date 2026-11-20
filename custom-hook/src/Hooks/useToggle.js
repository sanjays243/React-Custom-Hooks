import { useState } from "react"

function useToggle(){
    const [show,setShow]=useState(false)
   const [pass,setPass]=useState(false)

    const toggle=()=>{
        setShow(!show)
    }
    const password=()=>{
        setPass(!pass)
    }
    return{show,toggle,pass,password}
}
export default useToggle;