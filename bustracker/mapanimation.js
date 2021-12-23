let markers = []
let counter=0;
let stop = false;
function init(){
    mapboxgl.accessToken = 'pk.eyJ1IjoiZ3Y2ODY4MiIsImEiOiJja3dvOThoeTgwMG1zMm9tOGpqbDhnd2E5In0.NDpwNteAha1ziCmafLHWyg';
    // This is the map instance
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-71.104081, 42.365554],
        zoom: 14,
    });
}
init();
async function run(){
    // get bus data 
    if(!stop){ 
        console.log(stop)  
        const locations = await getBusLocations();
        console.log(new Date());
        console.log(locations);
        locations.forEach(bus => {
            let newMarker = bus.id
            var marker = markers.find(function(item){
                return item.id === newMarker;
            });
            if(marker){
                moveMarker(bus, marker)
            }
            else{
                const elem = document.createElement('div')
                elem.className = "marker"
                var tempMarker = new mapboxgl.Marker(elem)
                console.log(tempMarker, 'marker')
                    tempMarker.setLngLat([bus.attributes.longitude, bus.attributes.latitude]).addTo(map);                 
                tempMarker.id = bus.id
                let direction =''
                let seats = bus.attributes.occupancy_status
                if(seats != null)seats= seats.toLowerCase()
                if(bus.attributes.direction_id ==1)direction = "Harvard to MIT"
                else direction = "MIT to Harvard"
                let popup = new mapboxgl.Popup({ closeOnClick: true })
                    .setLngLat([bus.attributes.longitude, bus.attributes.latitude])
                    .setHTML(`<h4>Bus Number: ${bus.attributes.label}<br> ${direction}<br>${seats}<h4>`)
                    .addTo(map)
                setTimeout(() => popup.remove(), 15000)
                markers.push(tempMarker);
            }
        });
    }  
   
    if(!stop){
        setTimeout(run, 15000);
    }
}	
// Request bus data from MBTA
async function getBusLocations(){
        let routeNum = Number(document.getElementById('route-input').value)
        console.log(routeNum)
    // let routeNum = Number(document.getElementById('route-input').value)
    if(counter < 2){
        const url = 'https://api-v3.mbta.com/vehicles?api_key=ca34f7b7ac8a445287cab52fb451030a&filter[route]='+routeNum+'&include=trip';	
        console.log(url)
        const response = await fetch(url);
        const json     = await response.json();
        counter += 1;
        console.log(counter + "ccccccccccccccc");
        if(json.data.length <= 0){ return alert("No buses in this route! Try 1 0r 67")}
        return json.data;
    }
    else{
        reset();
    }
}		
async function moveMarker(bus, marker){
    if(!stop){
        marker.setLngLat([bus.attributes.longitude, bus.attributes.latitude]).addTo(map); 
        let direction =''
        let seats = bus.attributes.occupancy_status
        if(seats != null) seats=seats.toLowerCase()
        if(bus.attributes.direction_id ===1)direction = "Harvard to MIT"
        else direction = "MIT to Harvard"                
        let popup = new mapboxgl.Popup({ closeOnClick: true })
            .setLngLat([bus.attributes.longitude, bus.attributes.latitude])
            .setHTML(`<h4>Bus Number: ${bus.attributes.label}<br> ${direction}<br>${seats}<h4>`)
            .addTo(map)
        setTimeout(() => popup.remove(), 10000)
    }
}

async function reset() {
    stop=true;
    counter = 0;
    markers=[];
    let m=document.getElementsByClassName('marker');//marker mapboxgl-marker mapboxgl-marker-anchor-center  mapboxgl-canvas-container mapboxgl-interactive mapboxgl-touch-drag-pan mapboxgl-touch-zoom-rotate
    m = [...m]
    let popups = document.getElementsByClassName('mapboxgl-popup mapboxgl-popup-anchor-bottom-right') //mapboxgl-popup mapboxgl-popup-anchor-bottom-right
    popups=[...popups]
    console.log(popups.length + "PPP")
    console.log(m.length + "LLLLLL")
    while (m.length > 0) {
        m.pop().remove();
        //popups.pop().remove();
        console.log(stop)
    }
    init();
}



// async function stoppred(bus){
//     let i=20
//     const elem = document.createElement('div')
//     elem.className = "stopped"
//     var tempMarker = new mapboxgl.Marker(elem)
//     console.log(tempMarker, 'temp')
//     while(i>0){
//         tempMarker.setLngLat([bus.attributes.longitude, bus.attributes.latitude])
//             .addTo(map);                 
//         setTimeout(() => tempMarker.remove(), 11000)
//         i--
//     }  
// }
// async function update(initOnly){
//     await init();
//     if (!initOnly) {
//         await run();
//     }
// }
// update(true);

        /**
    marker.setPosition( {
        lat: bus.latitude, 
        lng: bus.longitude,
        })
        label:{ color: '#00aaff', fontWeight: 'bold', fontSize: '14px', text: 'Your text here' }
        //.setHTML(`<h2>${bus.label}<h2>`);
    **/