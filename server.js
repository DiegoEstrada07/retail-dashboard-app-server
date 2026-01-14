const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors()); // Middleware para CORS
app.use(express.json()); // Para parsear JSON
app.use(express.static('public')); // Si tienes archivos estáticos en 'public'

// Ruta de ejemplo para API
app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: '¡Hola desde el backend!' });
});

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});