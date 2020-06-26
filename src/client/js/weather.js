
const weatherbitBaseURL = `https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WB_API_KEY}&lang=en&units=I&days=1`;

// Get weather data
export const getWeatherData = async (data) => {
    
            let URL = `${weatherbitBaseURL}&city=${data.geonames[0].name}&country=${data.geonames[0].countryCode}`;

            const response = await fetch(URL).catch( error => { console.log(`getWeatherData fetch() error: ${error}`)});
            try{
                const weatherData = await response.json();

                // !!!
                console.log('... weather.js : getWeatherData() :: weatherData =  ' + JSON.stringify(weatherData));

                return mergeObjects(data, weatherData);

            } catch (error) {
                console.error(`Error in getWeatherData() : ${error}`);
            }

}

export function mergeObjects( object1, object2){

    console.log('... mergeObjects() :: object1 = ' + JSON.stringify(object1) + ' ... object2 = ' + JSON.stringify(object2));

    let dataObj = {   ...object1
                    , ...object2 
                };

    console.log('... mergeObjects() :: dataObj = ' + JSON.stringify(dataObj));

    return dataObj;
}
