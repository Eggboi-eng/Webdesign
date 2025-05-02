const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/api/images', (req, res) => {
  res.json([
    { filename: 'dihydroxylation-OsO4.jpg', alt: 'Dihydroxylation' },
    { filename: 'kmno4hot.jpg', alt: 'Cleavage with KMnO4' }
  ]);
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});


