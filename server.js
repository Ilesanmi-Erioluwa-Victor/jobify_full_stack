import express from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res, next) => {
  res.send('Hello world');
});

app.post('/', (req, res, next) => {
  console.log(req);
});

const PORT = 8080;
app.listen(PORT || 8080, () => {
  console.log('server running on :', PORT);
});
