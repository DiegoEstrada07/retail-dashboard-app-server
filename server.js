const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors()); // Middleware for CORS
app.use(express.json()); //JSON
app.use(express.static('public')); // static files in 'public'

app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: '¡Hola desde el backend!' });
});

app.listen(PORT, () => {
  console.log(`back end server listener http://localhost:${PORT}`);
});