// import MAIN function from app javascript
// import { function_name } from './path/to/JS/file'
import { getDestinationData
        ,initSearchBtn 
        ,postData 
        } from './js/app'

import { getWeatherData } from './js/weather'

import { mergeObjects } from './js/weather'

import { saveTripData
        ,getTripData
        ,clearTripData } from './js/storage'

//import SCSS files

document.onreadystatechange = () => {
    if (document.readyState == 'interactive'){
        initSearchBtn();
    }
}

export { 
        getDestinationData
        , getWeatherData
        , postData
        , mergeObjects
        , saveTripData
        , getTripData
        , clearTripData
    } 

