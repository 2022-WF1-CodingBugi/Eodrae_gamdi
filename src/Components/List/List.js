import React from 'react';
import $ from 'jquery';
import { useState } from 'react';
import './List.css';

function List({ places }) {
  let listItem = places;
  const [icon, setIcon] = useState("");

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

  // foodList에서 List로 모두 이름 변경
  // css파일에도 모든 클래스이름에서 Food만 뺌
  const list = listItem.map((item) =>
    <div className='List-Item-div'><p className='List-Item'>
      {icon}   [{item.name}]  👍🏻 <span className='List-like'>{item.like}</span>   {item.star}  {item.explanation}</p>
      <div className='List-Item-Image-div'>
        <img className='List-Item-Image' src={item.image} alt={item.name} />
        <p>[ {item.name} ]</p><p>📍 {item.address}</p>🌐 <a href={item.kakao_map}> {item.kakao_map}</a></div></div>)
  return <div className='List-Container'>{list}</div>

}
// foodList -> List로 변경
export default List