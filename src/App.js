import { Actions } from './Actions';
import { List } from './List';
import './App.css';
import {items} from "./data"
import { useState } from 'react';

function App() {
  const [leftItems, setLeftItems] = useState(items)
  const [righrItems, setRightItems] = useState([])
  return (
    <div className="App flex">
     <List items={leftItems}/>
     <Actions/>
     <List items={righrItems}/>

    </div>
  );
}

export default App; 
