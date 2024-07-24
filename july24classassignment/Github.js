import React,{useState} from 'react'
import axios from 'axios';

const Github = () => {
    const [name,setName]=useState("");
    const [data,setData]=useState("");
    function handleSubmit()
    {
        axios.get(`https://api.github.com/users/${name}`)
        .then((response) => {
            console.log(response.data);
            setData(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }
  return (
    <>
    <div>
      <h2>Github</h2>
      <input type='text' placeholder='Github UserName' value={name} onChange={(e)=>setName(e.target.value)}/>
      <button onClick={handleSubmit}>Get Data</button>
    </div>
    
    </>
  )
}

export default Github
