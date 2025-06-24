document.addEventListener("DOMContentLoaded", () => {
  const map = L.map('map').setView([36.0, 128.0], 7);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
  }).addTo(map);
});
