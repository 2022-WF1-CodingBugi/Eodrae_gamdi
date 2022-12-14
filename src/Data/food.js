
const food = [
    {
        name : "우진해장국",
        latitude : 33.5108509899879,
        longitude : 126.5209117268871,
        address : "제주특별자치도 제주시 서사로 11",
        image : "../images/food/우진해장국.png",
        kakao_map : "https://place.map.kakao.com/11547525",
        keyword : ["해장국", "고사리해장국"],
        like : 27,
        
        explanation : "백종원도 인정한 최고의 해장국 집! 서귀포 바다를 바라보며 먹는 오션뷰 대형 맛집"
    },
    {
        name : "미영이네식당",
        latitude : 33.2162160961085,
        longitude : 126.25181555968082,
        address : "제주특별자치도 서귀포시 대정읍 하모항구로 42 (우)63506",
        image : "../images/food/미영이네식당.png",
        kakao_map : "https://place.map.kakao.com/9006988",
        keyword : ["회", "고등어회"],
        like : 18,
        
        explanation : "바다 냄새가 혀 안에서 감돈다. 진정한 제주 맛집을 알고 싶다면 바로 여기"
    },
    {
        name : "아줄레주",
        latitude : 33.36683593131745,
        longitude : 126.83928908564187,
        address : "제주특별자치도 서귀포시 성산읍 신풍하동로19번길 59 나동 (우)63636",
        image : "../images/food/아줄레주.png",
        kakao_map : "https://place.map.kakao.com/2003360746",
        keyword : ["카페", "에그타르트"],
        like : 15,
        
        explanation : "에그타르트도 맛있고 사진 찍기도 좋은 예쁜 카페"
    },
    {
        name : "곰막식당",
        latitude : 33.556917554205135,
        longitude : 126.72059563908253,
        address : "제주특별자치도 제주시 구좌읍 구좌해안로 64 (우)63347",
        image : "../images/food/곰막식당.jpeg",
        kakao_map : "https://place.map.kakao.com/18421685",
        keyword : ["고등어회", "회국수"],
        like : 56,
        
        explanation : "다른건 몰라도 제주도에서 '이것'은 먹고가자. 고등어회와 회국수가 일품인 곳."
    },
    {
        name : "제주 올래국수",
        latitude : 33.50420955090063,
        longitude : 126.53442614805972,
        address : "제주특별자치도 제주시 월성로 39 (우)63162",
        image : "../images/food/올래국수.png",
        kakao_map : "https://place.map.kakao.com/559359242",
        keyword : ["고기국수", "비빔국수"],
        like : 18,
        
        explanation : "양도 많고 가성비도 좋은 고기국수 맛집. 비빔국수의 양념과 야채가 고기와 함께 어울려 환상의 조합."
    },
    {
        name : "스시 호시카이",
        latitude : 33.48876819230536,
        longitude : 126.51960387884634,
        address : "제주특별자치도 제주시 오남로 90 (우)63146",
        image : "../images/food/스시호시카이.png",
        kakao_map : "https://place.map.kakao.com/23718318",
        keyword : ["오마카세", "스시"],
        like : 33,
        
        explanation : "제주도의 3대 스시집 중 하나. 제주도 바다향이 느껴지는 듯한 스시 오마카세집이다."
    },
    {
        name : "상춘재",
        latitude : 33.460299081741255,
        longitude : 126.70522702035518,
        address : "제주특별자치도 제주시 조천읍 선진길 26 1층 (우)63341",
        image : "../images/food/상춘재.png",
        kakao_map : "https://place.map.kakao.com/12397273",
        keyword : ["성게", "돌문어"],
        like : 37,
        
        explanation : "상춘재만의 개성있는 맛! 성게 비빔밥과 돌문어 비빔밥은 웨이팅이 아깝지 않은 맛이다."
    },
    {
        name : "살찐고등어",
        latitude : 33.526618605492864,
        longitude : 126.88470744711263,
        address : "제주특별자치도 제주시 구좌읍 해맞이해안로 1708 1층 (우)63363",
        image : "../images/food/살찐고등어.png",
        kakao_map : "https://place.map.kakao.com/379711544",
        keyword : ["흑돼지", "돈까스"],
        like : 41,
        
        explanation : "트러플 오일, 핑크 소금, 와사비 조합이 흑돼지 돈까스와 만났다. 육즙 가득한 흑돼지 돈까스 맛집!"
    },
    {
        name : "정성듬뿍제주국",
        latitude : 33.514028646873754,
        longitude : 126.52021343837903,
        address : "제주특별자치도 제주시 무근성7길 16 1층 (우)63166",
        image : "../images/food/정성듬뿍제주국.png",
        kakao_map : "https://place.map.kakao.com/13325715",
        keyword : ["각재기국", "국"],
        like : 0,
        
        explanation : "제주도에서만 맛 볼 수 있는 깊은 맑은 국물! 멜튀김도 JMT"
    },
    {
        name : "중문수두리보말칼국수",
        latitude : 33.25156553343916,
        longitude : 126.42501016693603,
        address : "제주특별자치도 서귀포시 천제연로 192 1층 (우)63546",
        image : "../images/food/중문수두리보말칼국수.png",
        kakao_map : "https://place.map.kakao.com/1148098112",
        keyword : ["칼국수", "보말칼국수"],
        like : 0,
        
        explanation : "사실 칼국수보다 전복죽이 더 맛있는 칼국수집"
    },
    {
        name : "부온",
        latitude : 33.48941401220383,
        longitude : 126.53528168640506,
        address : "제주특별자치도 제주시 구남동2길 26 1층 (우)63232",
        image : "../images/food/부온.png",
        kakao_map : "https://place.map.kakao.com/960474998",
        keyword : ["일식", "소바"],
        like : 0,
        
        explanation : "어디서도 볼 수 없었던 연어 소바!!"
    },
    {
        name : "원앤온리",
        latitude : 33.23922684182694,
        longitude : 126.31918977360827,
        address : "제주 서귀포시 안덕면 산방로 141",
        image : "../images/food/원앤온리.png",
        kakao_map : "https://place.map.kakao.com/217787831",
        keyword : ["카페", "바다뷰"],
        like : 5,
        
        explanation : "원앤온리, 그 이상의 설명이 필요한가"
    },
    {
        name : "연돈",
        latitude : 33.2588907678795,
        longitude : 126.4071554939141,
        address : "제주 서귀포시 일주서로 968-10",
        image : "../images/food/연돈.png",
        kakao_map : "https://place.map.kakao.com/1890778114",
        keyword : ["식당", "돈까스"],
        like : 5,
        
        explanation : "백종원 아저씨도 인정한 맛집"
    },
    {
        name : "우무",
        latitude : 33.4058862165277,
        longitude : 126.25643712752785,
        address : "제주 제주시 한림읍 한림로 542-1",
        image : "../images/food/우무.png",
        kakao_map : "https://place.map.kakao.com/1152497778",
        keyword : ["카페", "푸딩"],
        like : 5,
        
        explanation : "푸딩이 탱글탱글 "
    },
    {
        name : "노라바",
        latitude : 33.482792432842565,
        longitude : 126.37630114558529,
        address : "제주특별자치도 제주시 애월읍 구엄길 100 (우)63049",
        image : "../images/food/노라바.png",
        kakao_map : "https://place.map.kakao.com/26352466",
        keyword : ["식당", "라면"],
        like : 5,
        
        explanation : "노라바에서 노라바~"
    },
    {
        name : "착한갈치",
        latitude : 33.23987123070367,
        longitude : 126.60609362423376,
        address : "제주특별자치도 서귀포시 보목포로 35 1층 (우)63599",
        image : "../images/food/착한갈치.png",
        kakao_map : "https://place.map.kakao.com/2004400182",
        keyword : ["식당", "라면"],
        like : 5,
        
        explanation : "착한갈치는 나쁜갈치보다 맛있다"
    }
]
export default food

