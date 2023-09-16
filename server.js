import express from 'express';

const app = express();

app.use(express.json());



app.get('/', (req, res, next) => {
  res.send('Hello world');
});

const PORT = 8080;
app.listen(PORT || 8080, () => {
  console.log('server running on :', PORT);
});
