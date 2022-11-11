import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Main from "./Pages/Main";
import Sub from './Pages/Sub';
import AddList from './Components/List/AddList';

const App = () => {
    return (
        <div style={{ textAlign: 'center' }}>
        
                <Routes>
                <Route path="/" element ={ <Main onChange = {() => window.location.href = "/sub"} />}></Route>
                <Route path="/sub" element ={<Sub />}></Route>
                <Route path="/sub/addList" element ={<AddList/>}></Route> 
                </Routes>
        
        </div>
    )
}

export default App;