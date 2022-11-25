import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config({ path: './config.env' });

const mongoURL = process.env.DATABASE;

mongoose.connect(mongoURL, () => {
  console.log('Connected to Database');
});

import app from './app.js';

const port = process.env.PORT;

app.listen(port, () => console.log(`Server started on port ${port}`));
