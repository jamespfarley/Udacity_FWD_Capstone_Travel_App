import { json } from "body-parser";

const tripHistory = window.localStorage;
const key = 'trip' + tripHistory.length;

export const saveTripData = () => {

    const savedData = {};


    const elementList = document.querySelectorAll('.output');

    for ( let i = 0; i < elementList.length; i++ ){
        if ( elementList[i].id == 'image'){
            savedData[elementList[i].id] = elementList[i].src;    
        } else {
            savedData[elementList[i].id] = elementList[i].innerHTML;
        }
    }

    console.log(savedData);
    console.log('... key = ' + key);

    tripHistory.setItem(JSON.stringify(key), JSON.stringify(savedData));

}

export const getTripData = () => {

    let tripJSON = tripHistory.getItem(JSON.stringify(key));
    let tripObj = JSON.parse(tripJSON);

    document.getElementById('tripDate').innerHTML = tripObj.tripDate;
    document.getElementById('city').innerHTML = tripObj.city;
    document.getElementById('daysTilDepart').innerHTML = tripObj.daysTilDepart;
    document.getElementById('city_lng').innerHTML = tripObj.city_lng;
    document.getElementById('city_lat').innerHTML = tripObj.city_lat;
    document.getElementById('image').src = tripObj.image;
  
}

export const clearTripData = () => {

    console.log(`tripHistory count before clear = ${tripHistory.length}`);

    tripHistory.clear();

    console.log(`tripHistory count after clear = ${tripHistory.length}`);

    deleteItinerary();
}

export const deleteItinerary = () => {

    document.getElementById('city').innerHTML = "";
    document.getElementById('city_lat').innerHTML = "";
    document.getElementById('city_lng').innerHTML = "";
    document.getElementById('country').innerHTML = "";
    document.getElementById('daysTilDepart').innerHTML = "";
    document.getElementById('tripDate').innerHTML = "";
    document.getElementById('lo_temp').innerHTML = "";
    document.getElementById('hi_temp').innerHTML = "";
    document.getElementById('currForecast').innerHTML = "";
    document.getElementById('forecast').innerHTML = "";
}