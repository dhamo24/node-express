import express from 'express';
import axios from 'axios';
import path from 'path';
import { fileURLToPath } from 'url'; 

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/api/data', async (req, res) => {
  try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      res.json(response.data);
  } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).send('Error fetching data');
  }
});

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
