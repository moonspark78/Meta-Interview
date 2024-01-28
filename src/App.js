import { Actions } from './Actions';
import { List } from './List';
import './App.css';
import {items} from "./data"
import { useState } from 'react';
import { intersection, not } from './utils';
import {Form} from "./Components/Form"

function App() {
  const [leftItems, setLeftItems] = useState(items)
  const [righrItems, setRightItems] = useState([])
  const [checkedItems, setCheckedItems] = useState([])

  const leftCheckedItems = intersection(leftItems, checkedItems)
  const rightCheckedItems = intersection(righrItems, checkedItems)

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
    setRightItems(righrItems.concat(leftCheckedItems))
    setLeftItems(not(leftItems, leftCheckedItems))
    setCheckedItems(not(checkedItems, leftCheckedItems))
  }

  const moveLeft = () =>{
    setLeftItems(leftItems.concat(rightCheckedItems))
    setRightItems(not(righrItems, rightCheckedItems))
    setCheckedItems(not(checkedItems, rightCheckedItems))
  }


  console.log(checkedItems );

  return (
    <div className="App flex">
     {/* <List items={leftItems} handleToggle={handleToggle}/>
     <Actions moveLeft={moveLeft} moveRight={moveRight}/>
     <List items={righrItems} handleToggle={handleToggle}/> */}

     <Form/>

    </div>
  );
}

export default App; 
