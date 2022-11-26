import { useState } from "react";
import { useNavigate } from "react-router-dom";


const AddNewPlace = ({addingPlace}) =>{
    let navigate = useNavigate()
    const [InputText, setInputText] = useState('') // 추가할 장소 한줄평 등록
    const [selected, setSelected] = useState('') // 추가할 장소의 카테고리 선택

   
    const onChange = (e) => {
        setInputText(e.target.value)
    }
    const changeCategory=(e)=>{
        let select = e.target.value;
        sessionStorage.setItem('category', select);
        setSelected(select)

    }
    // 추가할 장소 데이터를 로컬스토리지에 추가해주는 함수
    const addData = (data) =>{
       data.push(
        {name:`${addingPlace.place_name}`,
        latitude: `${addingPlace.y}`,
        longitude: `${addingPlace.x}`,
        address: `${addingPlace.road_address_name}`,
        image: "./images/error-Image.png",
        kakao_map: `${addingPlace.place_url}`,
        keyword: ["", ""],
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
        //  로컬스토리지에 사용자가 선택한 장소 카테고리에 맞게 추가
       }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
            switch (selected){
                case 'activity': addData(JSON.parse(localStorage.getItem(selected))); break;
                case 'attraction': addData(JSON.parse(localStorage.getItem(selected))); break;
                case 'food': addData(JSON.parse(localStorage.getItem(selected))); break;
                case 'lodging': addData(JSON.parse(localStorage.getItem(selected))); break;
                // 추가버튼 누르면 로컬스토리지에 있는 데이터 값을 addData()에 파라미터로 전달
            }
        setInputText('')
        navigate('/sub')
        window.location.reload()
    }
    return(
        <>
            <div className="addNewPlaceDiv">
            <div  className="addNewPlaceNameDiv" style={{ marginTop: '30px',  marginBottom: '20px' }}>
                "{addingPlace.place_name}"을/를 추가합니다</div>
            <form onSubmit={handleSubmit}>
            <div className="searchDiv" style={{marginBottom: '10px' }}>
            <select onChange={changeCategory} id="categorySelect" value={selected} >
                    <option>선택</option>
                    <option value="activity">액티비티 🪂</option>
                    <option value="food">맛집 🍚</option>
                    <option value="lodging">숙소 🏠</option>
                    <option value="attraction">명소 🏔️</option>
                </select>
                <div className="searchInputDiv">
                <input id = "searchInput" 
                    placeholder=" 한줄평을 입력하세요" 
                    onChange={onChange} value={InputText}>
                </input>
                </div>
                <div className="addButtonDiv">
                <button id="addWithCommentBtn" type="submit">추가</button>
                </div></div>
            </form>
            </div>
            </>
    )
}
export default AddNewPlace;