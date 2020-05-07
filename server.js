/* Empty JS object to act as endpoint for all routes */
projectData = {};

//Express to run server and routes
const express = require('express');

//Start up an instance of app
const app = express();

//Dependencies

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

/*Optional Cross origin allowance
const cors = require('cors');
app.use(cors());
*/

//Initialize the main project folder
app.use(express.static('WebsiteTest'));


const port = 8000;
//spin up the server
const server = app.listen(port, listener);
//const server = app.listen(port,()=> {console.log(`running on localhost: ${port}`)});

//Callback
function listener() {
  console.log('server is running');
  console.log(`running on localhost: ${port}`);
};



/*
*
*
----ES6 version----
*
*
*

//Empty JS object to act as endpoint for all routes 
projectData = {};

//Express to run server and routes
import express, {
  static
} from 'express';

//Start up an instance of app
const app = express();

//Dependencies

import {
  urlencoded,
  json
} from 'body-parser';
app.use(urlencoded({
  extended: false
}));
app.use(json());

//Cross origin allowance
app.require('cors');
app.use(corse());

//Initialize the main project folder
app.use(static('WebsiteTest'));


const port = 8000;
//spin up the server
const server = app.listener(port, listening);
//const server = app.listen(port,()=> {console.log(`running on localhost: ${port}`)});

//Callback
function listening() {
  console.log('server is running');
  console.log(`running on localhost: ${port}`);
};

*/