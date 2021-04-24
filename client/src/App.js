import React,{useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios'
import axios from 'axios';

function App() {

const[keyList, setKeyList] = useState([])
const [file, setFile] = useState()
const [data, setData] = useState([])

useEffect(()=>{
  Axios.get('http://localhost:5000/api/get').then((response)=>{
    
    setKeyList(response.data)
    //console.log(response.data)
  })
},[])


  return (
    <div className="App">
     <h1>FILE APPLICATION</h1>
     <div className="form">
       
     
      <h1>{keyList}</h1>
      
      

      </div>

    </div>

  );
}

export default App;