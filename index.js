// Import dependencies
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// Import routes
const apiRoutes = require('./routes/routes');

// Configure bodyParser to handle post reqs
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

// Connect to Mongoose and set connection var
mongoose.connect(`${process.env.URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// Added check for DB connection
if (!db) console.log('Error connecting db');
else console.log('Db connected successfully');

const port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send(`Hello World`));

app.use('/api', apiRoutes);

app.listen(port, function() {
  console.log(`Running RestHub on port ${port}`);
});
