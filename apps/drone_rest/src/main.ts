/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import cors from 'cors';
import path from 'path';
import { formRouter } from './routes/form.routes';
import { errorHandler } from './middleware/error.middleware';


const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Routes
app.use('/api/form', formRouter);

// Error handling middleware
app.use(errorHandler);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

server.on('error', console.error);
