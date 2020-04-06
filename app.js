const token = "pk.eyJ1IjoicGFyMHMiLCJhIjoiY2s4YWxxa3Y0MDNnNjNqcXRjbHAwcGtucyJ9.P53jjAPr1iSjtfa2dSjJkA";

mapboxgl.accessToken = token;
        var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11'
        });

fetch("https://pomber.github.io/covid19/timeseries.json")
  .then(response => response.json())
  .then(data => {
    //const country = Malawi."0";
    console.log(data.Afghanistan['72'].date);    
  });


if (navigator.geolocation) { //check if geolocation is available
    navigator.geolocation.getCurrentPosition(function(position){
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        // fetch("https://pomber.github.io/covid19/timeseries.json")
        //     .then(response => response.json())
        //     .then(data => {
        //         //const country = Malawi."0";
        //         console.log(data.Afghanistan['72'].date);    
        //     });

        console.log(position.coords.latitude);
        console.log(position.coords.longitude);        
    });
}   
