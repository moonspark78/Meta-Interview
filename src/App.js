import { Actions } from './Actions';
import { List } from './List';
import './App.css';
import {items} from "./data"
import { useState } from 'react';

function App() {
  const [leftItems, setLeftItems] = useState(items)
  const [righrItems, setRightItems] = useState([])
  const [checkedItems, setCheckedItems] = useState([])

  const handleToggle = (item) =>{
    const currentIndex = checkedItems.indexOf(item)
    const newCheckedItems  = [ ...checkedItems]
    

  }
  return (
    <div className="App flex">
     <List items={leftItems}/>
     <Actions/>
     <List items={righrItems}/>

    </div>
  );
}

export default App; 
