import React, {useState} from 'react'
import "./Form.css"

export const Form = () => {
    const [objData, setObjData] = useState({})
    const getInputs = (value, name) =>{
        let data = {[name]: value}
        setObjData({...objData,...data})
    }
    const submit = (e) =>{
        e.preventDefault();
        console.log(objData);
    };

  return (
    <form onSubmit={submit}>
    <div className='to'>
        <h1>Forms</h1>
        <div className='form'>
        <input 
            placeholder='Write your name' 
            onChange={(e) => getInputs(e.target.value, e.target.name)}
            name='name'
            type='text'
        />
            

        <input 
            placeholder='Write your age'
            onChange={(e) => getInputs(e.target.value, e.target.name)}
            name='age'
            type='number'
        />

        <input 
            placeholder='Write your Hobbies'
            onChange={(e) => getInputs(e.target.value, e.target.name)}
            name="hobbies"
            type='text'
        />

        <input 
            placeholder='Write your date'
            onChange={(e) => getInputs(e.target.value, e.target.name)}
            name='date'
            type='date'
        />

            
        <button type='submit' >Submit</button>
        <button type='reset' >Reset</button>

        


        </div>
    </div>
    </form>
  )
}
