import React from 'react';
import $ from 'jquery';
import { useState } from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import './List.css';
import { CompareSharp } from '@mui/icons-material';

const createArray = length => [...Array(length)];
let likeChecked;

$(function () {
  let list = document.getElementsByClassName("List-Item");
  let arrowList = document.getElementsByClassName("arrow_image");
  let i;

  for (i = 0; i < 30; i++) {
    arrowList[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var listImage = this.nextElementSibling;
      if (listImage.style.visibility === "visible") {
        listImage.style.height = "0vh";
        listImage.style.visibility = "hidden";
      }
      else {
        listImage.style.height = "50vh";
        listImage.style.visibility = "visible";
      }
    });
  }
});

function List({ places, setPlace }) {
  let listItem = JSON.parse(localStorage.getItem(sessionStorage.getItem('category')));
  likeChecked = JSON.parse(localStorage.getItem(`${sessionStorage.getItem('category')}Checked`)); // 좋아요 체크 여부 로컬 스토리지에서 가져오기

  const [icon, setIcon] = useState("");
  const [checked, setChecked] = useState(likeChecked);

  // 하트가 클릭 됐을 때 실행되는 함수
  const toggleLike = (event, i) => {
    likeChecked = JSON.parse(localStorage.getItem(`${sessionStorage.getItem('category')}Checked`));

     // 좋아요 취소
    if(likeChecked[i]) {
      listItem[i].like -= 1; // 좋아요 수 감소
    }
     // 좋아요
    else {
      listItem[i].like += 1; // 좋아요 수 증가
    }
    likeChecked[i] = !likeChecked[i]; // 체크 여부 바꿔주기

    // 로컬스토리지에 데이터, 좋아요 여부 저장
    localStorage.setItem(sessionStorage.getItem('category'), JSON.stringify(listItem));
    localStorage.setItem(`${sessionStorage.getItem('category')}Checked`, JSON.stringify(likeChecked));

    // 복사한 배열로 상태 변수 변경
    setChecked(likeChecked);
  }

  React.useEffect(() => {
    let category = sessionStorage.getItem('category');

    switch (category) {
      case "activity":
        setIcon("🪂");
        break;
      case "attraction":
        setIcon("🏔️");
        break;
      case "food":
        setIcon("🍚");
        break;
      case "lodging":
        setIcon("🏠");
        break;
    }

    for (let i = 0; i < listItem.length; i++) {
      document.getElementsByClassName('List-Item-Image-div')[i]
        .setAttribute("style", "height : 0vh");
      document.getElementsByClassName('List-Item-Image-div')[i]
        .setAttribute("style", "visibility : hidden");
    }


    // 좋아요 관련 배열 초기화
    setChecked(JSON.parse(localStorage.getItem(`${localStorage.getItem('category')}Checked`)));
  }, [places]);

  const list = listItem.map((item, i) =>
    <div className='List-Item-div' onClick={() => setPlace([item])}>
      <p className='List-Item'>
        {icon}&nbsp;
        [{item.name}]<br></br><br></br>
        {item.explanation}
        <p style={{display: "inline-block", float: "right"}}>{JSON.parse(localStorage.getItem(`${sessionStorage.getItem('category')}Checked`))[i] ? <HeartFilled onClick={(event) => toggleLike(event, i)} /> : <HeartOutlined onClick={(event) => toggleLike(event, i)} /> /* true면 꽉 찬 하트, false면 빈 하트 */}&nbsp;
        {item.like}</p>
        {/* 별점? 저장? item.star*/}
      </p>
      <img className='arrow_image' src='./images/down-arrow.png' style={{width: "20px", height: "20px"}} onClick={() => setPlace([item])}/>
      <div className='List-Item-Image-div'>
        <img className='List-Item-Image' src={item.image} alt={item.name}  />
        <p>[ {item.name} ]</p><p>📍 {item.address}</p>🌐 <a href={item.kakao_map}> {item.kakao_map}</a>
      </div>
    </div>)
  return <div className='List-Container'>{list}</div>

}

export default List