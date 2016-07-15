var initMap = function() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
      center: {lat: 25.7617, lng: 80.1918},
      zoom: 8
  });
}