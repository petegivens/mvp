const express = require('express');
const browserify = require('browserify-middleware');
const path = require('path');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bodyParser = require('body-parser');
const db = mongoose.connect('mongodb://localhost:27017/app', {
  useMongoClient: true
});
const app = express();
app.use(bodyParser.json());

// Call to Browserify bundler, which transpiles all .jsx and serves all js files
// to index.html in a single bundle.js file
app.get('/bundle.js', browserify('./app.js', {
  transform: [ [ require('babelify'), {presets: ['es2015', 'react'] } ] ]
}));

// Serve static client files
app.use(express.static('client'));

////////////////////////////////////////////////////////////////////////////////
// Mongoose Models
////////////////////////////////////////////////////////////////////////////////

const userSchema = new Schema({
  username: String
});

const User = mongoose.model('User', userSchema);

const itemSchema = new Schema({
  description: String,
  quantity: Number,
  seller: String,
  type: String,
  comments: String
});

const Item = mongoose.model('Item', itemSchema);

////////////////////////////////////////////////////////////////////////////////
// Routes
////////////////////////////////////////////////////////////////////////////////
// Test Route:
app.get('/items', (req, res) => {
  Item.find({}, (err, data) => {
    res.json(data);
  });
});

app.post('/items', (req, res) => {
  var newItem = new Item({
    description: req.body.description,
    quantity: req.body.quantity,
    seller: req.body.seller,
    type: req.body.type,
    comments: req.body.comments
  });
  newItem.save().then( (newItem) => {
    res.json(newItem);
  });
})

////////////////////////////////////////////////////////////////////////////////
// Fire up the server...
////////////////////////////////////////////////////////////////////////////////
app.listen(3000, () => {
  console.log('Server listening on port 3000...');
})
