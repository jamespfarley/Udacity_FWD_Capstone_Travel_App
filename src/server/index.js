// Enable use of environment variable
const dotenv = require('dotenv');
dotenv.config();

// Express to run server and routes
const express = require('express');

// Start a server instance
const app = express();

// Dependencies
// Read data from POST requests on the server
const bodyParser = require('body-parser');

// Middleware
// Configure Express to user body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// CORS for cross-origin allowance
const cors = require('cors');
app.use(cors());

// Initialize project root folder
app.use(express.static('dist'));

const path = require('path');

// Setup empty JS object to act as endpoint for all routes
const destinationData = {};

// To make HTTP calls
const request = require('request');

// Callback function to serve homepage
app.get('/destination', (req, res) => {
    // !!!
    console.log('... app.get : req.body = ' + JSON.stringify(req.body));
    res.sendFile(path.join(__dirname + "../../../dist/index.html"))
});


// Callback function to serve returned data
app.get('/all', (req, res) =>{
    res.send(destinationData);
})

// Post Route
app.post('/destination', addInfo);
function addInfo(req, res){
    // !!!
    console.log('... app.post() :: addInfo : req.body = ' + JSON.stringify(req.body));

    Object.assign(destinationData, req.body);

    // !!!
    console.log('... app.post() :: addInfo : destinationData = ' + JSON.stringify(destinationData));

    res.send(destinationData);
}

/*** Create proxy-server for pixabay ******************************************************/

const imgParam = {};

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/pixabay', (req, res) => {
    let pixabayURL = "https://pixabay.com/api/?key="
                     + process.env.PIXBY_API_KEY
                     + "&lang=en&category=travel&image_type=photo&orientation=vertical&q="
                     + imgParam.city;

    console.log(`... index.js : /pixabay :: url = ${pixabayURL}`);

    request({url: pixabayURL}, (error, response, body) =>{
        if (error || response.statusCode !== 200) {
            return res.status(500).json({type: 'error', message: error.message});
        }

        res.json(JSON.parse(body));
    })
})

app.post('/pixabay', (req, res) => {
    
    Object.assign(imgParam, req.body);
    res.send(imgParam);
})

/******************************************************************************************/


module.exports = app;