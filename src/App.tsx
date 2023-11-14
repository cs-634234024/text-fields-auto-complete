import TextField2 from "./components/TextField";
import './App.css'
import { useEffect, useState } from "react";

function App() {
   const [data ,setData] = useState<string>('')
   const [data2 ,setData2] = useState<string>('')
   const [data3 ,setData3] = useState<string>('')
   
   useEffect(()=>{
    console.log(data);
    
   },[data])
  return (
    <>
      <div className="content">
        <TextField2 id="test" label="Outline" variant="outlined"  setData={setData} />
        <TextField2 id="test" label="Outline" variant="filled"  setData={setData2} />
        <TextField2 id="test" label="Outline" variant="standard"  setData={setData3} />
        <h1>{data}</h1>     
        <h1>{data2}</h1>     
        <h1>{data3}</h1>     
      </div>
    </>
  );
}



export default App;
