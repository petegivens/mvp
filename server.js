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
  name: String,
  email: String,
  password: String
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
app.get('/items', (req, res) => {
  Item.find({}, (err, data) => {
    res.json(data);
  });
});

app.post('/items', (req, res) => {
  var {description, quantity, seller, type, comments} = req.body;
  var newItem = new Item({ description, quantity, seller, type, comments });
  newItem.save().then( (newItem) => {
    res.json(newItem);
  });
});

app.post('/register', (req, res) => {
  var {name, email, password} = req.body;
  var newUser = new User({ name, email, password });
  newUser.save().then( (newUser) => {
    res.json(newUser);
  });
});

app.post('/login', (req, res) => {
  var {email, password} = req.body;
  User.find({email: email}).then( (user) => {
    if(password === req.body.password) {
      res.json(user);
    } else {
      console.log('Invalid password.');
    }
  })

})


////////////////////////////////////////////////////////////////////////////////
// Fire up the server...
////////////////////////////////////////////////////////////////////////////////
app.listen(3000, () => {
  console.log('Server listening on port 3000...');
})
