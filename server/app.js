import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import showsRouter from './routes/showsRoutes.js';

import authRouter from './routes/authRoute.js';

const app = express();

// development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('combined'));
}

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/shows', showsRouter);

export default app;
