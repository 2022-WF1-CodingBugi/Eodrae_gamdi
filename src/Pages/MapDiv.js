import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Map from "../Components/Map/Map";
import "./Sub.css"
import $ from 'jquery';
import List from "../Components/List/List"; // foodList -> List로 변경
import activity from "../Data/activity";
import attraction from "../Data/attraction";
import lodging from "../Data/lodging";
import food from "../Data/food";
import searchIcon from "../Resources/Images/background-image/searchIcon.png";
import Swal from "sweetalert2"; // 알림창 모듈

const MapDiv = () => {
    const [inputText, setInputText] = useState("");
    const [place, setPlace] = useState("")
    const [category, setCategory] = useState(activity); // 일단 액티비티로 해놈
    const [selected, setSelected] = useState('activity') //옵션 선택바가 자동으로 바뀌게 수정
    
    useEffect(() => {
        const temp = sessionStorage.getItem('category');
        setSelected(temp);
        const data=JSON.parse(localStorage.getItem(temp))
        if(data!=undefined){
            setCategory(data)
             // 성관: 그냥 스테이트로 로컬스토리지 데이터 받아와서 카테고리로 설정해주면 되는거였음...
             // setPlace(category) <- 이거는 첫화면에 마커 다 뜨게하는건데 맛집은 안뜸. 아마 우 치면 안나오는거랑 같은 오류인듯 
    
            }
        else{
        switch (temp) {
            case 'activity': setCategory(activity); break;
            case 'attraction': setCategory(attraction); break;
            case 'food': setCategory(food); break;
            case 'lodging': setCategory(lodging); break;
        }
    }
        //const i = data.length - attraction.length
        // for (let i = 0; i<data.length; i++) {
        //     attraction.splice(i, 1, data[i])
        // }
        
    
    },[])

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
   

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputText !== "") {
            if (inputText != "all") {
                let tempArray = category.filter(place => place.name.includes(inputText));
                if (tempArray.length == 0) {
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

        //search ? setSearch(false) : setSearch(true) //검색 버튼을 누를때마다 search값 바뀌게 설정

        // setInputText("");
    };

    const handleReset = (e) => {
        e.preventDefault();
        setPlace("");
        setInputText("");
    };
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
//Map 컴포넌트에 장소정보와 검색한 텍스트를 넘겨줌
export default MapDiv;