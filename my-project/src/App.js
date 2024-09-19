import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setcount]=useState(0);
  function decrementHandler(){
    setcount(count-1);
  }
  function incrementHandler(){
    setcount(count+1);
  }
  function resetHandler(){
    setcount(0);
  }
  return (
    <div >
      
      <div className="w-[100vw] h-[100vh] flex justify-center items-center flex-col gap-8 bg-slate-800 text-white font-bold text-3xl">
      <div className='text-blue-400'>Increment and decrement</div>
      <div className=' bg-slate-500 flex gap-10 justify-center py-3 px-3 rounded-sm' >
      <button onClick={decrementHandler}>-</button>
      <button>{count}</button>
      <button onClick={incrementHandler}>+</button>
      </div>
      <button className='bg-blue-400 py-2 px-2 rounded-sm' onClick={resetHandler}>Reset</button>
      </div> 
       
    </div>
  );
}

export default App;
