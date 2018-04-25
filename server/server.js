//Initiate App
const express = require('express');
const app = express();

//Require Dependencies
// const path = require('path');
// const bodyParser = require('body-parser');
// const methodOverride = require('method-override');
// const session = require('express-session');
// const passport = require('passport');
//
// require('dotenv').config();

//Set Middlewares
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(methodOverride('_method'));
// app.use(session({
//   secret: process.env.SECRET_KEY,
//   resave: false,
//   saveUninitialized: true
// }));
// app.use(passport.initialize());
// app.use(passport.session());

//Set Static folder
// app.use(express.static('public'));

//Set View Engine
// app.set('views', path.join(__dirname, '/views'));
// app.set('view engine', 'ejs');

//Set App to port
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//Routes
app.get('/hello', (req, res) => {
  // res.send('Express App');
  const message = {
    message: "Hello from the server!"
  };
  res.json(message);
});

// app.get('*', (req, res) => {
//   const err = new Error('Not found!');
//   //send response
//   // res.status(404).send(err);
//   // console.log(err);
//   res.render('error', {
//     message: 'Page not found!'
//   })
// });
