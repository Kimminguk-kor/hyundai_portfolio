var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.464585, 127.043015), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.464585, 127.043015); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

var iwContent = 
'<div class="wrap">' + 
            '    <div class="info" style="width:240px">' + 
            '        <div class="title" style="font-size:15px; text-align:center; font-weight:bold;background:wheat; height:25px; padding-top:4px;">' + 
            '            현대자동차 양재동 사옥' + 
            '        </div>' + 
            '        <div class="body" style="display:flex; padding-top:10px;">' + 
            '            <div class="img" style="padding-right:9px">' +
            '                <img src="images/hyundai_small_logo.png" width="60" height="60">' +
            '           </div>' + 
            '            <div class="desc" style="padding-top:8px;">' + 
            '                <div class="ellipsis" style="font-size:15px; font-weight:bold">서울 서초구 헌릉로 12</div>' + 
            '                <div class="jibun ellipsis" style="font-size:13px;">(우) 06797 (지번) 양재동 231</div>' + 
            '            </div>' + 
            '        </div>' + 
            '    </div>' +    
            '</div>';
    iwPosition = new kakao.maps.LatLng(37.464585, 127.043015); //인포윈도우 표시 위치입니다

// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
  
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker); 