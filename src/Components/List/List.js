import React from 'react';
import $ from 'jquery';
import food from '../../Data/food';
import activity from '../../Data/activity';
import attraction from '../../Data/attraction';
import lodging from '../../Data/lodging';
import './List.css';

$(function(){
    let list = document.getElementsByClassName("List-Item");
    let i;
    
    for (i = 0; i < list.length; i++) {
      list[i].addEventListener("click", function() {
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

function List({ category }) {
    let listItem;
    let icon;
    /*
    const [name, compareName] = useState("");
    const [click, changeClicks] = useState(false);
    const [icon, setIcon] = useState("");

    useEffect(() => {
        changeClicks(false);

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
    }, [places])
    */

  // category data
  
  // category별로 data 매칭 -> data로 map함수 적용하여 리스트를 보여준다.
  if(category === "food") {listItem = food; icon = "🍚";}
  else if(category === "activity") {listItem = activity; icon = "🪂";}
  else if (category === "attraction") {listItem = attraction; icon = "🏔️";}
  else {listItem = lodging; icon = "🏠";}

  // 카테고리가 바뀔때마다 펼쳐진 리스트들 display 초기화
  React.useEffect(() => {
    for(let i = 0; i < listItem.length; i++) {
      document.getElementsByClassName('List-Item-Image-div')[i]
      .setAttribute("style", "height : 0vh");
      document.getElementsByClassName('List-Item-Image-div')[i]
      .setAttribute("style", "visibility : hidden");
    }}
  );
  
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