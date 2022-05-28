import React,{useContext} from "react";
import { useForm  } from "react-hook-form";
import { Formcontext } from "./context/Formcontext";
const Form = () => {
    const{putformdata}=useContext(Formcontext)
  




  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => putformdata(data))}><br/>
      <input type="text" placeholder="enter name" {...register("name",{required:true,maxLength:15})} /><br/>
       {errors.name?.type === 'required' && " name is required"}<br/> 
      <input type="email" placeholder="enter email" {...register("email",{required:true})} /><br/>
      {errors.email?.type === 'required' && "email is required"}<br/>
      <input type="number" placeholder="enter mobile" {...register("mobile",{required:true,minLength:10})} /><br/>
      {errors.mobile?.type === 'required' && "mobile no is required"}<br/>
      <input
        type="password"
        placeholder="enter password"
        {...register("password",{required:true, pattern:/^[A-Za-z]+$/i})}
      /><br/>
       {errors.password?.type === 'required' && "not valid password"}<br/>
      select your Gender
      <select {...register("gender")}> 
           <option>Gender</option>
          <option value='female'>female</option>
          <option value="male">male</option>
      </select><br/>
      select your city:
      <select {...register("city")}> 
           <option>Cities</option>
          <option value='Bihar'>Bihar</option>
          <option value="rajasthan">Rajsthan</option>
          <option value='Gujrat'>Gujrat</option>
          <option value="Punjab">Punjab</option>
          <option value='jk'>JK</option>
          <option value="up">up</option>
      </select><br/>
      marital status:
      <input {...register("marital status")} type="radio" value="married" />married
      <input {...register("marital status")} type="radio" value="unmarried" />unmarried
        <br/>
        choose your games:
        <input {...register("games")} type="checkbox" value="hockey" />Hockey
      <input {...register("games")} type="checkbox" value="Badminton" />Badminton
      <input {...register("games")} type="checkbox" value="cricket" />cricket
      <input {...register("games")} type="checkbox" value="Golf" />Golf
      <input {...register("games")} type="checkbox" value="Football" />Football
      <input {...register("games")} type="checkbox" value="tennis" />Tennis
      {errors.games?.type === 'required' && "please choose at least one game"}


<br/>
      <input type="submit" />
    </form>
  );
};

export default Form;
