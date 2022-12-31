
// export default App;
// import { useState } from 'react';
import './App.css'; 
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'; 
// import Alert from './components/Alert';
 
function App() { 
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  // for alert
  //const [alert, setAlert] = useState(null)

  // const showAlert = (message, type) =>{
  //   setAlert({
  //     msg:message,
  //     type:type
  //   })
  // }

  const toggleMode = ()=>{ 
    if(mode ==='light'){
      setMode ('dark');
      document.body.style.backgroundColor = 'gray';
    }else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Navbar title="JoinUs" mode={mode} toggleMode = {toggleMode}/>
    {/* <Alert alert = "this is alert"/> */}
    <div className="container my-3">
    <TextForm heading="Text Analyzer" mode={mode}/>
    {/* <About/> */}
   
    
    </div>
    </> 
  );
}

export default App;