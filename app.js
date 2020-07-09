// this is the old syntax
// const express = require('express');
// const resHandler = require('./response-handler');

// this is the new syntax
import express from 'express';
import { resHandler } from './response-handler.js';

// to switch to the new syntax you have to add 
// "type": "module" on your package.json file
// as you can see at line number 6

const app = express();

app.get('/', resHandler);

app.listen(3000);

// in order to run this app, node --experimental-modules app.js