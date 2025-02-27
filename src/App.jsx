// import logo from './logo.svg';
import './App.css';
import {useState,useEffect, useRef} from 'react'
import Body from "./Body";
import Nav from "./Nav";
import Fbox from "./Fbox";


function App() {
  const [count, setCount] = useState('John doe')
  const myRef = useRef(count)
  
  const countHandler = ()=>{
    setCount(prompt('enter character'))
  }

  useEffect(()=>{
   if(myRef) console.log(myRef.current)
   if(count){
     window.document.body.style.backgroundColor='red'
   }
  },[count])
  return (
    <div>
      <div class="herobox">
        <header class = "heroimg">
<h1 style={{color:'white'}}>{count}</h1>
<h1 style={{color:'white'}}>{myRef.current}</h1>
<button  onClick={countHandler}>count</button>
          <Nav></Nav>
        </header>
      </div>

      <Fbox />
    </div>





  );
}

export default App;
