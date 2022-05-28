
import React,{useContext} from 'react'
import { Formcontext } from './context/Formcontext';

const Showdata = () => {
  const {formdata}=useContext(Formcontext);
  console.log("data",formdata)


  return (
    <div>
     {/* <h3> Hi!,{formdata.name}</h3>
      <p>email:{formdata.email}</p> */}


    </div>
  )
}

export default Showdata;