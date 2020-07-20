
// Validate city input
export const validateCity = (destination) => {

    let isValid = false;

    if ( destination === "" || /[0-9]|[!@#$%^&*()_\-+=:";\'<>?,./]/.test(destination)){

        document.getElementById("cityErrMsg").innerHTML = "Please enter a valid city ..."
        return isValid = false;

    } else {
        document.getElementById("cityErrMsg").innerHTML = "";
        return isValid;
    }

}

// Validate date input
export const validateDate = (date) => {

    let numDays = -1;

    if ( date === "" ){

        document.getElementById("dateErrMsg").innerHTML = "Please enter a departure date ..."
        return numDays;

    } else {

        // Validate future date
        let departureDate = new Intl.DateTimeFormat('en-US', {month:"2-digit", day:"2-digit", year:"numeric"}).format(new Date(date + 'T00:00:00'));
        let numDays = getDaysTilDeparture(departureDate);
        if ( numDays < 0 ){
    
            document.getElementById("dateErrMsg").innerHTML = "Please enter a future departure date ..."
            return numDays;

        } else {
            document.getElementById("dateErrMsg").innerHTML = "";
            return numDays;
        }
    }
}


// Get number of days until departure
const getDaysTilDeparture = (dateValue) => {

    let numDays = 0;

    const currentDate = new Date();

    let departureDate = new Date(dateValue) ;

    numDays = Math.trunc((departureDate.getTime() - currentDate.getTime()) / (1000*60*60*24));

    if ( numDays )

    return;
}