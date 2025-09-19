import express from 'express'
import cors from 'cors'

import type { Request, Response } from 'express';

import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();


app.use(cors)

app.get('/', (req: Request, res: Response) => {
    res.send('App is running');
})

app.listen(3000, () => {
    console.log(`App is runnning on port : ${port}`)
})