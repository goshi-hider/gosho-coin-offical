const lat = parseFloat(localStorage.getItem('lat'));
    const lon = parseFloat(localStorage.getItem('lon'));
    const option = localStorage.getItem('userOption') || "User Location";

    const map = L.map('map').setView([lat, lon], 13);

    const popupContent = `
      <b>${option}</b><br>
      <a href="images.html" class="popup-button">View Uploaded Images</a>
    `;

    L.marker([lat, lon])
      .addTo(map)
      .bindPopup(popupContent)
      .openPopup();

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);