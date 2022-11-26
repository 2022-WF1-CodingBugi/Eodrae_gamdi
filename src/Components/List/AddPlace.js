/*global kakao */
import React, { useEffect, useState } from 'react';
import './List.css';
import './AddPlace.css'
import {AddPlaceMap} from './AddPlaceMap';
import searchIcon from "../../Resources/Images/background-image/searchIcon.png";




const AddPlace = (()=>{
  const [InputText, setInputText] = useState('') // 추가할 장소이름 검색
  const [Place, setPlace] = useState('') // 추가할 장소 데이터 설정

  const onChange = (e) => {
    setInputText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPlace(InputText)
    setInputText('')
  }

  return (
    <>
      <form className="inputForm" onSubmit={handleSubmit}>
        <div className = "addSearchDiv">
        <div className="searchInputDiv">
        <input
              id="searchInput" type="text" size="50" defaultValue=""
              placeholder=" 추가하려는 장소를 입력하세요"
              onChange={onChange}
              value={InputText}/>
          <img id="searchIcon" onClick={handleSubmit} src={searchIcon}/>
          </div>
          <div className="buttonDiv">
          <button type="submit" style={{display:"none"}}>enterKey시 검색할 수 있는 형식상 submit 버튼</button>
          <button id="searchBtn" onClick={handleSubmit}>검색</button>
          </div>
          </div>
      </form>
      
      <AddPlaceMap searchPlace={Place} />
      
    </>
  )
})
// AddPlaceMap 컴포넌트에 이름으로 검색한 장소 데이터 전달
export default AddPlace;