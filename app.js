const token = "pk.eyJ1IjoicGFyMHMiLCJhIjoiY2s4YWxxa3Y0MDNnNjNqcXRjbHAwcGtucyJ9.P53jjAPr1iSjtfa2dSjJkA";
//const coronaApi = `${proxy}https://thevirustracker.com/free-api?global=stats`;

mapboxgl.accessToken = token;
        var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11'
        });

var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/dark-v10",
    zoom: 1.5,
    center:[0,20]
});

const proxy = "https://cors-anywhere.herokuapp.com/";
const coronaApi = `${proxy}https://coronavirus-tracker-api.herokuapp.com/v2/locations`;

  fetch(coronaApi)
  .then(response => response.json())
  .then(data => {
    for(let i = 0; i < 200; i ++){
      let latitude = data.locations[i].coordinates.latitude
      let longitude = data.locations[i].coordinates.longitude      
      try{
        var marker = new mapboxgl.Marker({
          color:"red"
        })
        .setLngLat([longitude,latitude])
        .addTo(map);
      } 
      catch{
        console.log(latitude,longitude)
      }          
    }
  });


//getting the current location of the user
if (navigator.geolocation) { //check if geolocation is available
    navigator.geolocation.getCurrentPosition(function(position){
        let lat = position.coords.latitude;
        let long = position.coords.longitude;         
    });
}   

