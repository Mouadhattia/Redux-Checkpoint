
import './App.css';
import AddTask from './Component/AddTask';
import ListTask from './Component/ListTask';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [filter, setFilter] = useState(false) 
  const toggle=()=> {
    setFilter(!filter)
  }
  return (
    <div className="App">
      <h1>TODO APP </h1>
      <div className='container'>
     
     <ListTask filter={filter}/>
     <AddTask toggle={toggle} filter={filter}/>
     </div>
    </div>
  );
}

export default App;
