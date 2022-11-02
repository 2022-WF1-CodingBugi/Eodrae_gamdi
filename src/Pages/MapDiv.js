import React, { useState } from "react";
import Map from "../Components/Map/Map";
import { sampledata } from "../Data/SampleData";
import FoodList from "../Components/FoodList/FoodList";
import {activity} from "../Data/activity";
import attraction from "../Data/attraction";
import lodging from "../Data/lodging";
import restaurant from "../Data/restaurant"

const MapDiv = () => {
    const c =[...activity,...attraction,...lodging,...restaurant]
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
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputText == `s`) {
            
            setPlace(category);
            
        } else {
            setPlace("")
        }

        setInputText("");
    };

    const handleReset = (e) => {
        e.preventDefault();
        setPlace("removeAll");
        setInputText("");
    };

    return (
        <>
            <form className="inputForm" onSubmit={handleSubmit} onReset={handleReset}>
                
                <select onChange={changeCategory}>
                    <option value ="activity">액티비티</option>
                    <option value ="restaurant">맛집</option>
                    <option value ="lodging">숙소</option>
                    <option value ="attraction">명소</option>
                </select>
                <input
                    placeholder="Search Place..."
                    onChange={onChange}
                    value={inputText}
                />
                <button type="submit">검색</button>
                <button type="reset">초기화</button>
            </form>
            <Map searchPlaces={place} />
            <FoodList />
        </>
    );
};
export default MapDiv;