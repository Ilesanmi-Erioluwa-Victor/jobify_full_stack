import express from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

process.env.NODE_ENV === 'development' ? app.use(morgan('dev')) : null;

app.use(express.json());

app.get('/', (req, res, next) => {
  res.send('Hello world');
});

app.post('/', (req, res, next) => {
  console.log(req);
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log('server running on :', PORT);
});
