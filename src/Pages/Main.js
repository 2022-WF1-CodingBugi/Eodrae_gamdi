import React, {useState, useEffect, useRef} from "react";
import Carousel from "react-material-ui-carousel";

import main_logo from "./images/main_logo.png"
import food_category from "./images/food.png"
import activity_category from "./images/activity.png"
import lodging_category from "./images/lodging.png"
import attraction_category from "./images/attraction.png"

import food from '../Data/food';
import activity from '../Data/activity';
import lodging from '../Data/lodging';
import attraction from '../Data/attraction';

import "./Main.css";
import Category from "./Category";

const Main = ({ onChange = f => f }) => {
    let loginFlag = "OFF";
    const color = ["rgb(206, 243, 255)", "rgb(43, 43, 255)"]; // 연한 하늘, 파랑
    const [loginText, changeLoginText] = useState("로그인");
    const idInput = useRef();
    const passWInput = useRef();
    const btn = useRef();
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [id, setId] = useState("");
    const [password, setPassword] = useState(""); 
    const [btnColor, setbtnColor] = useState(color[0]); //id와 password가 정해진 형식을 만족하면 버튼이 활성화

    // id 값 감지
    const onChangeId = (e) => {
        setId(e.target.value);
    };
    // password 값 감지
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const setBtnActive = () => {
      //id가 @과 .com을 포함하면서 (즉, 이메일 형식이어야 함), 비밀번호 길이가 6자리이상이었을 때
        idInput.current.value.includes('@') && idInput.current.value.includes(".") && password.length >= 6
        ? setbtnColor(color[1])
        : setbtnColor(color[0]);
    };

    const loginBtn = () => {
        if(loginText === "로그인") {
            setModalIsOpen(true);
        }
        else {
            localStorage.setItem("loginFlag", "OFF");
            changeLoginText("로그인");
        }
        
    }
    const btnSubmit = () => {
        if(btnColor === color[1]) {
            // 저장해둔 에디터 계정과 일치하는 경우
            if (id === "codingbugi@hansung.ac.kr" && password === "123456") {
                localStorage.setItem("loginFlag", "ON");
                setLoginSuccess(true)
            }
            else {
                alert("틀림");
                setLoginSuccess(false);
            }
        }
    }

    const createCarousel = (data) => {

        return (
            <div className="carousel_div" onClick={() => window.open(data.kakao_map)}>
                <img className="carousel_img" src={data.image} alt={data.name}/>
                <h4 className="carousel_name">{data.name}</h4>
            </div>
        )
    }

    useEffect(() => {
        setBtnActive();
    }, [id, password]);

    useEffect(() => {
        (loginSuccess)? changeLoginText("로그아웃")  : changeLoginText("로그인");
    }, [loginSuccess]);

    useEffect(() => {
        setModalIsOpen(false)
    }, [loginText]);

    useEffect(() => {
        idInput.current.value = null;
        passWInput.current.value = null;
        btn.current.style.backgroundColor = color[0];
    }, [modalIsOpen]);

    useEffect(() => {
        setModalIsOpen(false)
    }, []);

    useEffect(() => {
        loginFlag = localStorage.getItem("loginFlag");
        (loginFlag === "ON")? changeLoginText("로그아웃") : changeLoginText("로그인")
    }, []);

    

    return (
        <>
            <button id="loginBtn" onClick={() => loginBtn()}>{loginText}</button>
            <div className="container" style={{display : modalIsOpen? "block" : "none"}}>
            <div className="login-modal">
            <h1 className="login-modal-logo">나중에 이미지로 바꾸기</h1>
            <div><p className="login-id">아이디</p>
            <input className="login-input-id" ref = {idInput}
                type="text"
                placeholder="아이디"
                id = "id"
                name = "id"
                onChange={onChangeId}
            />
            </div>
            <div><p className="login-passw">비밀번호 </p>
            <input className="login-input-passw" ref = {passWInput}
                type="password"
                placeholder="비밀번호"
                id = "password"
                name = "password"
                onChange={onChangePassword}
            />
            </div><div>
            <button className="login-btn" type="button" style={{backgroundColor : btnColor}} onClick = {() => btnSubmit()} ref = {btn}>
                로그인
            </button></div><div>
            <button className="login-back-btn" type="button" onClick={()=> setModalIsOpen(!modalIsOpen)}>
                닫기
            </button></div></div>
            </div> 
            <header id="header">
                <img id="main_logo" src={main_logo} alt="어드레감디" />
            </header>
            <section style={{marginTop: "50px", marginBottom: "100px"}}>
                <Category name="food" src={food_category} onChangePage={onChange} />
                <Category name="activity" src={activity_category} onChangePage={onChange} />
                <Category name="lodging" src={lodging_category} onChangePage={onChange} />
                <Category name="attraction" src={attraction_category} onChangePage={onChange} />
            </section>
            <seciton>
                <Carousel indicators={false}>
                    {
                        food.sort( (a, b) => b.like - a.like ).map( (d, i) => i < 7 ? createCarousel(d) : null)
                    }
                    {
                        activity.sort( (a, b) => b.like - a.like ).map( (d, i) => i < 7 ? createCarousel(d) : null)
                    }
                    {
                        lodging.sort( (a, b) => b.like - a.like ).map( (d, i) => i < 7 ? createCarousel(d) : null)
                    }
                    {
                        attraction.sort( (a, b) => b.like - a.like ).map( (d, i) => i < 7 ? createCarousel(d) : null)
                    }
                </Carousel>
            </seciton>
            <div className="empty">
            </div>
        </>
    )
}

export default Main;