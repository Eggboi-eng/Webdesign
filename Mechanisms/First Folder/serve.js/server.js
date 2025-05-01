// server.js
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.static('public')); // serve static files (like images)
app.use(express.json());

const images = [
  { filename: 'dihydroxylation-OsO4.jpg', alt: 'Dihydroxylation with OsO4' },
  { filename: 'kmno4hot.jpg', alt: 'Cleavage with KMnO4' }
];

app.get('/api/images', (req, res) => {
  res.json(images);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));