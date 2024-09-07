const express = require('express');
const Tone = require('tone');
const tf = require('@tensorflow/tfjs');

const app = express();
const port = 8080;

app.use(express.static('public'));

app.get('/generate-melody', async (req, res) => {
  const melody = await generateMelody();
  res.json({ melody });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server běží na http://0.0.0.0:${port}`);
});

async function generateMelody() {
  // Jednoduchý model pro generování melodie
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 8, inputShape: [4], activation: 'relu' }));
  model.add(tf.layers.dense({ units: 4, activation: 'softmax' }));

  // Generování náhodné melodie
  const input = tf.randomNormal([1, 4]);
  const prediction = model.predict(input);
  const melody = await prediction.data();

  return Array.from(melody).map(note => Math.floor(note * 100));
}