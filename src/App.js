import { useState } from 'react';
import './App.css';

function App() {
  const [result,setresult]=useState("")

  const clickHandler=(event)=>{
    setresult(result.concat(event.target.value))
  }
  const clearHandler=(event)=>{
    setresult("")
  }
  const calculate=()=>{
    setresult(eval(result).toString());
  }
  const clearOneHandler=()=>{
    setresult(result.slice(0,result.length-1))
  }
  return (
    <>
    
    
    <div className="calc">
      <input type="text" placeholder='0'id="answer" value={result}/>
      

      <div className="keypad">
      <input type="button" value="clear" id="clear"  onClick={clearHandler}/>
      <input type="button" value="C"  className='button' onClick={clearOneHandler}/>
      <input type="button" value="/" className='button' onClick={clickHandler}/>
      <input type="button" value="9" className='button' onClick={clickHandler}/>
      <input type="button" value="8" className='button' onClick={clickHandler}/>
      <input type="button" value="7" className='button' onClick={clickHandler}/>
      <input type="button" value="-" className='button' onClick={clickHandler}/>
      <input type="button" value="6" className='button' onClick={clickHandler}/>
      <input type="button" value="5" className='button' onClick={clickHandler}/>
      <input type="button" value="4" className='button' onClick={clickHandler}/>
      <input type="button" value="*" className='button' onClick={clickHandler}/>
      <input type="button" value="3" className='button' onClick={clickHandler}/>
      <input type="button" value="2" className='button' onClick={clickHandler}/>
      <input type="button" value="1" className='button' onClick={clickHandler}/>
      <input type="button" value="+" className='button' onClick={clickHandler}/>
      <input type="button" value="." className='button' onClick={clickHandler}/>
      <input type="button" value="," className='button' onClick={clickHandler}/>
     
      <input type="button" value="=" id="result" onClick={calculate}/>
      </div>
     
    </div>
    </>
  );
}

export default App;
