// https://www.npmjs.com/package/node-fetch
// a window.fetch compatible API on Node.js runtime
const fetch = require('node-fetch');

// Function to addEventListener to SEARCH button
export function initSearchBtn(){
    document.getElementById('search').addEventListener('click', getDestinationData);
}

/* Function called by event listener */
export function getDestinationData(){

                            // !!!
                            console.log('... app.js : getDestinationData()');

                            const destination = 'Paris'; //document.getElementById('destination').value;
                            //!!!
                            console.log(`... getDestinationData() : destination = ${destination}`);
                            document.getElementById('city').innerHTML = "";
                            document.getElementById('city_lat').innerHTML = "";
                            document.getElementById('city_lng').innerHTML = "";
                            document.getElementById('country').innerHTML = "";

                            const geonamesURL = `http://api.geonames.org/searchJSON?username=${process.env.GEONAMES_ID}&lang=en&maxRows=1&style=short&name_equals=${destination}`

                            getCityData(geonamesURL)
                            .then((data) => postData('http://localhost:8081/destination', {latitude: data.geonames[0].lat
                                                                                    , longitude: data.geonames[0].lng
                                                                                    , city: data.geonames[0].name
                                                                                    , country: data.geonames[0].countryCode}))
                            .then(() => updateUI())
                            .catch((error) => {console.error(`getDestinationData() chained promises :: error: ${error}`)});
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

                                const request = await fetch('http://localhost:8081/destination').catch( error => { console.log(`updateUI fetch() error: ${error}`)});
                                // !!!
                                console.log(`updateUI : request object = ${JSON.stringify(request)}`);
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

