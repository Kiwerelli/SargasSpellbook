import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import spellbookRoutes from './routes/spellbook.js'

import * as dotenv from 'dotenv'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors());
app.use(bodyParser.json());


app.use('/spellbook', spellbookRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})