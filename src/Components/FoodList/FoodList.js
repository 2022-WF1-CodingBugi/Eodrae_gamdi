import React, { useState } from 'react';
import $ from 'jquery';
import './FoodList.css';


    $(document).ready(function(){
      var foodList = document.getElementsByClassName("Food-List-Item");
      var i;
      
      for (i = 0; i < foodList.length; i++) {
        foodList[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var foodListImage = this.nextElementSibling;
          if (foodListImage.style.display === "block") {
            foodListImage.style.display = "none";
          } 
          else {
            foodListImage.style.display = "block";
          }
        });
      }
    });

function FoodList({ category }) {
    const [name, compareName] = useState("");
    const [click, changeClicks] = useState(false);

    const list = category.map((item, i) =>
        <div className='Food-List-Item-div' key={i}><p className='Food-List-Item' key={i}>
            🍚   [{item.name}]  👍🏻 <span className='Food-List-like'>{item.like}</span>   {item.star}  {item.explanation}</p>
            <div className='Food-List-Item-Image-div' key={i} style={{ display: "none"}}>
                <img className='Food-List-Item-Image' src={item.image} alt={item.name} />
                <p>[ {item.name} ]</p><p>📍 {item.address}</p>🌐 <a href={item.kakao_map}> {item.kakao_map}</a></div></div>)
    return <div className='Food-List-Container'>{list}</div>
}

export default FoodList