document.addEventListener('DOMContentLoaded', function() {
  var location = 0
  const test = document.getElementById("callgoogle");
  const test2 = document.getElementById("donate");
  const test3 = document.getElementById("test");


  test.onclick = function() {
    document.write('Found Location');
    window.location.replace("https://codepen.io/Codemyjam/full/dQppZd");
  }



test2.onclick = function() {
    document.write("If you want, please donate to food banks in Singapore:)");
    window.location.replace("http://www.foodbank.sg/payments/");
  }
//test3.onclick = function(){


//}


  var mapProp = {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5
  };

  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp)
  var f = 10;
})
