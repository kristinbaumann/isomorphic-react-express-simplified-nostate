import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../shared/App.js';
import template from './template';

const server = express();

server.use('/assets', express.static('assets'));

server.get('/', (req, res) => {
    const appString = ReactDOMServer.renderToString(<App />);
    res.send(template({
        appString
    }));
});

server.listen(8080, () => {
  console.log('Listening on port 8080...');
});
