import express from 'express';
import cors from 'cors'

import authRouter from './routes/authRoute.js'

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter)

app.get('/', (req, res) => {
  res.send('Hello World');
});

export default app;
