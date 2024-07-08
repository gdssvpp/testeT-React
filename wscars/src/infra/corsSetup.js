const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'https://wscars.vercel.app',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));


app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});