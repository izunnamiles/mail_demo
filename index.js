const express = require('express');
const app = express();
const { urlencoded } = require('express');
const mail = require('./mail');


app.use(express.json());
app.use(urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Welcome to Test mail app')
});
app.get('/mail/:email', (req, res) => {
  let output = '<p>Hello,</p>'
  output += '<p>Hope you are enjoying your test experience,</p>'
  output += '<p>regards,</p>'
  mail(req.params.email,'Welcome to Test App',output)
  res.send(`an email was sent to ${req.params.email}`)
});

//comment during testing
app.listen(process.env.PORT || '3000', () => {
  console.log(`Server is running on port: ${process.env.PORT || '3000'}`);
});

module.exports = app