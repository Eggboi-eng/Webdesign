const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static('public')); // Serve static files from the 'public' folder

// Serve index.html when accessing the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // Ensure it points to the right file
});

app.get('/api/images', (req, res) => {
  const images = [
    { filename: 'dihydroxilation-OsO4.jpg', alt: 'Dihydroxylation' },
    { filename: 'kmno4hot.jpg', alt: 'Cleavage with KMnO4' }
  ];
  res.json(images);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

