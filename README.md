# :sunglasses:웹프레임워크 7조 코딩부기 팀프로젝트
깃허브 주소: [Link](https://github.com/2022-WF1-CodingBugi/Eodrae_gamdi)

**(링크를 통해서 마크다운을 보신다면 더 멋지게 보실 수 있답니다.)**

<B> 일정 : 2022.10.26 ~ 2022.11.28 </B><br>

## :zap:목차
* [멤버](#four_leaf_clover멤버)
* [역할](#bust_in_silhouette역할)
* [디렉토리 구조](#book디렉토리)
* [사용법](#question사용법)

## :four_leaf_clover:멤버
| <a href="https://github.com/kwani6684"><img src="https://avatars.githubusercontent.com/u/112394220?v=4" width="90" height="90"></a> | <a href="https://github.com/jueun0725"><img src="https://avatars.githubusercontent.com/u/103445254?v=4" width="90" height="90"></a> | <a href="https://github.com/wonchanjoo"><img src="https://avatars.githubusercontent.com/u/92321183?v=4" width="90" height="90"></a> | <a href="https://github.com/newJunsung"><img src="https://avatars.githubusercontent.com/u/107932188?v=4" width="90" height="90"></a> | <a href="https://github.com/Fineday-yn"><img src="https://avatars.githubusercontent.com/u/81400435?v=4" width="90" height="90"></a> |
| ----- | ----- | ----- | ----- | ----- |
| 1891107 | 2071050 | 2071154 | 1891027 | 2071479 |
| [최성관(팀장)](https://github.com/kwani6684) | [최호빈](https://github.com/zzawang) | [원찬주](https://github.com/wonchanjoo) | [김준성](https://github.com/newJunsung) | [김유나](https://github.com/Fineday-yn) |

_[목차로 이동](#zap목차)_

## :bust_in_silhouette:역할
1. 최성관: 카카오 맵 API를 이용하여, 장소추가 기능 및 지도 구현
2. 최호빈: 로그인, 리스트 구현 및 CSS 디자인
3. 원찬주: 메인 홈페이지 구현, 캐러셀, 좋아요 기능, 
4. 김준성: 지도 구현 및 리팩토링, 리스트 오류 일부 수정
5. 김유나: 계획 발표 ppt 작성

**모두가 장소 데이터를 작성하고 추가함**

_[목차로 이동](#zap목차)_

## :book:디렉토리

* public
  * images
    * activity: 제주도의 액티비티 이미지를 담은 디렉토리
    * attraction: 제주도의 명소 이미지를 담은 디렉토리
    * food: 제주도의 맛집 이미지를 담은 디렉토리
    * lodging: 제주도의 숙소 이미지를 담은 디렉토리
* src
  * Components
    * List: 제주도 장소 리스트를 보여주거나 추가하는 파일들을 담은 디렉토리
    * Map: 카카오 맵 API를 활용하여 만든 파일들을 담은 디렉토리
  * Data: 제주도의 장소 관련 데이터들을 담은 디렉토리
        
        (activity.js/attraction.js/food.js/lodging.js로 구성, 데이터들은 js파일 내에 배열로 구성해두었습니다.)
  * Pages
    * images: Main.js를 꾸미기 위한 이미지들을 담은 디렉토리
  * Resources
    * Fonts: 프로젝트 내에서 쓰이는 폰트를 담은 디렉토리
    * Images: 앱 전반에 걸쳐 쓰이는 이미지들을 담은 디렉토리

```
      저희는 리액트를 활용하여 개발하였고 각 기능들에 맞는 컴포넌트들을 구현하였습니다. 
      카카오맵 api를 활용하여 웹페이지에 지도를 나타내고 장소를 추가하는 등의 컴포넌트들은 Map 폴더에,
      장소들의 상세 설명들을 담은 컴포넌트들은 List 폴더에 추가하였습니다.
      저희는 따로 백엔드를 쓰지 않았기 때문에 각 카테고리별로 js파일을 만들어 데이터를 보관하였고
      메인페이지, 카테고리 페이지등의 서브페이지들도 모두 컴포넌트로 구현해서 Pages폴더에 추가하였습니다.
      이 외에 배경이미지나 폰트등은 Resource 폴더에 추가하였습니다.
      사용자의 인터페이스를 위해 css를 활용하여 이미지를 동적으로 움직이게 하는 애니메이션을 사용하였고 
      버튼 위나 이미지위에 마우스를 올리거나 클릭하면 크기가 커지는 등의 입출력효과를 적용시켰습니다.
      쓰이는 각종 데이터들은 스테이트 변수들을활용해 상태관리 하였고,
      컴포넌트들끼리 주고 받을 수 있게 하였습니다. 또한 데이터들을 JSON형식으로 
      웹브라우저의 로컬스토리지에 저장하여 추가되는 데이터들을 유지할 수 있게 하였습니다.
```

_[목차로 이동](#zap목차)_

## :question:사용법
1. npm install과 npm start를 하시면 프로젝트를 구동할 수 있습니다.
2. 저희는 데이터베이스(백엔드)를 따로 구현하지 않았기 때문에, 세션&로컬 스토리지를 활용했습니다. 문제가 생긴다면, 로컬 스토리지를 전부 지우시고 새로고침을 하기 바랍니다.

_[목차로 이동](#zap목차)_
