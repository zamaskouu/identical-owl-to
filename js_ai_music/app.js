const express = require('express');
const Tone = require('tone');
const tf = require('@tensorflow/tfjs');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Vítejte v AI Music projektu!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server běží na http://0.0.0.0:${port}`);
});

// Zde budete implementovat vaši AI hudební logiku s Tone.js a TensorFlow.js