import express from 'express';
import apiRouter from './router/Router.js';

const app = express();
app.use(express.json());
app.use(apiRouter);

export default app;
