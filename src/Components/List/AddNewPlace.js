import { useState } from "react";
import activity from "../../Data/activity";
import attraction from "../../Data/attraction";
import lodging from "../../Data/lodging";
import food from "../../Data/food"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const AddNewPlace = ({addingPlace}) =>{
    let navigate = useNavigate()
    console.log(addingPlace)
    const [InputText, setInputText] = useState('')
    const [selected, setSelected] = useState('')

   
    const onChange = (e) => {
        setInputText(e.target.value)
    }
    const changeCategory=(e)=>{
        let select = e.target.value;
        sessionStorage.setItem('category', select);
        setSelected(select)

    }
    const addData = (data) =>{
       data.push(
        {name:`${addingPlace.place_name}`,
        latitude: `${addingPlace.y}`,
        longitude: `${addingPlace.x}`,
        address: `${addingPlace.road_address_name}`,
        image: "./images/activity/9.81파크.png",
        kakao_map: "https://place.map.kakao.com/1868828759",
        keyword: ["카트", "테마파크"],
        like: 0,
        star: 0.0,
        explanation:`${InputText}`
    }
       )
       switch(selected){
        case 'activity': localStorage.setItem(selected,JSON.stringify(data)); break;
        case'attraction': localStorage.setItem(selected,JSON.stringify(data)); break;
        case 'food': localStorage.setItem(selected,JSON.stringify(data)); break;
        case 'lodging': localStorage.setItem(selected,JSON.stringify(data)); break;
        // 성관 : 로컬스토리지에 사용자가 선택한 장소 카테고리에 맞게 추가
       }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
            switch (selected){
                case 'activity': addData(JSON.parse(localStorage.getItem(selected))); break;
                case 'attraction': addData(JSON.parse(localStorage.getItem(selected))); break;
                case 'food': addData(JSON.parse(localStorage.getItem(selected))); break;
                case 'lodging': addData(JSON.parse(localStorage.getItem(selected))); break;
                // 성관 :추가버튼 누르면 로컬스토리지에 있는 데이터 값을 addData()에 파라미터로 전달
            }
        setInputText('')
        navigate('/sub')
        window.location.reload()
    }
    return(
        <>
            <div>{addingPlace.place_name}</div>
            <form onSubmit={handleSubmit}>
            <select onChange={changeCategory} id="categorySelect" value={selected} >
                    <option>선택</option>
                    <option value="activity">액티비티</option>
                    <option value="food">맛집</option>
                    <option value="lodging">숙소</option>
                    <option value="attraction">명소</option>
                </select>
                <input placeholder="한줄평" onChange={onChange} value={InputText}>
                </input>
                <button type="submit" >추가</button>
            </form>
            
            </>
    )
}
export default AddNewPlace;