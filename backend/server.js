const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST']
  }
});

// Servir arquivos estáticos do frontend
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Rota para a URL raiz
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

// Eventos de socket.io
// require('./sockets/gameEvents')(io);

server.listen(4000, () => {
  console.log('Server listening on port 4000');
});