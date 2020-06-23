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
const projectData = {};

// Callback function to serve homepage
app.get('/destination', (req, res) => {
    // !!!
    console.log('... app.get : req.body = ' + JSON.stringify(req.body));
    res.sendFile(path.join(__dirname + "../../../dist/index.html"))
});

// Callback function to serve returned data
app.get('/all', (req, res) =>{
    res.send(projectData);
})

// Post Route
app.post('/destination', addInfo);

function addInfo(req, res){
    // !!!
    console.log('... app.post() :: addInfo : req.body = ' + JSON.stringify(req.body));

    Object.assign(projectData, req.body);

    // !!!
    console.log('... app.post() :: addInfo : projectData = ' + JSON.stringify(projectData));

    res.send(projectData);
}

module.exports = app;