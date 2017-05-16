function initMap() {
        var ios = {lat: -33.796085, lng: 151.185711};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: ios
        });
        var marker = new google.maps.Marker({
          position: ios,
          map: map
        });
      }