/*global kakao */
import React, { useEffect } from 'react';

const { kakao } = window;

const Map = ({ searchPlaces }) => {
    // 카카오맵 API 를 활용해 장소를 지도에 마커와 함께 표시
    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(33.36241576632475, 126.5333088372503),
            level: 10
        };
        const map = new kakao.maps.Map(container, options);

        var markers = [];
        var infowWindows = [];

        if (searchPlaces !== "") {
            removeMarkers();
            setMarkers(searchPlaces);
        }

        function setMarkers(places) {
            console.log(places)
            if (markers.length > 0) {
                removeMarkers();
            }

            let bounds = new kakao.maps.LatLngBounds();
            for (let i = 0; i < places.length; i++) {
                displayMarker(places[i]);
                bounds.extend(new kakao.maps.LatLng(places[i].latitude, places[i].longitude))
            }
            map.setBounds(bounds);
        }

        // 마커 생성
        function displayMarker(place) {
            let marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.latitude, place.longitude),
                title: place.name,
                clickable: true,
            });

            let infoWindow = makeInfoWindow(place.name);
            infoWindow.open(map, marker) // 동시에 여러 장소가 겁색 되었을때 알아보기 쉽도록 최초에도 인포윈도우 나오게 함
            kakao.maps.event.addListener(marker, 'click', makeOverListener(marker, infoWindow));

            markers.push(marker);
        }
        // 지도에 표시된 마커 전부 삭제
        function removeMarkers() {
            for (let i = 0; i < markers.length; i++) {
                markers[i].setMap(null);
            }
        }

        function makeInfoWindow(content) {
            let infoWindow = new kakao.maps.InfoWindow({
                content: content,
                removable: true,
            })
            infowWindows.push(infoWindow);

            return infoWindow;
        }

        function closeInfoWindow() {
            for (let i = 0; i < infowWindows.length; i++) {
                infowWindows[i].close();
            }
        }
        // 지도 이동
        function panTo(lat, lng) {
            var moveLatLng = new kakao.maps.LatLng(lat, lng);

            map.panTo(moveLatLng);
        }

        function makeOverListener(marker, infoWindow) {
            return function () {
                closeInfoWindow();

                infoWindow.open(map, marker);
                var latLng = marker.getPosition();
                map.setLevel(7);

                panTo(latLng.getLat(), latLng.getLng());
            }
        }
    }, [searchPlaces]); //useEffect 안에 있는 내용이 검색 버튼 누를때마다 랜더링되게 해 
    //같은 화면에서 초기화 안 누르고 여러번 검색할 수 있음

    return (
        <div id='map' style={{
            width: '50vw',
            height: '550px',
            display: 'inline-block',
            marginTop : 100,
            marginRight : 0
        }}></div>
    );
}

export default Map;