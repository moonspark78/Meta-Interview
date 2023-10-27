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

    if(currentIndex === -1){
      newCheckedItems.push(item);
    } else {
      newCheckedItems.splice(currentIndex, 1)
    }
    setCheckedItems(newCheckedItems);
  };

  const moveRight = () =>{
    console.log("moveRight");
  }

  const moveLeft = () =>{
    console.log("moveLeft");
  }


  console.log(checkedItems );

  return (
    <div className="App flex">
     <List items={leftItems} handleToggle={handleToggle}/>
     <Actions moveLeft={moveLeft} moveRight={moveRight}/>
     <List items={righrItems} handleToggle={handleToggle}/>

    </div>
  );
}

export default App; 
