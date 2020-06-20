// https://www.npmjs.com/package/node-fetch
// a window.fetch compatible API on Node.js runtime
const fetch = require('node-fetch');

// Add focus to zip code input
function addzipCodeFocus(){
    document.getElementById('zip').focus();
}
// Function to addEventListener to SEARCH button
export function initSearchBtn(){
    //document.getElementById('search').addEventListener('click', getDestinationData(event));
    console.log('...app.js : initSearchBtn()');
}

/* Function called by event listener */
export function getDestinationData(event){
                            event.preventDefault();

                            // !!!
                            console.log('... app.js : getDestinationData()');

                            const destination = document.getElementById('destination').value;
                            document.getElementById('errMsg').innerHTML = "";
                            document.getElementById('intro').innerHTML = "";
                            document.getElementById('city_lat').innerHTML = "";
                            document.getElementById('city_long').innerHTML = "";
                            document.getElementById('country').innerHTML = "";


                            //const openWeatherURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}${unitsFormats}${openWeatherMapAPIkey}`;
                            const geonamesURL = `http://api.geonames.org/search?username=${process.env.GEONAMES_ID}&lang=en&type=JSON&maxRows=1&style=short&name_equals=${destination}`

                            getCityData(geonamesURL, zipCode)
                            .then((data) => postData('http://localhost:8083/destination', { latitude: data.geonames[0].lat
                                                                                    , longitude: data.geonames[0].lng
                                                                                    , city: data.geonames[0].name
                                                                                    , country: data.geonames[0].country}))
                            .then(() => updateUI())
                            .catch((error) => {console.error(`getWeather() chained promises :: error: ${error}`)});
}


/* Function to GET Web API Data*/
const getCityData = async (url) => {
                                    // !!!
                                    console.log('... app.js : getCityData()');

                                    const response = await fetch(url).catch( error => { console.log(`getCityData fetch() error: ${error}`)});
                                    try{
                                        const weatherData = await response.json();
                                        // !!!
                                        console.log('app.js : getCityData() :: weatherData = ' + JSON.stringify(weatherData));

                                        return weatherData;
                                    } catch(error) {
                                        console.error(`Error in getCityData() : ${error}`);
                                    }
}


/* Function to POST data */
const postData = async (url, data) => {  

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

                                const request = await fetch('http://localhost:8083/destination').catch( error => { console.log(`updateUI fetch() error: ${error}`)});
                                try{
                                    const data = await request.json();

                                    // !!!
                                    console.log('... app.js : updateUI() :: data = ' + JSON.stringify(data));

                                    document.getElementById('city').innerHTML = data.city;
                                    document.getElementById('city_lat').innerHTML = data.latitude;
                                    document.getElementById('city_lng').innerHTML = data.longitude;
                                    document.getElementById('country').innerHTML = data.country;
                                } catch(error) {
                                    console.error(`Error in updateUI() : ${error}`);
                                }
}

