document.addEventListener("DOMContentLoaded", () => { const map = L.map('map').setView([36.0, 128.5], 7); L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);

// 현재 위치 if (navigator.geolocation) { navigator.geolocation.getCurrentPosition(position => { const lat = position.coords.latitude; const lon = position.coords.longitude; L.marker([lat, lon]).addTo(map) .bindPopup("📍 현재 위치").openPopup(); map.setView([lat, lon], 12); }); }

// 정확한 15일 일정 경로 및 상세 마커 const days = [ { coord: [35.8278, 128.7205], title: "1일차", info: "📸 수성목<br>🍜 김광석가리 우동집<br>🏨 수성구 게스트하우스" }, { coord: [36.0190, 129.3435], title: "2일차", info: "📸 포항운하<br>🍛 죽도시장 회센터<br>🏨 포항 게스트하우스" }, { coord: [36.0754, 129.4057], title: "3일차", info: "📸 영일대 해수용장<br>🍖 구뢰포 과메기곡도<br>🏨 바다뷰 모텔" }, { coord: [36.0622, 129.5625], title: "4일차", info: "📸 호미곡 해망이구장<br>🍲 해물즴�집<br>🏨 호미곡 민박" }, { coord: [36.9931, 129.4002], title: "5일차", info: "📸 울진 망양정<br>🍱 전복정식<br>🏨 울진 게스트하우스" }, { coord: [37.4458, 129.1667], title: "6일차", info: "📸 삼척 해베<br>🍜 곰치국밥<br>🏨 삼척 바다가 민박" }, { coord: [37.5233, 129.1161], title: "7일차", info: "📸 추암 초대바위<br>🍗 닭강정<br>🏨 동해 모텔" }, { coord: [37.5508, 129.1149], title: "8일차", info: "📸 묹호항<br>🍜 맛국수<br>🏨 묹호 민박" }, { coord: [37.6903, 129.0335], title: "9일차", info: "📸 정동진<br>🍞 모닝밥 카페<br>🏨 기차 모텔" }, { coord: [37.7952, 128.9154], title: "10일차", info: "📸 경포대<br>☕ 팩빙수<br>🏨 강릉 호텔" }, { coord: [37.7739, 128.9460], title: "11일차", info: "📸 안목 카피거리<br>☕ 아메리카노<br>🏨 카피거리 수소" }, { coord: [37.8923, 128.8329], title: "12일차", info: "📸 주문진 어시장<br>🥐 사우티김<br>🏨 어시장 민박" }, { coord: [38.0046, 128.7333], title: "13일차", info: "📸 남애항<br>🐙 문어술회<br>🏨 항구 민박" }, { coord: [38.0786, 128.6288], title: "14일차", info: "📸 양양 서피비치<br>🌮 타코<br>🏨 서핑 게스트하우스" }, { coord: [38.2094, 128.5916], title: "15일차", info: "📸 속초 대포항<br>🍜 오징어순두부<br>🏨 속초 호텔" } ];

const latlngs = [];

days.forEach((day) => { const marker = L.marker(day.coord).addTo(map); marker.bindPopup(<b>${day.title}</b><br>${day.info}); latlngs.push(day.coord); });

L.polyline(latlngs, { color: 'cyan' }).addTo(map); });

