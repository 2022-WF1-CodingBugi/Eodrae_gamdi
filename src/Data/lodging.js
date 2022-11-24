const lodging = [
    {
        name : "와온",
        latitude : 33.54450997473537,
        longitude : 126.66008407936904,
        address : "제주특별자치도 제주시 조천읍 함덕5길 8-15 (우)63333",
        image : "../images/lodging/와온.png",
        kakao_map : "https://place.map.kakao.com/84554460",
        keyword : ["펜션", "사우나"],
        like : 0,
        star : 0.0,
        explanation : "에메랄드 빛 바다와 포근한 바람이 부르는 함덕 구석의 돌집"
    },
    {
        name : "의귀소담",
        latitude : 33.30524221112696,
        longitude : 126.7202519861572,
        address : "제주특별자치도 서귀포시 남원읍 남조로 296-13 1층 (우)63618",
        image : "../images/lodging/의귀소담.png",
        kakao_map : "https://place.map.kakao.com/1537209042",
        keyword : ["노천탕", "조식 제공"],
        like : 0,
        star : 0.0,
        explanation : "귤밭에 둘러 싸여져 있는, "
    },
    {
        name : "폴개우엉",
        latitude : 33.28381638687963,
        longitude : 126.74173667631047,
        address : "제주특별자치도 서귀포시 남원읍 태위로894번길 13 (우)63617",
        image : "./images/lodging/폴개우엉.png",
        kakao_map : "https://place.map.kakao.com/1879458432",
        keyword : ["서귀포"],
        like : 0,
        star : 0.,
        explanation : "제주도 남쪽, 두 갈래 길 중심에 빨간 지붕이 얹어진 곳. 폴개에서 우영[정원]을 걷다."
    },
    {
        name: "제주아인",
        latitude: 33.555289235299675,
        longitude: 126.7492072868088,
        address: "제주특별자치도 제주시 구좌읍 김녕로11길 9-1 (우)63357",
        image: "../images/lodging/제주아인.png",
        kakao_map: "https://place.map.kakao.com/1888777377",
        keyword: ["독채펜션", "노천탕"],
        like: 48,
        star: 0.0,
        explanation : "김녕에 있는, 독채 바베큐와 야외 노천탕을 즐길 수 있는 곳"
    },
    {
        name: "호텔창고펜션",
        latitude: 33.26220568864041,
        longitude: 126.63833520974866,
        address: "제주특별자치도 서귀포시 남원읍 하례망장포로 37 (우)63613",
        image: "../images/lodging/호텔창고펜션.png",
        kakao_map: "https://place.map.kakao.com/2064886161",
        keyword: ["독채펜션", "수영장"],
        like: 4,
        star: 0.0,
        explanation : "제주도 한적한 시골에서 느낄 수 있는, 햇살 가득한 화려하면서 우아한 공간"
    },
    {
        name: "게으른오후",
        latitude: 33.38377406646527,
        longitude: 126.2838442456143,
        address: "제주특별자치도 제주시 한림읍 중산간서로 4620 (우)63014",
        image: "../images/lodging/게으른오후.png",
        kakao_map: "https://place.map.kakao.com/1187373992",
        keyword: ["에어비앤비", "자쿠지"],
        like: 11,
        star: 0.0,
        explanation : "1972년부터 이어온, 옛 정이 깃든 아날로그식 감성과 현대식의 편안함을 접목한 휴식공간"
    },
    {
        name : "산과바다",
        latitude : 33.28381638687963,
        longitude: 126.74173667631047,
        address : "제주특별자치도 서귀포시 안덕면 사계남로 181 (우)63528",
        image : "../images/lodging/산과바다.png",
        kakao_map : "https://place.map.kakao.com/852057326",
        keyword : ["게스트하우스"],
        like : 0,
        star : 0.0,
        explanation : "산방산과 바다에 둘러쌓인, 제주의 고요함에서 벗어나 다양한 사람들과 어울릴 수 있는 곳 "
    },
    {
        name : "어느날문득제주",
        latitude : 33.53861795661364,
        longitude : 126.83456844406237,
        address : "제주특별자치도 제주시 구좌읍 계룡길 25-10 (우)63359",
        image : "../images/lodging/어느날문득제주.png",
        kakao_map : "https://place.map.kakao.com/27578867",
        keyword : ["독채", "구좌읍"],
        like : 50,
        star : 5.0,
        explanation : "어느날, 문득, 제주에 왔다.  "
    },
    {
        name : "광이멀스테이",
        latitude : 33.40593111335699,
        longitude : 126.30492542462534,
        address : "제주특별자치도 제주시 한림읍 월각로 151 (우)63022",
        image : "../images/lodging/광어멀스테이.png",
        kakao_map : "https://place.map.kakao.com/538350320",
        keyword : ["수영장", "협재"],
        like : 200,
        star : 5.0
    },
    {
        name : "제주스테이대흘",
        latitude : 33.509443937500805,
        longitude : 126.66726815540243,
        address : "제주특별자치도 제주시 조천읍 곱은달서길 60-24 (우)63343",
        image : "../images/lodging/스테이대흘.png",
        kakao_map : "https://place.map.kakao.com/290388887",
        keyword : ["독채", "프라이빗"],
        like : 80,
        star : 4.2
    },
    {
        name : "무명고택",
        latitude : 33.38905345146385,
        longitude : 126.7972667664882,
        address : "제주특별자치도 서귀포시 표선면 중산간동로 4667 (우)63624",
        image : "../images/lodging/무명고택.png",
        kakao_map : "https://place.map.kakao.com/1859162465",
        keyword : ["한옥", "독채"],
        like : 40,
        star : 4.0
    },
    {
        name : "노루하루",
        latitude : 33.5321359838148,
        longitude : 126.7889373040343,
        address : "제주특별자치도 제주시 구좌읍 남지기길 19-44 (우)63349",
        image : "../images/lodging/노루하루.png",
        kakao_map : "https://place.map.kakao.com/2099304066",
        keyword : ["복층", "자쿠지"],
        like : 120,
        star : 4.5
    },
    {
        name : "시호루",
        latitude : 33.5521669745645,
        longitude : 126.71267756201007,
        address : "제주특별자치도 제주시 구좌읍 동복로2길 11-2 (우)63347",
        image : "../images/lodging/시호루.png",
        kakao_map : "https://place.map.kakao.com/451404912",
        keyword : ["독채", "실내풀"],
        like : 95,
        star : 4.6
    },
    {
        name : "스테이빌레",
        latitude : 33.532561996448194,
        longitude : 126.8283278185949,
        address : "제주특별자치도 제주시 구좌읍 한동로3길 46 (우)63359",
        image : "../images/lodging/스테이빌레.png",
        kakao_map : "https://place.map.kakao.com/118823630",
        keyword : ["단독", "피크닉"],
        like : 238,
        star : 4.4
    },
    {
        name : "그날의하도",
        latitude : 33.52000719670361,
        longitude : 126.88718389345605,
        address : "제주특별자치도 제주시 구좌읍 문주란로5길 18 (우)63363",
        image : "../images/lodging/그날의하도.png",
        kakao_map : "https://place.map.kakao.com/2125631963",
        keyword : ["바베큐", "하도리"],
        like : 118,
        star : 4.6
    },
    {
        name : "프롬나드제주",
        latitude : 33.3544999874456,
        longitude :126.19596187575397,
        address : "제주특별자치도 제주시 한경면 금등4길 96 (우)63003",
        image : "../images/lodging/프롬나드제주.png",
        kakao_map : "https://place.map.kakao.com/1889843326",
        keyword : ["풀빌라", "고요"],
        like : 94,
        star : 4.4
    }
    
]
export default lodging