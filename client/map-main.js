var mapJson = [];
var mapDetails = []

$.ajax({
  method: "GET",
  url: "http://localhost:3000/maps",
  async: false,
  dataType: "json",
})
  .done(function(result) {
    let arrMaps = result.results
    arrMaps.forEach(item => {
      let lat = item.geometry.location.lat
      let lng = item.geometry.location.lng
      
      mapDetails.push([item.name, item.vicinity])
      let arr = [lat,lng]
      mapJson.push(arr)
    })
  })
  .fail(function(error) {
    console.log(error)
  })

  console.log(mapDetails)

function initMap(){
  if(!!navigator.geolocation) {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      mapTypeId: 'terrain'
    });

    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      map.setCenter(geolocate);
    });
  }

  for (var i = 0; i < mapJson.length; i++) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(mapJson[i][0], mapJson[i][1]),
      name: mapDetails[i]
    });

    
    marker.setMap(map)
    marker.addListener('click', function() {
      alert(this.name[0] + ": " + this.name[1]);
    });
  }
    
}