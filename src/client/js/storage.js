const locStorage = localStorage;

export const saveTripData = () => {

    const savedData = {};
    const idx = locStorage.length;

    const elementList = document.querySelectorAll('.output');

    for ( let i = 0; i < elementList.length; i++ ){
        if ( elementList[i].id == 'image'){
            savedData[elementList[i].id] = elementList[i].src;    
        } else {
            savedData[elementList[i].id] = elementList[i].innerText;
        }
    }

    locStorage.setItem(JSON.stringify(idx), JSON.stringify(savedData));

    for ( let j = 0; j < locStorage.length; j++ ){
        console.log(`... idx = ${j}`);
        console.log(JSON.parse(locStorage.getItem(JSON.stringify(j))));
    }
}

export const getTripData = () => {

    document.getElementById('tripDate').value = locStorage.getItem('tripDate');
    document.getElementById('city').value = locStorage.getItem('city');
    document.getElementById('country').value = locStorage.getItem('country');
    document.getElementById('city_lng').value = locStorage.getItem('city_lng');
    document.getElementById('city_lat').value = locStorage.getItem('city_lat');
    document.getElementById('image').src = locStorage.getItem('image');
   
}

export const clearTripData = () => {

    console.log(`locStorage count before clear = ${locStorage.length}`);

    locStorage.clear();

    console.log(`locStorage count after clear = ${locStorage.length}`);
}