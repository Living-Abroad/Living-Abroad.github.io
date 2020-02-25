showModal = function(name) {
    modal = document.getElementById(name);
    modal.style.display = "block";
  };

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }