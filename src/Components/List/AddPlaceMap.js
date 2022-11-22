import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import AddNewPlace from './AddNewPlace'
import './AddPlace.css'


const { kakao } = window


const AddPlaceMap = ({ searchPlace }) => {

  let navigate = useNavigate()
  // 검색결과 배열에 담아줌
  const [Places, setPlaces] = useState([])
  const [addingPlace,setAddingPlace]=useState(...Places)
  const [modal,setModal] = useState(false)

  


  
  useEffect(() => {
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 })
    var markers = []
    const container = document.getElementById('myMap')
    const options = {
      center: new kakao.maps.LatLng(33.36241576632475, 126.5333088372503),
      level: 10,
    }
    const map = new kakao.maps.Map(container, options)

    const ps = new kakao.maps.services.Places()

    ps.keywordSearch(searchPlace, placesSearchCB)

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds()

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i])
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
        }

        map.setBounds(bounds)
        // 페이지 목록 보여주는 displayPagination() 추가
        displayPagination(pagination)
        setPlaces(data)
      }
    }

    // 검색결과 목록 하단에 페이지 번호 표시
    function displayPagination(pagination) {
      var paginationEl = document.getElementById('pagination'),
        fragment = document.createDocumentFragment(),
        i

      // 기존에 추가된 페이지 번호 삭제
      while (paginationEl.hasChildNodes()) {
        paginationEl.removeChild(paginationEl.lastChild)
      }

      for (i = 1; i <= pagination.last; i++) {
        var el = document.createElement('a')
        el.href = '#'
        el.innerHTML = i

        if (i === pagination.current) {
          el.className = 'on'
        } else {
          el.onclick = (function (i) {
            return function () {
              pagination.gotoPage(i)
            }
          })(i)
        }

        fragment.appendChild(el)
      }
      paginationEl.appendChild(fragment)
    }

    function displayMarker(place) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      })

      kakao.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>')
        infowindow.open(map, marker)
      })
    }
  }, [searchPlace])

  return (
    <div className = "addPlaceMapDiv">
      <div id="myMap"
        style={{
          width: '50%',
          height: '500px',
          display:'inline-block'
        }}
      ></div>
      <div id="result-list" style={{
        display:'inline-block',
        width:'40%'
        }} >
        {Places.map((item, i) => (
          <div key={i} id="placeCard" style={{ marginTop: '5px',  marginBottom: '20px' }}>
            <span style={{ fontSize: 'x-small'}}>[ {i + 1} ]</span>
            <div>
              <div style={{ marginTop: '10px',  marginBottom: '10px' }}>{item.place_name}</div>
              {item.road_address_name ? (
                <div style={{ padding: '0px 10px 0px 10px', fontSize: 'small'}}>
                  <div style={{fontSize: 'small'}}>📍 {item.road_address_name}</div>
                  <span style={{fontSize: 'small'}}>📍 {item.address_name}</span>
                </div>
              ) : (
                <span style={{fontSize: 'small'}}>📍 {item.address_name}</span>
              )}
              <span style={{fontSize: 'small'}}>📞 {item.phone}</span>
              <br></br>
              <button id = "addResultListBtn" key ={i} onClick={()=>{
            setAddingPlace(Places[i])
            // navigate("/sub/addplace/addnewplace")
            console.log(addingPlace)
            setModal(true)
            }}>추가</button>
            </div>
            
          </div>
        ))}
        
        <div id="pagination"></div>
      </div>
      {modal?(
        <AddNewPlace addingPlace={addingPlace}/>
      ):
      null}
    </div>
  ) 
  
}

export  {AddPlaceMap}
