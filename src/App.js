
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";


export default function App() {
  const apiKey= process.env.REACT_APP_NEWS_API
  const[progress,setProgress]=useState(0);

  const backgroundStyle = {
      backgroundColor: "black",
      color: "white",
      margin: 0,
      padding: 0,
      yOverflow: 0
    }

   return (
      <BrowserRouter>
        <div style={backgroundStyle}>
          <Navbar />
          {/* //progressBar */}
          <LoadingBar
            height={3}
            color="#f11946"
            progress={progress}
          />
          <Routes>
            <Route exact path="/" element={<News apikey={apiKey} setProgress={setProgress} key="general" noOfNews={6} category='general' />}></Route>
            <Route exact path="/general" element={<News apikey={apiKey} setProgress={setProgress} key="general" noOfNews={6} category='general' />}></Route>
            <Route exact path="/business" element={<News apikey={apiKey} setProgress={setProgress} key="business" noOfNews={6} category='business' />}></Route>
            <Route exact path="/entertainment" element={<News apikey={apiKey} setProgress={setProgress} key="entertainment" noOfNews={6} category='entertainment' />}></Route>
            <Route exact path="/health" element={<News apikey={apiKey} setProgress={setProgress} key="health" noOfNews={6} category='health' />}></Route>
            <Route exact path="/science" element={<News apikey={apiKey} setProgress={setProgress} key="science" noOfNews={6} category='science' />}></Route>
            <Route exact path="/sports" element={<News apikey={apiKey} setProgress={setProgress} key="sports" noOfNews={6} category='sports' />}></Route>
            <Route exact path="/technology" element={<News apikey={apiKey} setProgress={setProgress} key="technology" noOfNews={6} category='technology' />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    )
}

  
  


