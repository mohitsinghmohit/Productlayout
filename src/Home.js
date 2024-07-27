import React from 'react'
import React ,{useState}from 'react'

function Home(){
    const[data,setData]=useState(null)
    const[print,setPrint]=useState(false)
    function getData(val)
    {
        console.warn(val.target.val)
        setData(val.target.value)
    } 
  return (
    <div className="App">
        {
            print?
            <h1>{data}</h1>
            :null
        }
      <h1>{data}</h1>
      <input type="text" onChange={getData}/>
      <button>Print Data</button>
      <button onClick={setPrint(true)}>Print Data</button>
    </div>
  )
}
export default Home
