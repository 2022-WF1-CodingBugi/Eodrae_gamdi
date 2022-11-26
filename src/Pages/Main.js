import React, {useState, useEffect, useRef} from "react";
import Carousel from "react-material-ui-carousel";
import Swal from "sweetalert2"; // 알림창 모듈


import food_category from "./images/food.png"
import activity_category from "./images/activity.png"
import lodging_category from "./images/lodging.png"
import attraction_category from "./images/attraction.png"

import maintext1 from "../Resources/Images/background-image/main-text1.png"
import maintext2 from "../Resources/Images/background-image/main-text2.png"
import maintext3 from "../Resources/Images/background-image/main-text3.png"
import maintext4 from "../Resources/Images/background-image/main-text4.png"
import maintext5 from "../Resources/Images/background-image/main-text5.png"
import mainBottomBackground from "../Resources/Images/background-image/main_bottom_background.png"
import top10 from "../Resources/Images/background-image/top10-background.png"
import foodTop10 from "../Resources/Images/background-image/food-top10.png"
import activityTop10 from "../Resources/Images/background-image/activity-top10.png"
import lodgingTop10 from "../Resources/Images/background-image/lodging-top10.png"
import attractionTop10 from "../Resources/Images/background-image/attraction-top10.png"

import food from '../Data/food';
import activity from '../Data/activity';
import lodging from '../Data/lodging';
import attraction from '../Data/attraction';

import "./Main.css";
import Category from "./Category";


const User = {
    id: 'codingbugi@hansung.ac.kr',
    pw: 'coding1234!'
}
    // 미리 설정해 놓은 에디터 아이디와 비번

const Main = ({ onChange = f => f }) => {
    let loginFlag = "OFF";  //로컬스토리지에 저장할 에디터 로그인 여부
    const idInput = useRef();
    const passWInput = useRef();
    const btn = useRef();
    const [loginText, changeLoginText] = useState("로그인"); //로그인 로그아웃 버튼 텍스트 변환
    const [loginSuccess, setLoginSuccess] = useState(false);  //로그인 성공 여부
    const [modalIsOpen, setModalIsOpen] = useState(false);  //로그인 창 팝업 여부
    const [id, setId] = useState("");  //아이디 입려 감지
    const [pw, setPw] = useState("");  //비번 입력 감지
    const [idValid, setidValid] = useState(false);  //아이디 일치여부 검사
    const [pwValid, setPwValid] = useState(false);  //비번 일치여부 검사
    const [notAllow, setNotAllow] = useState(true);  //아이디 비번 둘다 맞아야 notAllow 를 false 로



    // id 값 감지
    const onChangeId = (e) => {
        setId(e.target.value);
        // 이메일 정규표현식
        const regex =
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (regex.test(e.target.value)) {
            setidValid(true);
        } else {
            setidValid(false);
      }
    };
    // password 값 감지
    const onChangePassword = (e) => {
        setPw(e.target.value);
        // 영문 ,숫자 ,특수기호 포함 8자이상
        const regex =
        /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        if (regex.test(e.target.value)) {
        setPwValid(true);
        } else {
        setPwValid(false);
      }
    };

    const loginBtn = () => {
        // 로그인버튼 텍스트가 로그인일때, 로그인 창이 뜨도록
        if(loginText === "로그인") {
            setModalIsOpen(true);
            
        }
        // 로컬스토리지 값을 로그아웃으로 수정하고, 로그인 버튼 텍스트도 로그아웃으로 변경
        else {
            localStorage.setItem("loginFlag", "OFF");
            changeLoginText("로그인");
        }
        
    }
    const btnSubmit = () => {
        // 로그인 성공시 로그인 성공 알림띄우고, 로컬스토리지 값 변경 후 loginSuccess값 true 로 변경
        if (id === User.id && pw === User.pw) {
            Swal.fire({
                icon: 'success',    
                text: '로그인 성공',  
                confirmButtonText: "확인"
            });
            localStorage.setItem("loginFlag", "ON");
            setLoginSuccess(true)
        }

        else {
            setLoginSuccess(false);
            Swal.fire({
                icon: 'error',    
                text: '비밀번호가 틀렸습니다. 다시 시도하세요.',  
                confirmButtonText: "확인"
            });
        }
    }
    // 데이터를 받아서 캐러셀에 넣을 컴포넌트 생성
    const createCarousel = (data) => {
        return (
            <div className="carousel_div" onClick={() => window.open(data.kakao_map)}>
                <img className="carousel_img" src={data.image} alt={data.name}/>
                <h4 className="carousel_name">{data.name}</h4>
            </div>
        )
    }

    // 로그인 성공, 로그아웃 성공시 
    useEffect(() => {
        if(idValid && pwValid) {
          setNotAllow(false);
          return;
        }
        setNotAllow(true);
    }, [idValid, pwValid]);

    useEffect(() => {
        (loginSuccess)? changeLoginText("로그아웃")  : changeLoginText("로그인");
    }, [loginSuccess]);

    useEffect(() => {
        setModalIsOpen(false)

    }, [loginText]);

    // modalIsOpen 의 값에 따라 로그인 팝업창 오픈
    useEffect(() => {
        idInput.current.value = null;
        passWInput.current.value = null;
        if(modalIsOpen === true) {
            //로그인 팝업창 스크롤 방지
            document.body.style.cssText = `
            position: fixed; 
            top: -${window.scrollY}px;
            overflow-y: scroll;
            width: 100%;`;
        }
        else {
            const scrollY = document.body.style.top;
            document.body.style.cssText = '';
            window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        }
    }, [modalIsOpen]);

    useEffect(() => {
        if(modalIsOpen === true) {
            setNotAllow(true);
        }
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
            <button className="loginBtn" onClick={() => loginBtn()}>{loginText}</button>
            <div className="container" style={{display : modalIsOpen? "block" : "none"}}>
            <div className="login-modal">
            <h1 className="login-modal-logo">로그인</h1>
            
            <div className="login-txt">아이디</div>
            <div className="inputWrap"><input className="input" ref = {idInput}
                type="text"
                placeholder="아이디"
                id = "id"
                name = "id"
                onChange={onChangeId}
            /></div>
            
            <div className="errorMessageWrap">
            {!idValid && id.length > 0 && (
              <div>올바른 이메일을 입력해주세요.</div>
            )}
            </div>
            
            <div className="login-txt">비밀번호 </div>
            <div className="inputWrap">
            <input className="input" ref = {passWInput}
                type="password"
                placeholder="비밀번호"
                id = "pw"
                name = "pw"
                onChange={onChangePassword}
            />
            </div>

            <div className="errorMessageWrap">
            {!pwValid && pw.length > 0 && (
              <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
            )}
           </div>
            <div>
            <button className="login-btn" type="submit" disabled={notAllow} onClick = {() => btnSubmit()} ref = {btn}>
                로그인
            </button></div>

            <div>
            <button className="login-back-btn" type="button" onClick={()=> setModalIsOpen(false)}>
                닫기
            </button></div>
            </div>
            </div> 

            <div className="logo-div"><p className="logo-editorPick">에디터가 Pick한 진짜 제주도!</p><div className="logo-inline-div" style={{animation : modalIsOpen? "none" : ""}}><p className="logo-eodraegamdi">어드레 감디</p></div></div>
            <div style = {{display: "block", height: "100vw"}}></div>
            <div className="main-text-container">
                <img className="main-text1" src = {maintext1}/>
                <img className="main-text2" src = {maintext2}/>
                <img className="main-text3" src = {maintext3}/>
                <img className="main-text4" src = {maintext4}/>
                <img className="main-text5" style={{animation : modalIsOpen? "none" : ""}} src = {maintext5}/>
            </div>
            <div className = "categorySection" style={{marginTop: "50px", marginBottom: "100px"}}>
                <Category name="food" src={food_category} onChangePage={onChange} />
                <Category name="activity" src={activity_category} onChangePage={onChange} />
                <Category name="lodging" src={lodging_category} onChangePage={onChange} />
                <Category name="attraction" src={attraction_category} onChangePage={onChange} />
            </div>
            <div className="top10-container">
                <img className="top10" src = {top10}/>
            </div>
            <div><img className="foodTop10" src = {foodTop10}/></div>
            <seciton>
                <Carousel indicators={false}>
                    { food.sort( (a, b) => b.like - a.like ).map( (d, i) => i < 5 ? createCarousel(d) : null) }
                    { food.sort( (a, b) => b.like - a.like ).map( (d, i) => i >= 5 && i < 10 ? createCarousel(d) : null) }
                </Carousel>
            </seciton>

            <div><img className="activityTop10" src = {activityTop10}/></div>
            <seciton>
                <Carousel indicators={false}>
                    { activity.sort( (a, b) => b.like - a.like ).map( (d, i) => i < 5 ? createCarousel(d) : null) }
                    { activity.sort( (a, b) => b.like - a.like ).map( (d, i) => i >= 5 && i < 10 ? createCarousel(d) : null) }

                </Carousel>
            </seciton>

            <div><img className="lodgingTop10" src = {lodgingTop10}/></div>
            <seciton>
                <Carousel indicators={false}>
                    { lodging.sort( (a, b) => b.like - a.like ).map( (d, i) => i < 5 ? createCarousel(d) : null) }
                    { lodging.sort( (a, b) => b.like - a.like ).map( (d, i) => i >= 5 && i < 10 ? createCarousel(d) : null) }

                </Carousel>
            </seciton>

            <div><img className="attractionTop10" src = {attractionTop10}/></div>
            <seciton>
                <Carousel indicators={false}>
                    { attraction.sort( (a, b) => b.like - a.like ).map( (d, i) => i < 5 ? createCarousel(d) : null) }
                    { attraction.sort( (a, b) => b.like - a.like ).map( (d, i) => i >= 5 && i < 10 ? createCarousel(d) : null) }

                </Carousel>
            </seciton>
            <img className = "mainBottomBackground" src={mainBottomBackground}/>
        </>
    )
}

export default Main;