
import {createContext,useState} from "react";


export const Formcontext=createContext();


export const FormcontextProvider=({children})=>{
  const[formdata,setFormdata]=useState()

   const putformdata=(value)=>{
     setFormdata(value)
   }


 return(
 <Formcontext.Provider value={{formdata,putformdata}}>{children}</Formcontext.Provider>

 )
}

