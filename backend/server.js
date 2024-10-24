import express from 'express';
import { createServer } from 'http';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
const server = createServer(app);

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;

// Servir arquivos estáticos da pasta 'frontend/dist'
app.use(express.static(join(__dirname, '../frontend/dist')));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '../frontend/dist', 'index.html'));
});

server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});