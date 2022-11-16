import React from 'react';
import $ from 'jquery';
import { useState } from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import './List.css';

const createArray = length => [...Array(length)];

function List({ places, setPlace }) {
  let listItem = places;
  let likesArray = listItem.map( item => item.like ); // 좋아요 수 저장하는 배열
  let checkedArray = createArray(listItem.length).map( item => item = false); // 좋아요 클릭 여부를 담는 배열, 처음에 false로 초기화

  const [icon, setIcon] = useState("");
  const [isChecked, setChecked] = useState(checkedArray); // 좋아요 버튼이 클릭 됐는지
  const [likes, setLikes] = useState( likesArray ); // 좋아요 배열 상태 변수로

  // i번째 요소가 클릭 됐을 때
  const toggleLike = (event, i) => {
    likesArray = [...likes];
    checkedArray = [...isChecked];

    if(checkedArray[i]) {
      likesArray[i] -= 1;
    }
    else {
      likesArray[i] += 1;
    }
    listItem[i].like = likesArray[i];
    checkedArray[i] = !checkedArray[i];
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

    $(function () {
      let list = document.getElementsByClassName("List-Item");
      let i;

      for (i = 0; i < list.length; i++) {
        list[i].addEventListener("click", function () {
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
  }, [places]);

  const list = listItem.map((item, i) =>
    <div className='List-Item-div'>
      <p className='List-Item'>
        {icon}&nbsp;[{item.name}]&nbsp;
        {isChecked[i] ? <HeartFilled onClick={(event) => toggleLike(event, i)} /> : <HeartOutlined onClick={(event) => toggleLike(event, i)} /> /* true면 꽉 찬 하트, false면 빈 하트 */}&nbsp;{item.like}&nbsp;
        {/*item.star*/}  {item.explanation}
      </p>
      <div className='List-Item-Image-div'>
        <img className='List-Item-Image' src={item.image} alt={item.name} onClick={() => setPlace([item])} />
        <p>[ {item.name} ]</p><p>📍 {item.address}</p>🌐 <a href={item.kakao_map}> {item.kakao_map}</a>
      </div>
    </div>)
  return <div className='List-Container'>{list}</div>

}

export default List