import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Map from "../Components/Map/Map";
import "./Sub.css"
import $ from 'jquery';
import List from "../Components/List/List"; 
import activity from "../Data/activity";
import attraction from "../Data/attraction";
import lodging from "../Data/lodging";
import food from "../Data/food";
import searchIcon from "../Resources/Images/background-image/searchIcon.png";
import Swal from "sweetalert2"; // 알림창 모듈

const MapDiv = () => {
    const [inputText, setInputText] = useState("");  // 검색창에 검색하는 내용
    const [place, setPlace] = useState("") // 장소데이터(배열)
    const [category, setCategory] = useState(activity); // 일단 액티비티로 해놈
    const [selected, setSelected] = useState('activity') //옵션 선택바가 자동으로 바뀌게 수정
    
    useEffect(() => {
        const temp = sessionStorage.getItem('category');
        setSelected(temp);
        const data=JSON.parse(localStorage.getItem(temp))
        if(data!=undefined){
            setCategory(data)
             // 로컬스토리지에서 데이터를 받아와 장소 데이터 설정
            }
        else{
            //세션스토리지에 설정된 카테고리에 따라 장소 데이터(배열) 설정
        switch (temp) {
            case 'activity': setCategory(activity); break;
            case 'attraction': setCategory(attraction); break;
            case 'food': setCategory(food); break;
            case 'lodging': setCategory(lodging); break;
        }
    }
    },[])

    // 카테고리옵션 바뀔 때 마다 장소 데이터 설정
    useEffect(() => {
        setPlace(place)
    }, [selected])
    
    const onChange = (e) => {
        setInputText(e.target.value);
    };

    const changeCategory = (e) => {

        let select = e.target.value;
        sessionStorage.setItem('category', select);

        switch (select) {
            case 'activity': setCategory(activity); break;
            case 'attraction': setCategory(attraction); break;
            case 'food': setCategory(food); break;
            case 'lodging': setCategory(lodging); break;
        }
        setSelected(select)
        $(".List-Container").animate({ scrollTop: 0 }, "fast"); 

        //카테고리에 따라 데이터 선택
    }
   

    // 검색기능 구현
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputText !== "") {  // null 감지 여부 
            if (inputText != "all") { // all 입력시 모든 장소 보여줌
                let tempArray = category.filter(place => place.name.includes(inputText)); // inputText조건에 맞는 장소 이름들로 필터링 함
                if (tempArray.length == 0) { //검색 결과가 존재하지 않을 떄
                    setPlace("")
                    Swal.fire({
                        icon: 'error',    
                        text: '검색하신 장소가 존재하지 않습니다.',  
                        confirmButtonText: "확인"
                    });
                } else {
                    setPlace(tempArray);
                }
            } else {
                setPlace(category);
            }
        } else {
            setPlace("")
        }

    };
    // 초기화 버튼
    const handleReset = (e) => {
        e.preventDefault();
        setPlace("");
        setInputText("");
    };
    // 모두보기 버튼
    const handleShowAll = (e) => {
        e.preventDefault();
        setPlace(category)
    }


    return (
        <>
            <form className="inputForm" onSubmit={handleSubmit} onReset={handleReset}>
                <div className="searchDiv">
                <select onChange={changeCategory} id="categorySelect" value={selected} >
                    <option value="activity">액티비티 🪂</option>
                    <option value="food">맛집 🍚</option>
                    <option value="lodging">숙소 🏠</option>
                    <option value="attraction">명소 🏔️</option>
                </select>
                <div className="searchInputDiv">
                <input
                    id="searchInput" type="text" size="50" defaultValue=""
                    placeholder=" Search Place..."
                    onChange={onChange}
                    value={inputText}
                />
                <img id="searchIcon" onClick={handleSubmit} src={searchIcon}/>
                </div>
                <div className="buttonDiv">
                <button type="submit" style={{display:"none"}}>enterKey시 검색할 수 있는 형식상 submit 버튼</button>
                <button id="initializeBtn" type="reset">초기화</button>
                <button id ="showAllBtn" onClick={handleShowAll}>모두 보기</button>
                
                <Link to="/sub/addplace">
                    <button id="addBtn" type="add" disabled={(localStorage.getItem("loginFlag") === "ON") ? false : true} style={{ display: (localStorage.getItem("loginFlag") === "ON") ? "" : "none" }}
                    >추가</button></Link>
                </div>
                </div>
            </form>
            <div className="mapListDiv">
            <Map searchPlaces={place} /> 
            <List places={category} setPlace={setPlace} />
            </div>
        </>
    );
};
// Map 컴포넌트에 조건에 충족하는 장소 데이터 넘겨줌
// List 컴포넌트에 카테고리에 맞는 장소 데이터와 장소 데이터 설정 함수 넘겨줌
export default MapDiv;