// import MAIN function from app javascript
// import { function_name } from './path/to/JS/file'
import { getDestinationData
        ,getCityData
        ,getDaysTilDeparture
        ,init
        ,postData 
        } from './js/app'

import { getWeatherData } from './js/weather'

import { mergeObjects } from './js/weather'

import { saveTripData
        ,getTripData
        ,clearTripData
        ,deleteItinerary } from './js/storage'

import { UserException } from './js/exception'

//import SCSS files
import './styles/base.scss'
import './styles/header.scss'
import './styles/search.scss'
import './styles/itinerary.scss'

document.onreadystatechange = () => {
    if (document.readyState == 'interactive'){
        init();
    }
}

export { 
        getDestinationData
        , getCityData
        , getDaysTilDeparture
        , getWeatherData
        , postData
        , mergeObjects
        , saveTripData
        , getTripData
        , clearTripData
        , deleteItinerary
        , UserException
    } 

