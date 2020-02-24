import express from 'express';

export const userRouter = express.Router();

userRouter.get('/', (req, res) => res.end('user index'));
userRouter.get('/edit', (req, res) => res.end('user edit'));
userRouter.get('/password', (req, res) => res.end('user password'));
