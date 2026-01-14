const express = require('express');
const cors = require('cors');
const { get } = require('node:http');
const app = express();
const port = 3000;

// Datos de ejemplo que se devolverán en formato JSON
let data = [
  { label: 'Apple Watch', value: 10 },
  { label: 'Samsung Frame', value: 5 },
  { label: 'Google Nest', value: 100 },
  { label: 'Mens T-shirt', value: 200 },
  { label: 'Mens-shorts', value: 200 },
  { label: 'Womans T-shirt', value: 200 },
  { label: 'Pillow', value: 20 },
  { label: 'Towels', value: 20 },
  { label: 'Microfiber Pillow', value: 20 },
  { label: 'Soap', value: 50 },
  { label: 'Irish Spring', value: 50 },
  { label: 'NIVEA', value: 50 },
  { label: 'LEGO', value: 30 },
  { label: 'Silverstone', value: 30 },
  { label: 'Chinise Horse', value: 30 }
];

app.use(cors()); // Esto habilita CORS para todas las rutas
// Ruta para obtener los datos en formato JSON
app.get('/api/data', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});