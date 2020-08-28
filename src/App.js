import React, { useState } from 'react';
import './App.css';


function App() {
  
  
    const modules =[
      {name :'Bootstrap', price : 100},
      {name :'JS', price : 120},
      {name :'Angular', price : 130},
      {name :'Php', price : 140},
      {name :'Java', price : 150},
      {name :'Python', price : 170},
      {name :'UI Design', price : 180},
      {name :'UX Design', price : 190},
      {name :'Vue', price : 200},
      {name :'HTML', price : 210},
      {name :'CSS', price : 220},
      {name :'C#', price : 230}
    ]
    return (
    <div className="App">
      <CourseCounter></CourseCounter>
      {
        modules.map(md => <Course name ={md.name} price={md.price}></Course>)
      }
      

    </div>
  );
}

function CourseCounter(){
  const [count, setCount]= useState(0);
  
  const handleClick =() => setCount(count +1 );
  
  return (
    <div>
      <button onClick={handleClick} > Cart </button>
      <h3> Items Ordered : {count} </h3>
    </div> 

  )
}

function Course(props){
console.log(props)
const courseStyle = {
    
    border:'5px solid gray',
    margin: '50 px',
    borderRadius : '20px',
    
      
  }
  return (
   <div style ={courseStyle}>
   <h2> Learn {props.name} </h2>
   <p> Price {props.price}</p> 
   
   <button> Enroll Now </button>
   </div>
)
}


export default App;