const attraction = [
    {
        name : "쇠소깍",
        latitude : 33.2542465079713,
        longitude : 126.6224024578273,
        address : "제주 서귀포시 쇠소깍로 104",
        image : "./images/attraction/쇠소깍.png",
        kakao_map : "https://place.map.kakao.com/7962003",
        keyword : ["하천", "카약"],
        like : 5,
        
        explanation:"제주에서 즐기는 카누"
    },
    {
        name : "섭지코지",
        latitude : 33.42397280993584,
        longitude : 126.93066673795128,
        address : "제주특별자치도 서귀포시 성산읍 섭지코지로 10",
        image : "./images/attraction/섭지코지.png",
        kakao_map : "https://place.map.kakao.com/8413659",
        keyword : ["경치", "산책"],
        like : 10,
        
        explanation:"날씨가 좋으면 좋은데로 흐리면 흐린데로 좋은곳"
    },
    {
        name : "성산일출봉",
        latitude : 33.45914086065641,
        longitude : 126.94059936778389,
        address : "제주특별자치도 서귀포시 성산읍 성산리 78",
        image : "./images/attraction/성산일출봉.png",
        kakao_map : "https://place.map.kakao.com/25285071",
        keyword : ["산봉우리", "일출"],
        like : 42,
        
        explanation:"동쪽 제주의 랜드마크"
    },
    {
        name : "카멜리아 힐",
        latitude : 33.28964930723648,
        longitude : 126.37000936062226,
        address : "제주특별자치도 서귀포시 안덕면 병악로 166 (우)63526",
        image : "./images/attraction/카멜리아 힐.png",
        kakao_map : "https://place.map.kakao.com/9461977",
        keyword : ["핑크뮬리", "억새밭"],
        like : 17,
        
        explanation:"겨울에도 꽃을 맞이할 수 있는 곳"
    },
    {
        name: "중문대포주상절리대",
        latitude: 33.237975112719525,
        longitude: 126.42632227570995,
        address: "제주특별자치도 서귀포시 이어도로 36-30 (우)63547",
        image: "./images/attraction/중문대포주상절리대.png",
        kakao_map: "https://place.map.kakao.com/10793668",
        keyword: ["일출", "풍경"],
        like: 2,
        
        explanation:"눈으로 보는 관동별곡"
    },
    {
        name: "만장굴",
        latitude: 33.52789508783337,
        longitude: 126.76934171688357,
        address: "제주특별자치도 제주시 구좌읍 만장굴길 182 (우)63348",
        image: "./images/attraction/만장굴.png",
        kakao_map: "https://place.map.kakao.com/7863269",
        keyword: ["세계자연유산", "동굴"],
        like: 8,
        
        explanation:"여름에도 시원한 동굴체험"
    },
    {
        name: "헬로키티아일랜드",
        latitude: 33.28995329799146,
        longitude: 126.35206166867718,
        address: "제주특별자치도 서귀포시 안덕면 상창리 1963-2",
        image: "./images/attraction/헬로키티아일랜드.jpeg",
        kakao_map: "https://place.map.kakao.com/26608807",
        keyword: ["테마파크", "가족"],
        like: 36,
        
        explanation:"우리나라 최대규모 헬로키티 파크"
    },
    {
        name: "빛의벙커",
        latitude: 33.43963754770691,
        longitude: 126.8998053540807,
        address: "제주특별자치도 서귀포시 성산읍 고성리 2039-22",
        image: "./images/attraction/빛의벙커.jpeg",
        kakao_map: "https://place.map.kakao.com/1682547680",
        keyword: ["미술관", "전시"],
        like: 3,
        
        explanation:"다양한 미술을 다양한 방법으로 즐기는 곳"
    },
    {
        name: "제주냥이",
        latitude: 33.5335468530956,
        longitude: 126.8396584787566,
        address: "제주특별자치도 제주시 구좌읍 평대리 1982",
        image: "./images/attraction/제주냥이.png",
        kakao_map: "https://place.map.kakao.com/1960031145",
        keyword: ["소품샵", "카페"],
        like: 19,
        
        explanation:"노란지붕아래 귀여운 냥이들"
    },
    {
        name: "제주 성수미술관",
        latitude: 33.52689074350824,
        longitude: 126.88650268337703,
        address: "제주특별자치도 제주시 구좌읍 하도리 1743",
        image: "./images/attraction/성수미술관.jpeg",
        kakao_map: "https://place.map.kakao.com/125569847",
        keyword: ["경치", "체험"],
        like: 9,
        
        explanation:"그림같은풍경을 보며 그리는 그림"
    },
    {
        name: "봄사무소",
        latitude: 33.54029001854711,
        longitude: 126.66319867904143,
        address: "제주특별자치도 제주시 조천읍 함덕리 1085-1",
        image: "./images/attraction/봄사무소.jpeg",
        kakao_map: "https://place.map.kakao.com/1085452600",
        keyword: ["소품샵", "감성"],
        like: 17,
        
        explanation:"따듯하고 아기자기한 소품"
    },
    {
        name: "우도",
        latitude: 33.506388095919945,
        longitude: 126.95292508190921,
        address: "제주특별자치도 제주시 우도면 연평리",
        image: "./images/attraction/우도.jpeg",
        kakao_map: "https://place.map.kakao.com/8025182",
        keyword: ["섬", "자연"],
        like: 27,
        
        explanation:"제주 안의 또 다른 섬, 우도"
    },
    {
        name: "연필가게",
        latitude: 33.28617535603878,
        longitude: 126.74449943274819,
        address: "제주특별자치도 서귀포시 남원읍 태흥리 541-1",
        image: "./images/attraction/연필가게.jpeg",
        kakao_map: "https://place.map.kakao.com/1974620820",
        keyword: ["문구", "소품샵"],
        like: 10,
        
        explanation:"조용한 마을에서 찾을 수 있는 옛날의 추억"
    },
    {
        name: "만춘서점",
        latitude: 33.54078606800503,
        longitude: 126.6733604558857,
        address: "제주특별자치도 제주시 조천읍 함덕리 272-35",
        image: "./images/attraction/만춘서점.jpeg",
        kakao_map: "https://place.map.kakao.com/1859768130",
        keyword: ["서점", "소규모"],
        like: 13,
        
        explanation:"책을 좋아한다면 꼭 가야할 독립서점"
    },
    {
        name: "동백포레스트",
        latitude: 33.30030634206566,
        longitude: 126.63619492725054,
        address: "제주특별자치도 서귀포시 남원읍 신례리 1767",
        image: "./images/attraction/동백포레스트.jpeg",
        kakao_map: "https://place.map.kakao.com/317349030",
        keyword: ["동백꽃", "농장"],
        like: 22,
        
        explanation:"통유리로 너머로 보이는 동백꽃나무들이 주는 아름다움"
    },


]
export default attraction