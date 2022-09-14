import {useState, useEffect} from 'react'
import './App.css';
import fields from './data';

function App() {
  const [originalOptions, setOriginalOptions] = useState([])
  const [inputFields, setInputFields] = useState([])

  useEffect(()=>{
    setInputFields(fields)
    setOriginalOptions(fields)
  },[])

  const addField = (e)=>{
    const id = e.target.value
    const newInput = originalOptions.filter(input=>input._uid === id)
    console.log(newInput)
    setInputFields([...inputFields,newInput[0]])
  }
  const removeField = (index)=>{
    let data = [...inputFields];
    data.splice(index, 1)
    console.log(data)
    setInputFields(data)
    console.log(inputFields)
  }
 
  return (
    
    <div className="App">
      <h1>Dynamic Form</h1>
      <div className='form'>
        <div className='form__forms-rendered'>
        {inputFields && inputFields.map((input,index) =>{
          return(
            <div className='rendered-form-container' key={index}>
              <div>              
                <form> 
                  <label htmlFor={input.name}>
                    {input.label}
                  </label> 
                  <input
                    type={input.type}
                    name={input.name}
                    placeholder={input.placeholder}
                    value={input.name}
                  />
                </form>
              </div>
              <div>
                <button className='remove-button' onClick={()=>removeField(index)}>X</button>
              </div>
            </div>
            
          )
        }
      )}
        </div>
        <div className='form-options'>
        <label id='choose-option' htmlFor="input-select">Choose an input field to add</label>
          <select onChange={(e)=>addField(e)} name="inputs" id="input-select">
              <option value=""> --Please choose an option--</option>
              <option value="1"> First Name </option>
              <option value="2"> Last Name</option>
              <option value="3"> Email </option>
              <option value="4">Password</option>
              <option value="5">Gender</option>
          </select>

        </div>
      </div>
    </div>
  );
}

export default App;
