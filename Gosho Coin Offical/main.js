function handleSubmit() {
      const code = document.getElementById('code').value;
      const regex = /^[A-Z]\d{4}$/;
      if (!regex.test(code)) {
        alert("Code must start with an uppercase letter followed by 4 digits.");
        return false;
      }

      const option = document.querySelector('input[name="choice"]:checked').value;

      const images = document.getElementById('images').files;
      if (images.length !== 3) {
        alert("Please upload exactly 3 images.");
        return false;
      }

      // Save inputs to localStorage
      localStorage.setItem('userCode', code);
      localStorage.setItem('userOption', option);
      for (let i = 0; i < 3; i++) {
        const reader = new FileReader();
        reader.onload = function () {
          localStorage.setItem(`image${i}`, reader.result);
        };
        reader.readAsDataURL(images[i]);
      }

      navigator.geolocation.getCurrentPosition(pos => {
        localStorage.setItem('lat', pos.coords.latitude);
        localStorage.setItem('lon', pos.coords.longitude);
        window.location.href = "map.html";
      });

      return false;
    }