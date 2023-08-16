import './App.css'
import Alert from './components/Alert'
// import About from './components/About'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import React, {useState} from 'react'
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const toggleModeDark = ()=>{
    if(mode==="light"){
      setMode('dark')
      document.body.style.backgroundColor = "#292929"
      document.body.style.Color = "white"
      showAlert("Dark Mode has been enabled!","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = "white"
      document.body.style.Color = "black"
      showAlert("Light Mode has been enabled!","success")
    }
  }
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route exact path="/" element={
    //         <>
    //         <Navbar title="TextUtils" mode={mode} toggleModeDark={toggleModeDark} />
    //         <Alert alertText={alert}/>
    //         <div className="container my-3">
    //           <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
    //         </div>
    //       </>
    //     }/>
    //     <Route exact path="/about" element={
    //       <>
    //         <Navbar title="TextUtils" mode={mode} toggleModeDark={toggleModeDark} />
    //         <Alert alertText={alert}/>
    //         <div className="container my-3">
    //           <About mode={mode} toggleModeDark={toggleModeDark} />
    //         </div>
    //       </>
    //     }/>
    //   </Routes>
    // </BrowserRouter>
    <>
      <Navbar title="TextUtils" mode={mode} toggleModeDark={toggleModeDark} />
      <Alert alertText={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
      </div>
    </>
  )
}

export default App