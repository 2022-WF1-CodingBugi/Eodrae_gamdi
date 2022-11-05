import React, { useState } from 'react';

const Category = ({ name, src, onChangePage = f => f }) => {
    let [cate, setCate] = useState("");
    const categoryClick = ({ id }) => {
        // 카테고리 클릭하면 클릭한 카테고리 이름 저장
        // sessionStorage.saveData = id;
        sessionStorage.setItem('category', name);
        setCate(id);
    }
    // onClick={() => { onChangePage(); categoryClick(this.id) }}
    return (
        <div id={name} className="category" onClick={() => { onChangePage(); categoryClick(name) }}>
            <img className="categoryImage" src={src} alt={name} />
        </div>
    )
}

export default Category;