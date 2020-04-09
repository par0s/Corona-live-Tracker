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


//test pops
var marker = new mapboxgl.Marker({
      color:"red"
    })
    .setLngLat([-96, 37.8])
    //.setPopup(popup) // sets a popup on this marker
    .addTo(map);

const proxy = "https://cors-anywhere.herokuapp.com/";
const coronaApi = `${proxy}https://coronavirus-tracker-api.herokuapp.com/v2/locations`;

  fetch(coronaApi)
  .then(response => response.json())
  .then(data => {
    let world_confirmed = data.latest.confirmed;
    let world_died = data.latest.deaths;

    document.getElementsByClassName('numbers1').innerHTML = world_confirmed;
    document.getElementsByClassName('numbers2').innerHTML = world_died;

    console.log(data);
    for(let i = 0; i < 200; i ++){
      let latitude = data.locations[i].coordinates.latitude
      let longitude = data.locations[i].coordinates.longitude  
      let country_name = data.locations[i].country
      let news_feed = data.locations[i].latest
      let confirmed = data.locations[i].latest.confirmed
      let deaths = data.locations[i].latest.deaths
      let news_pop = `<p> Country - ${country_name} \n Confirmed - ${confirmed} \n Deaths - ${deaths} </p>`
      try{
        var el = document.createElement('div');
        el.id = 'marker';
        var popup = new mapboxgl.Popup({ offset: 25 }).setText(
            news_pop
          );          
        var marker = new mapboxgl.Marker({
          color:"red"
        })
        .setLngLat([longitude,latitude])
        .setPopup(popup)
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

