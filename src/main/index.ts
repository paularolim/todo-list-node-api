/* eslint-disable no-console */
import express, { Request, Response } from 'express';
import { env } from 'process';

const port = 3000 || env.PORT;

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
