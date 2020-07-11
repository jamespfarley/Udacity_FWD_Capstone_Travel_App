// https://www.npmjs.com/package/node-fetch

import { getWeatherData } from './weather';
import { getDestinationImage, postPixabayCity } from './pixabay';
import { saveTripData, clearTripData, deleteItinerary, getTripData } from './storage';

// a window.fetch compatible API on Node.js runtime
const fetch = require('node-fetch');

// Function to addEventListener to SEARCH button
export const init = () => {
    document.getElementById('search').addEventListener('click', getDestinationData);
    document.getElementById('save').addEventListener('click', saveTripData)
    document.getElementById('delete').addEventListener('click', clearTripData)
    //document.getElementById('image').setAttribute('src', '../media/globe.jpg');
    //document.getElementById("image").addEventListener("error", () => {
    //    document.getElementById("image").setAttribute('src', '../media/globe.jpg');
    //});

    // Fetch saved trip data
    if ( localStorage.length > 0 ){
        getTripData();
    }
}

/* Function called by event listener */
export function getDestinationData(){

                            // !!!
                            console.log('... app.js : getDestinationData()');

                            // City validation
                            let destination = document.getElementById('destination').value;
                            if ( destination === "" || /[0-9]|[!@#$%^&*()_\-+=:";\'<>?,./]/.test(destination)){

                                document.getElementById("cityErrMsg").innerHTML = "Please enter a valid city ..."
                                return;
                            } else {
                                document.getElementById("cityErrMsg").innerHTML = "";
                            }
                            //!!!
                            console.log(`... getDestinationData() : destination = ${destination}`);

                            // Date validation
                            let date = document.getElementById('departureDate').value;
                            if ( date === "" ){

                                document.getElementById("dateErrMsg").innerHTML = "Please enter a departure date ..."
                                return;
                            }

                            let departureDate = new Intl.DateTimeFormat('en-US', {month:"2-digit", day:"2-digit", year:"numeric"}).format(new Date(date + 'T00:00:00'));
                            let numDays = getDaysTilDeparture(departureDate);
                            if ( numDays < 0 ){

                                document.getElementById("dateErrMsg").innerHTML = "Please enter a future departure date ..."
                                return;
                            } else {
                                document.getElementById("dateErrMsg").innerHTML = "";
                            }                           

                            // !!!
                            console.log(`... getDestinationData() : departureDate = ${departureDate}`);
                            console.log(`... getDestinationData() : numDays = ${numDays}`);

                            deleteItinerary();

                            const geonamesURL = `http://api.geonames.org/searchJSON?username=${process.env.GEONAMES_ID}&lang=en&maxRows=1&style=short&name_equals=${destination}`

                            getCityData(geonamesURL)
                            .then((data) => getWeatherData(data))
                            .then((data) => postPixabayCity(data))
                            .then((data) => getDestinationImage(data))
                            .then((data) => postData('http://localhost:8081/destination', {latitude: data.geonames[0].lat
                                                                                    , longitude: data.geonames[0].lng
                                                                                    , city: data.geonames[0].name
                                                                                    , country: data.geonames[0].countryCode
                                                                                    , diffInDays: numDays
                                                                                    , lo_temp: data.data[0].low_temp
                                                                                    , hi_temp: data.data[0].high_temp
                                                                                    , forecast: data.data[0].weather.description
                                                                                    , image: data.imgUrl
                                                                                    , tripDate: departureDate}))
                            .then(() => updateUI())
                            .catch((error) => {console.error(`getDestinationData() chained promises :: error: ${error}`)});
                            
}

// Get number of days until departure
const getDaysTilDeparture = (dateValue) => {

    const currentDate = new Date();

    let departureDate = new Date(dateValue) ;

    console.log(`Current date = ${currentDate} ... departureDate = ${departureDate}`);

    return Math.trunc((departureDate.getTime() - currentDate.getTime()) / (1000*60*60*24));
}


/* Function to GET Web API Data*/
const getCityData = async (url) => {
                                    // !!!
                                    console.log('... app.js : getCityData()');

                                    const response = await fetch(url).catch( error => { console.log(`getCityData fetch() error: ${error}`)});
                                    try{
                                        const cityData = await response.json();
                                        // !!!
                                        console.log('app.js : getCityData() :: cityData = ' + JSON.stringify(cityData));

                                        return cityData;
                                    } catch(error) {
                                        console.error(`Error in getCityData() : ${error}`);
                                    }
}


/* Function to POST data */
export const postData = async (url, data) => {  

                                        // !!!
                                        console.log('... app.js : postData() :: data = ' + JSON.stringify(data));

                                        const response = await fetch(url,
                                                                    { method: 'POST',
                                                                    credentials: 'same-origin',
                                                                    headers: {'Content-type':'application/json', },
                                                                    body: JSON.stringify(data)
                                                                    }).catch( 
                                                                        error => { console.log(`postData() fetch() error: ${error}`)}
                                                                    );
                                        try{
                                            const newData = await response.json();

                                            // !!!
                                            console.log('... app.js : postData() :: newData = ' + JSON.stringify(newData));

                                            return newData;
                                        } catch(error){
                                            console.error(`Error in postData() : ${error}`);
                                        }                                   
}


/* Function to GET Project Data */
const updateUI = async () => {
                                console.log('... app.js : updateUI()');

                                const request = await fetch('http://localhost:8081/all').catch( error => { console.log(`updateUI fetch() error: ${error}`)});
                                const destinationImg = document.getElementById('image');

                                try{
                                    const data = await request.json();

                                    // !!!
                                    console.log('... app.js : updateUI() :: data = ' + JSON.stringify(data));

                                    let destination = 'Your trip to ' + data.city + ', ' +  data.country;

                                    document.getElementById('city').innerHTML = destination;
                                    document.getElementById('tripDate').innerHTML = 'on ' + data.tripDate;
                                    document.getElementById('daysTilDepart').innerHTML = 'is in ' + data.diffInDays + ' days.';
                                    document.getElementById('city_lat').innerHTML = 'Latitude : ' + data.latitude;
                                    document.getElementById('city_lng').innerHTML = 'Longitude : ' + data.longitude;
                                    document.getElementById('currForecast').innerHTML = 'Current forecast : ';
                                    document.getElementById('forecast').innerHTML = data.forecast
                                    document.getElementById('lo_temp').innerHTML = 'Low : ' + data.lo_temp;
                                    document.getElementById('hi_temp').innerHTML = 'High : ' + data.hi_temp;

                                    destinationImg.setAttribute('src', data.image);
                                } catch(error) {
                                    console.error(`Error in updateUI() : ${error}`);
                                }
}