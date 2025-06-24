document.addEventListener("DOMContentLoaded", () => {
  const map = L.map('map').setView([36.0, 128.5], 7);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
  }).addTo(map);

  // 현재 위치
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      L.marker([lat, lon]).addTo(map)
        .bindPopup("📍 현재 위치").openPopup();
      map.setView([lat, lon], 12);
    });
  }

  // 15일 일정 경로 및 상세 마커
  const days = [
    { coord: [35.8414, 128.6982], title: "1일차", info: "📸 수성못\n🍜 김광석거리 우동집\n🏨 수성구 게스트하우스" },
    { coord: [36.0, 129.0], title: "2일차", info: "📸 포항운하\n🍛 죽도시장 회센터\n🏨 포항 게스트하우스" },
    { coord: [36.1, 129.2], title: "3일차", info: "📸 영일대해수욕장\n🍖 구룡포 과메기골목\n🏨 바다뷰 모텔" },
    { coord: [36.3, 129.4], title: "4일차", info: "📸 호미곶 해맞이광장\n🍲 해물짬뽕집\n🏨 호미곶 민박" },
    { coord: [36.5, 129.6], title: "5일차", info: "📸 울진 망양정\n🍱 전복정식\n🏨 울진 게스트하우스" },
    { coord: [36.7, 129.8], title: "6일차", info: "📸 삼척 해변\n🍜 곰치국밥\n🏨 삼척 바닷가 민박" },
    { coord: [36.9, 130.0], title: "7일차", info: "📸 추암 촛대바위\n🍗 닭강정\n🏨 동해 모텔" },
    { coord: [37.1, 130.1], title: "8일차", info: "📸 묵호항\n🍜 막국수\n🏨 묵호 민박" },
    { coord: [37.3, 130.3], title: "9일차", info: "📸 정동진\n🍞 모닝빵카페\n🏨 기차 모텔" },
    { coord: [37.5, 130.5], title: "10일차", info: "📸 경포대\n🍧 팥빙수\n🏨 강릉 호텔" },
    { coord: [37.6, 130.6], title: "11일차", info: "📸 안목 커피거리\n☕ 아메리카노\n🏨 커피거리 숙소" },
    { coord: [37.7, 130.7], title: "12일차", info: "📸 주문진 어시장\n🦐 새우튀김\n🏨 어시장 민박" },
    { coord: [37.8, 130.8], title: "13일차", info: "📸 남애항\n🐙 문어숙회\n🏨 항구 민박" },
    { coord: [37.9, 130.9], title: "14일차", info: "📸 양양 서피비치\n🌮 타코\n🏨 서핑 게스트하우스" },
    { coord: [38.2, 131.0], title: "15일차", info: "📸 속초 대포항\n🍜 오징어순두부\n🏨 속초 호텔" }
  ];

  const latlngs = [];

  days.forEach((day) => {
    const marker = L.marker(day.coord).addTo(map);
    marker.bindPopup(`<b>${day.title}</b><br>${day.info.replace(/\n/g, "<br>")}`);
    latlngs.push(day.coord);
  });

  L.polyline(latlngs, { color: 'cyan' }).addTo(map);
});
