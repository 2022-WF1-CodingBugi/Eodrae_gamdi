import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Main from "./Pages/Main";
import Sub from './Pages/Sub';
import AddPlace from './Components/List/AddPlace';
import activity from './Data/activity';
import attraction from './Data/attraction';
import food from './Data/food';
import lodging from './Data/lodging';
import { useEffect } from 'react';

const App = () => {
    useEffect(()=>{
        if(localStorage.activity == undefined){
            localStorage.setItem('activity',JSON.stringify(activity))
        }
        if(localStorage.attraction == undefined){
            localStorage.setItem('attraction',JSON.stringify(attraction))
        }
        if(localStorage.food == undefined){
            localStorage.setItem('food',JSON.stringify(food))
        }
        if(localStorage.lodging == undefined){
            localStorage.setItem('lodging',JSON.stringify(lodging))
        }
    },[]) // 성관 :처음 렌더링될때 로컬스토리지에 값이 undefined 인 경우 우리가 초기 설정해둔 데이터를 로컬스토리지에 저장
    return (
        <div style={{ textAlign: 'center' }}>
        
                <Routes>
                <Route path="/" element ={ <Main onChange = {() => window.location.href = "/sub"} />}></Route>
                <Route path="/sub" element ={<Sub />}></Route>
                <Route path="/sub/addplace" element ={<AddPlace/>}></Route> 
                </Routes>
        
        </div>
    )
}

export default App;