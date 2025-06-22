    function validateCode() {
      const userCode = localStorage.getItem('userCode');
      const inputCode = document.getElementById('inputCode').value;
      const files = document.getElementById('checkImages').files;

      if (inputCode !== userCode) {
        alert("Incorrect code.");
        return false;
      }

      if (files.length !== 2) {
        alert("Please upload exactly 2 images.");
        return false;
      }

      localStorage.removeItem('lat');
      localStorage.removeItem('lon');
      localStorage.removeItem('markerAdded');

      alert("Marker removed!");
      window.location.href = "map.html";
      return false;
    }