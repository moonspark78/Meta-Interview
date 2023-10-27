import { Actions } from './Actions';
import { List } from './List';
import './App.css';

function App() {
  return (
    <div className="App flex">
     <List/>
     <Actions/>
     <List/>

    </div>
  );
}

export default App;
