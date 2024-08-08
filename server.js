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
httpServer.listen(80, () => console.log('HTTP Server running on port 80'));
httpsServer.listen(443, () => console.log('HTTPS Server running on port 443'));
