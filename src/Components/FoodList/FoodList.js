import React, { useState, useEffect } from 'react';
import './FoodList.css';

function FoodList({ places, category }) {
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

    const list = places.map((item, i) =>
        <div className='Food-List-Item-div' key={i}><p className='Food-List-Item' key={i} onClick={() => { compareName(item.name); changeClicks(!click); }}>
            {icon}   [{item.name}]  👍🏻 <span className='Food-List-like'>{item.like}</span>   {item.star}  {item.explanation}</p>
            <div className='Food-List-Item-Image-div' key={i} style={{ display: (name === item.name && click ? "block" : "none") }}>
                <img className='Food-List-Item-Image' src={item.image} alt={item.name} />
                <p>[ {item.name} ]</p><p>📍 {item.address}</p>🌐 <a href={item.kakao_map}> {item.kakao_map}</a></div></div>)
    return <div className='Food-List-Container'>{list}</div>
}

export default FoodList