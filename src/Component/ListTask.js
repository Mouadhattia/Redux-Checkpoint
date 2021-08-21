
import { useSelector } from 'react-redux'
import Task from './Task'

const ListTask = ({filter}) => {
    const List = useSelector(state => state)
    
   
    return (
        <div style={{width:'80%'}}>
            {filter?List.filter(el=>el.isDone===true).map(el=><Task el={el}/>):List.map(el=><Task el={el}/>)}
            
        </div>
    )
}

export default ListTask
