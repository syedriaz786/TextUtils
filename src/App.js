// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import Alert from './components/Alert';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {

  const [mode, setmode] = useState('light')       //

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({

      msg: message,                                                 // <-- yahan humne aik function me objext banaya hai
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
const removeBodyClasses = () =>{
  
  document.body.classList.remove('bg-success');
  document.body.classList.remove('bg-primary')
  document.body.classList.remove('bg-secondary')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-warning')
}

  const toggleMode = (cls) => {                               //
                                                        //
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if (mode === 'light') {                             //      <---- 7. yahan humne props k under state ko use kia hai
      setmode('dark')      
                                                      //                or isko props ko humne navbar me define kia hai or  
      document.body.style.background = '#042743'      //                 value humne isi page pr di hai
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtils - Dark Mode";
    }

    else {
      setmode('light')
      document.body.style.background = 'white'
      document.body.style.transition = 'ease 0.5s all'
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>

      <Router>
        {/* 1. yahan humne aik navbar component ko call kraya hai */}

        { /* 2. or is component k ander humne aik props j under value pass karai hai  */}

        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />              {/*  FIRST COMPONENT */}
        {/* <Navbar />  4. ye humne default props ka istemal k lia use kia hai  */}


        {/*<About/>    */}                                                                                      {/*  Third COMPONENT */}
        <Alert alert={alert} />                                                                                    {/*  Fourth COMPONENT */}


        <div className="container text-center mt-5">




       
        <Routes>

            {/* <Route exact path="/textUtils" element={ <TextFrom heading="Enter The Text To Analyze" mode={mode} showAlertsss={showAlert} />}> */}
                          {/*  SECOND COMPONENT */}
            {/* </Route> */}

            <Route path="/textUtils" element={<TextFrom heading="Enter The Text To Manipulate " mode={mode} showAlertsss={showAlert} />} />
            <Route path="/abouts" element={<About  mode={mode}/>} />
            {/* <Route exact path="/abouts" element={<About/>}> */}
              {/* <About /> */}
            {/* </Route> */}
         

            </Routes>

        </div>

      </Router>






    </>
  );
}

export default App;
