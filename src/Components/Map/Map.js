/*global kakao */
import React, { useEffect } from 'react';

const { kakao } = window;

const Map = ({ searchPlaces }) => {

    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(33.36241576632475, 126.5333088372503),
            level: 10
        };
        const map = new kakao.maps.Map(container, options);

        var markers = [];
        var infowWindows = [];

        // //-----------고쳐야 될 부분--------------
        // console.log(props.input)
        // if (props.searchPlaces == "removeAll") {
        //     removeMarkers();
        // }
        // else if (props.input == "all") {
        //     setMarkers(props.searchPlaces);
        // } // all 입력하면 모든 마커 띄움 

        // else {
        //     let arr = [];
        //     for (let i = 0; i < props.searchPlaces.length; i++) {
        //         if (props.searchPlaces[i].name.indexOf(props.input) != -1) { //장소의 이름 일부분만 검색해도 검색되게 함 ex)'우'만 검색해도 '우진해장국' 나옴
        //             arr.push(props.searchPlaces[i])
        //             setMarkers(arr)
        //         }
        //     }
        // } //검색했을때 이름이 일치하는 장소만 마커 띄움
        // //-----------고쳐야 될 부분--------------


        // function placesSearchCB(places, status, pagination) {
        //     if (status === kakao.maps.services.Status.OK) {
        //         console.log(status)
        //         let bounds = new kakao.maps.LatLngBounds();

        //         for (let i = 0; i < places.length; i++) {
        //             displayMarker(places[i]);
        //             bounds.extend(new kakao.maps.LatLng(places[i].latitude, places[i].longitude));
        //         }

        //         map.setBounds(bounds);
        //     }
        // }
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

        function panTo(lat, lng) {
            var moveLatLng = new kakao.maps.LatLng(lat, lng);

            map.panTo(moveLatLng);
        }

        function makeOverListener(marker, infoWindow) {
            return function () {
                closeInfoWindow();

                infoWindow.open(map, marker);
                var latLng = marker.getPosition();
                //map.getLevel() < 3 ? null : map.setLevel(3);
                map.setLevel(3);

                panTo(latLng.getLat(), latLng.getLng());
            }
        }
    }, [searchPlaces]); //useEffect 안에 있는 내용이 검색 버튼 누를때마다 랜더링되게 해 
    //같은 화면에서 초기화 안 누르고 여러번 검색할 수 있음

    return (
        <div id='map' style={{
            width: '60%',
            height: '500px',
            display: 'inline-block'
        }}></div>
    );
}

export default Map;