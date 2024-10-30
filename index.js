const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('Yeah baby send me those sweet sweet callbacks I\'m ready');
});
app.get('/moutiaille', (req, res) => {
  res.send('Allez Lens et chuche mes prones!');
});

app.put('/shippings/:shippingId/containers/:containerId/track-pickup', (req, res, next) => {
  console.log(`Got a callback from DktPickup on /shippings/${req.params.shippingId}/containers/${req.params.containerId}/track-pickup`);
  console.log(`Payload\n ${JSON.stringify(req.body, null, 2)}`);
  res.send(`Got it! shippingId: ${req.params.shippingId}, containerId: ${req.params.containerId}`);
});

app.listen(port, () => {
  console.log(`Dkt Pickup test app listening on port ${port}`)
});
