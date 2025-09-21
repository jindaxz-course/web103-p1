import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import venues from './data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'html');
app.engine('html', (filePath, options, callback) => {
  import('fs').then(fs => {
    fs.default.readFile(filePath, 'utf-8', (err, content) => {
      if (err) return callback(err);

      const rendered = content.replace(/{{(\w+)}}/g, (match, key) => {
        return options[key] || '';
      });

      return callback(null, rendered);
    });
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

app.get('/api/venues', (req, res) => {
  res.json(venues);
});

app.get('/venues/:id', (req, res) => {
  const venue = venues.find(v => v.id === req.params.id);

  if (!venue) {
    return res.status(404).sendFile(path.join(__dirname, '..', 'views', '404.html'));
  }

  res.sendFile(path.join(__dirname, '..', 'views', 'detail.html'));
});

app.get('/api/venues/:id', (req, res) => {
  const venue = venues.find(v => v.id === req.params.id);

  if (!venue) {
    return res.status(404).json({ error: 'Venue not found' });
  }

  res.json(venue);
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '..', 'views', '404.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});