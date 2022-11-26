import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import showsRouter from './routes/showsRoutes.js';
import authRouter from './routes/authRoute.js';
import videoRouter from './routes/videosRoutes.js';

import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

import globalErrorHandler from './controllers/errorController.js';

const app = express();

// Requests logging
app.use(morgan('dev'));

app.use(cors());
app.use(express.json());

app.use(express.static(__dirname + 'public'));

app.use('/api/auth', authRouter);
app.use('/api/shows', showsRouter);
app.use('/api/videos', videoRouter);

app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: 'Route not found',
  });
});

// Handles all the errors
app.use(globalErrorHandler);

export default app;
