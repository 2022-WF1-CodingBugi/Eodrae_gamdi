import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Map from "../Components/Map/Map";
import "./Sub.css"
import List from "../Components/List/List"; // foodList -> List로 변경
import activity from "../Data/activity";
import attraction from "../Data/attraction";
import lodging from "../Data/lodging";
import food from "../Data/food"

const MapDiv = ({history}) => {
    const [inputText, setInputText] = useState("");
    const [place, setPlace] = useState("");
    const [category, setCategory] = useState(activity); // 일단 액티비티로 해놈
    const [selected, setSelected] = useState('activity') //옵션 선택바가 자동으로 바뀌게 수정
    const [search,setSearch] = useState(true) //검색기능이 최초 한번 실행 이후 안되는걸 고치기 위한 변수

    useEffect(() => {
        const temp = sessionStorage.getItem('category');
        setSelected(temp);
        switch (temp) {
            // 호빈 : List에 카테고리 데이터가 아닌 카테고리 이름만 넘겨주는 것으로 바꾸는건 어떨까요??
            // 이유 : 데이터를 받아서 그대로 map함수를 적용하면 컴포넌트가 화면에 나타나지 않습니다.
            // 그래서 현재 List.js에서 카테고리 이름을 받아 매칭되는 데이터를 불러오는 구조여서
            // 데이터가 두 번 불러와지기 때문입니다. 변경 안해도 코드 동작에는 문제 없습니다.
            case 'activity': setCategory(activity); break;
            case 'attraction': setCategory(attraction); break;
            case 'food': setCategory(food); break;
            case 'lodging': setCategory(lodging); break;
        }
    }, [])

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
        search?setSearch(false):setSearch(true) //검색 버튼을 누를때마다 search값 바뀌게 설정

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

                <select onChange={changeCategory} id="categorySelect" value={selected} >
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
                <button id="initializeBtn" type="reset">초기화</button>
                <Link to = "/sub/addList">
                <button id="addBtn" type="add" style = {{display : (localStorage.getItem("loginFlag") === "ON")? "" : "none"}}
                >추가</button></Link>
            </form>
            
            <Map searchPlaces={place} input={inputText} search={search}/>
            <List places={category} category={selected} /> 
        </>
    );
};
//Map 컴포넌트에 장소정보와 검색한 텍스트를 넘겨줌
export default MapDiv;