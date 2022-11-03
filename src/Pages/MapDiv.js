import React, { useState } from "react";
import Map from "../Components/Map/Map";
import "./Sub.css"
import FoodList from "../Components/FoodList/FoodList";
import {activity} from "../Data/activity";
import attraction from "../Data/attraction";
import lodging from "../Data/lodging";
import restaurant from "../Data/restaurant"

const MapDiv = () => {
    
    const [inputText, setInputText] = useState("");
    const [place, setPlace] = useState("");
    const [category,setCategory] = useState("");

    const onChange = (e) => {
        setInputText(e.target.value);
        
    };
    const changeCategory = (e) => {
        
        let select = e.target.value;
        switch(select){
            case 'activity':setCategory(activity); break;
            case 'attraction':setCategory(attraction); break;
            case 'restaurant':setCategory(restaurant); break;
            case 'lodging':setCategory(lodging); break;
        }
        //카테고리에 따라 데이터 선택
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputText !== "") {
            
            setPlace(category);
            //카테고리에 맞게 place변경
        } else {
            setPlace("")
        }

        // setInputText("");
    };

    const handleReset = (e) => {
        e.preventDefault();
        setPlace("removeAll");
        setInputText("");
    };
    

    return (
        <>
            <form className="inputForm" onSubmit={handleSubmit} onReset={handleReset}>
                
                <select onChange={changeCategory} id="categorySelect">      
                    <option value ="activity">액티비티</option>
                    <option value ="restaurant">맛집</option>
                    <option value ="lodging">숙소</option>
                    <option value ="attraction">명소</option>
                </select>
                <input
                    id="searchInput" type="text" size="50" defaultValue=""
                    placeholder="Search Place..."
                    onChange={onChange}
                    value={inputText}
                />
                <button id="searchBtn" type="submit">검색</button>
                <button id="searchBtn" type="reset">초기화</button>
            </form>
            <Map searchPlaces={place} input={inputText} /> 
            
            <FoodList />
        </>
    );
};
//Map 컴포넌트에 장소정보와 검색한 텍스트를 넘겨줌
export default MapDiv;