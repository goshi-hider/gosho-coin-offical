for (let i = 0; i < 3; i++) {
      const imgData = localStorage.getItem(`image${i}`);
      if (imgData) {
        const img = document.createElement('img');
        img.src = imgData;
        img.style.maxWidth = "200px";
        img.style.margin = "10px";
        document.getElementById('images').appendChild(img);
      }
    }