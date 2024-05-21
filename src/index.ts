import express, { Request, Response } from 'express';
import axios from 'axios';

const app = express();
const port = process.env.PORT || 3000;

app.get('/api/data', async (req: Request, res: Response) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
});

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Welcome to the Home Page</h1>');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
