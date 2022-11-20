import React from 'react';
import $ from 'jquery';
import { useState } from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import './List.css';

const createArray = length => [...Array(length)];
let likesArray;
let checkedArray;

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
  likesArray = listItem.map( item => item.like ); // 좋아요 수 저장하는 배열
  checkedArray = createArray(listItem.length).map( item => item = false); // 좋아요 클릭 여부를 담는 배열, 처음에 false로 초기화
  console.log(listItem)

  const [icon, setIcon] = useState("");
  const [isChecked, setChecked] = useState(checkedArray); // 좋아요 버튼이 클릭 됐는지
  const [likes, setLikes] = useState( likesArray ); // 좋아요 배열 상태 변수로

  const writeDataFile =  (fileName, data) => {
    if(fileName === "") return false;

    const content = {data};
    console.log(content);
  }

  // i번째 리스트가 클릭 됐을 때
  const toggleLike = (event, i) => {
    // 상태 변수에 있는 배열 복사
    likesArray = [...likes];
    checkedArray = [...isChecked];

    if(checkedArray[i]) { // 좋아요 취소
      likesArray[i] -= 1;
    }
    else { // 좋아요
      likesArray[i] += 1;
    }

    // 복사한 배열에서 클릭한 요소의 값을 변경
    listItem[i].like = likesArray[i];
    checkedArray[i] = !checkedArray[i];

    // 복사한 배열로 상태 변수 변경
    setLikes(likesArray);
    setChecked(checkedArray);
  }

  React.useEffect(() => {
    setLikes(likesArray);
  }, likesArray)
  React.useEffect(() => {
    setChecked(checkedArray);
  }, checkedArray)

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
    setLikes(listItem.map( item => item.like ))
    setChecked(checkedArray.map(item => item = false));
  //   const data = listItem.map((item,i)=>{
  //     eturn(
  //     {name:`${item.name}`,
  //     latitude: r`${item.latitude}`,
  //     longitude: `${item.longitude}`,
  //     address: `${item.address}`,
  //     image: item.image,
  //     kakao_map: item.kakao_map,
  //     keyword: ["카트", "테마파크"],
  //     like: likesArray[i],
  //     star: 0.0,
  //     explanation:`${item.explanation}`
  // }
  //     )
  //   })
  //   localStorage.setItem(sessionStorage.getItem('category'),JSON.stringify(data))
   // 성관 : 로컬스토리지에서 좋아요 값만 쏙 바꿀수가 없어가지고 위처럼 아예 데이터 통째로 바꿔야될거 같은데 잘 안되네요 ㅜ
   //       제가 좋아요 기능을 잘못이해하고 있어서 그럴수도 있으니까 찬주님이 한번 시도해주세요...!


  }, [places]);

  const list = listItem.map((item, i) =>
    <div className='List-Item-div' onClick={() => setPlace([item])}>
      <p className='List-Item'>
        {icon}&nbsp;
        [{item.name}]<br></br><br></br>
        {item.explanation}
        <p style={{display: "inline-block", float: "right"}}>{isChecked[i] ? <HeartFilled onClick={(event) => toggleLike(event, i)} /> : <HeartOutlined onClick={(event) => toggleLike(event, i)} /> /* true면 꽉 찬 하트, false면 빈 하트 */}&nbsp;
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