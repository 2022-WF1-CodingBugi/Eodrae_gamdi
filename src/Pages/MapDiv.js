import React, { useEffect, useState } from "react";
import Map from "../Components/Map/Map";
import "./Sub.css"
import FoodList from "../Components/FoodList/FoodList";
import activity from "../Data/activity";
import attraction from "../Data/attraction";
import lodging from "../Data/lodging";
import food from "../Data/food"

const MapDiv = () => {
    const [inputText, setInputText] = useState("");
    const [place, setPlace] = useState("");
    const [category, setCategory] = useState(activity); // 일단 액티비티로 해놈
    const [selected,setSelected] = useState("") //옵션 선택바가 자동으로 바뀌게 수정

    useEffect(() => {
        const temp = sessionStorage.getItem('category');
        switch (temp) {
            case 'activity': setCategory(activity); break;
            case 'attraction': setCategory(attraction); break;
            case 'food': setCategory(food); break;
            case 'lodging': setCategory(lodging); break;
        }
        setSelected(temp)
    }, [])

    const onChange = (e) => {
        setInputText(e.target.value);
    };

    const changeCategory = (e) => {

        let select = e.target.value;
        switch (select) {
            case 'activity': setCategory(activity); break;
            case 'attraction': setCategory(attraction); break;
            case 'food': setCategory(food); break;
            case 'lodging': setCategory(lodging); break;
        }
        setSelected(select)
        
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

                <select onChange={changeCategory} id="categorySelect" value = {selected} >
                    <option value="activity">액티비티</option>
                    <option value="food">맛집</option>
                    <option value="lodging">숙소</option>
                    <option value="attraction">명소</option>
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
            <FoodList category={category} />
        </>
    );
};
//Map 컴포넌트에 장소정보와 검색한 텍스트를 넘겨줌
export default MapDiv;