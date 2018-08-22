var express = require('express');
var bodyParser = require("body-parser");
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const courses = [
  {
    name: 'JS course',
    time: '2 hour 28 min',
    descrition: 'bla-bla-bla',
    date: '1.12.2018'
  },
  {
    name: 'HTML course',
    time: '1 hour 10 min',
    descrition: 'bla-bla-bla',
    date: '2.12.2018'
  },
  {
    name: 'CSS course',
    time: '0 hour 20 min',
    descrition: 'bla-bla-bla',
    date: '3.11.2018'
  },
]

const token = 'security'

const users = {
  '1@mail.com': { password: '123', name: 'Max'}
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/login', function (req, res) {
  const { username, password } = req.body;
  if (users[username] && users[username].password === password){
    res.send({ ...users[username], password: null, token });
  } else {
    res.statusCode = 401;
    res.send({ message: 'Invalid credential' });
  }
});

app.get('/courses', function (req, res) {
  const tokenFromUI = req.query;
  if (tokenFromUI.token === token){
    res.send(courses);
  } else {
    res.statusCode = 401;
    res.send({ message: 'Invalid credential' });
  }
});

app.listen(3000, function () {
  console.log('Server listening on port 3000!');
});
