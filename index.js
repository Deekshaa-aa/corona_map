// a function to update map
function updateMap()
{
    //fetch : it is a function to bring data from data feed it is a promise heance it need a then and catch with it which tells whther the promise is resolved or rejected
    fetch("./data.json")  //url from which data to be taken is agrument
    .then(response => response.json())  //returning response.json but it is also a promise hence one more then
    .then(rsp =>{                       //rsp ek data aur voh ek array h
        // console.log(rsp);
        // console.log(rsp.data);          //thid will given the data inside data array
        rsp.data.forEach(element => {
            latitude = element.latitude;
            longitude = element.longitude;

            cases = element.infected;
            if (cases>255){
                color = "rgb(255, 0, 0)";
            }

            else{
                color = `rgb(${cases}, 0, 0)`;
            }

            // Mark on the map
            new mapboxgl.Marker({
                draggable: false,
                color: color
            }).setLngLat([longitude, latitude])
            .addTo(map); 
        });
    })
}

// updateMap();
let interval = 20000;
setInterval( updateMap, interval); 