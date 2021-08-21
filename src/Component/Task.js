import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { completetask, deletetask } from '../js/action'
import Edit from './Edit'
import './Task.css';
import Checkbox from '@material-ui/core/Checkbox';

const Task = ({el}) => {
const dispatch = useDispatch()
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [id,SetId] = useState()
    return (
        <div className='Task'>
            <div>
            <Checkbox
        checked={el.isDone}
        onChange={()=>dispatch(completetask(el.id))}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
            
            <span className={el.isDone&&"line"}>{el.task}</span>
            </div>
            <div>
            <button onClick={()=>dispatch(deletetask(el.id))}style={{backgroundColor:'red',color:'white'}} >DEL</button>
            
            <button onClick={()=>{handleShow();SetId(el.id)}}style={{backgroundColor:'blue',color:'white'}} >EDIT</button>
            <Edit show={show} handleClose={handleClose} id={id} />
            </div>
        </div>
    )
}

export default Task
