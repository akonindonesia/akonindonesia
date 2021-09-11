/*! AKON MODAL v2.2.2 */
        var modal = document.getElementById("akoncar");
        var btn = document.getElementById("car");
        var span = document.getElementsByClassName("ModalAkonclose")[0];
        btn.onclick = function () {
          modal.style.display = "block";
        }
        span.onclick = function () {
          modal.style.display = "none";
        }
        window.onclick = function (event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }

        var modal1 = document.getElementById("akonbike");
        var btn = document.getElementById("bike");
        var span = document.getElementsByClassName("ModalAkon1close")[0];
        btn.onclick = function () {
          modal1.style.display = "block";
        }
        span.onclick = function () {
          modal1.style.display = "none";
        }
        window.onclick = function (event) {
          if (event.target == modal) {
            modal1.style.display = "none";
          }
        }

        var modal2 = document.getElementById("akoncourier");
        var btn = document.getElementById("courier");
        var span = document.getElementsByClassName("ModalAkon2close")[0];
        btn.onclick = function () {
          modal2.style.display = "block";
        }
        span.onclick = function () {
          modal2.style.display = "none";
        }
        window.onclick = function (event) {
          if (event.target == modal) {
            modal2.style.display = "none";
          }
        }

        var modal3 = document.getElementById("kategorifood");
        var btn = document.getElementById("kategorifoodbutton");
        var span = document.getElementsByClassName("ModalAkon3close")[0];
        btn.onclick = function () {
          modal3.style.display = "block";
        }
        span.onclick = function () {
          modal3.style.display = "none";
        }
        window.onclick = function (event) {
          if (event.target == modal) {
            modal3.style.display = "none";
          }
        }

        var modal4 = document.getElementById("kategoriumkm");
        var btn = document.getElementById("kategoriumkmbutton");
        var span = document.getElementsByClassName("ModalAkon4close")[0];
        btn.onclick = function () {
          modal4.style.display = "block";
        }
        span.onclick = function () {
          modal4.style.display = "none";
        }
        window.onclick = function (event) {
          if (event.target == modal) {
            modal4.style.display = "none";
          }
        }
        var modal5 = document.getElementById("umkm");
        var btn = document.getElementById("marketplace");
        var span = document.getElementsByClassName("ModalAkon5close")[0];
        btn.onclick = function () {
          modal5.style.display = "block";
        }
        span.onclick = function () {
          modal5.style.display = "none";
        }
        window.onclick = function (event) {
          if (event.target == modal) {
            modal5.style.display = "none";
          }
        }

        var modal6 = document.getElementById("jasaku");
        var btn = document.getElementById("jasa");
        var span = document.getElementsByClassName("ModalAkon6close")[0];
        btn.onclick = function () {
          modal6.style.display = "block";
        }
        span.onclick = function () {
          modal6.style.display = "none";
        }
        window.onclick = function (event) {
          if (event.target == modal) {
            modal6.style.display = "none";
          }
        }