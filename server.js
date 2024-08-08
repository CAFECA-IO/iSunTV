/* create stastic server with express and public folder, listen with http 80 port and https 443 port */
const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();
const httpServer = http.createServer(app);
const httpsServer = https.createServer({
  key: fs.readFileSync(path.join(__dirname, 'cert', 'server.key')),
  cert: fs.readFileSync(path.join(__dirname, 'cert', 'server.cert')),
}, app);

app.use(express.static(path.join(__dirname, 'public')));
