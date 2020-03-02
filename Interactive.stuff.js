showModal = function(name) {
  
  var allModals = document.getElementsByClassName("modal");
  for(var x = 0; x < allModals.length; x++){
    allModals[x].style.display = "none";
  }

    modal = document.getElementById(name);
    modal.style.display = "block";
  };

var spanMadrid = document.getElementsByClassName("close1")[0];

  spanMadrid.onclick = function() {
    modal = document.getElementById("myModal1");
    modal.style.display = "none";
    };

var spanMont = document.getElementsByClassName("close2")[0];

    spanMont.onclick = function() {
      modal = document.getElementById("myModal2");
      modal.style.display = "none";
      };

var spanLondon = document.getElementsByClassName("close3")[0];

    spanLondon.onclick = function() {
      modal = document.getElementById("myModal3");
      modal.style.display = "none";
      };
      