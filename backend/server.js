const express = require('express'); ;

const items = [
  {
    id: '001',
    image:
      'https://www.herotic.life/uploads/1/2/1/8/121808125/s498120939118584775_p37_i8_w4267.jpeg?width=160',
    title: 'Herotic Mølla Beanie Black',
    price: '399,-',
    currency: 'kr'
  }
];

const app = express();
app.get('/items', (req, res) => {
  res.json(items);
});

const port = 3001;

app.listen(port, () => console.log(`Server listening on port ${port}`));
