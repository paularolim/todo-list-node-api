/* eslint-disable no-console */
import express, { Request, Response } from 'express';

const port = process.env.PORT || 3000;

const app = express();

app.get('/api', (request: Request, response: Response) => {
  console.log('GET /api');

  return response.json({
    name: 'Todo List',
    version: 'v1.0.0',
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
