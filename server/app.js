import express from 'express';
import morgan from 'morgan';

import showsRouter from './routes/showsRoutes.js';

const app = express();

// development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('combined'));
}

app.use(express.json());

app.use('/api/shows', showsRouter);

export default app;
