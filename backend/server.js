const queryString = require('query-string');
const express = require('express');
const app = express();

const items = [
  {
    id: '001',
    image:
      'https://www.herotic.life/uploads/1/2/1/8/121808125/s498120939118584775_p37_i8_w4267.jpeg?width=160',
    title: 'Herotic Mølla Beanie Black',
    price: 399,
    currency: 'kr'
  },
  {
    id: '002',
    image:
      'https://www.herotic.life/uploads/1/2/1/8/121808125/s498120939118584775_p36_i13_w4608.jpeg?width=160',
    title: 'Herotic Mølla Beanie Navy',
    price: 399,
    currency: 'kr'
  },
  {
    id: '003',
    image:
      'https://www.herotic.life/uploads/1/2/1/8/121808125/s498120939118584775_p34_i1_w2354.jpeg?width=160',
    title: 'Herotic Daddy Cap Ochre',
    price: 499,
    currency: 'kr'
  },
  {
    id: '004',
    image:
      'https://www.herotic.life/uploads/1/2/1/8/121808125/s498120939118584775_p19_i18_w160.jpeg',
    title: 'Herotic Classic White Hood *Glow in the dark*',
    price: 799,
    currency: 'kr'
  }
];

app.get('/items', (req, res) => {
  res.json(items);
});

app.get('/items/:id', (req, res) => {
  const productId = req.params.id;
  const result = items.filter((item) => item.id === productId);
  res.json(result[0]);
});

app.get('/cart', (req, res) => {
  const prodId = [].concat(
    queryString.parse(`id=${req.query.id}`, {
      arrayFormat: 'comma'
    }).id
  );

  const result = prodId
    .map((id) => items.find((item) => item.id === id))
    .filter(Boolean);
  res.json(result);
});

const port = 3001;

app.listen(port, () => console.log(`Server listening on port ${port}`));
