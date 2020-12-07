const config = require('config');
const http = require('http');

const express = require('./express');

async function start() {
  const app = express.init();

  return http.createServer(app).listen(config.port);
}

module.exports = start;
