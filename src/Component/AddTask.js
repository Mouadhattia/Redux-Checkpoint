import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtask } from "../js/action";
import './Addtask.css'

const AddTask = ({toggle,filter}) => {
  const [item, setItem] = useState("");
  const titleTask = (e) => {
    setItem(e.target.value);
  };
  const dispatch = useDispatch();
  const add=()=>{
    if(item!=="")
    {dispatch(addtask({ task: item, id: Math.random(), isDone: false }));
  setItem("")}
  else
  {alert("Please enter your todo !") } }
  return (
    
    <div className='Addtask'>
      
      <input type="text" placeholder="Add new todo..." onChange={titleTask} value={item}/>
      <button
        onClick={add}>
        Add {" "}
      </button>
      <button onClick={toggle}  style={{backgroundColor:'green'}}>{filter?"Done":"All"}</button>
    </div>
    
    
  );
};

export default AddTask;
