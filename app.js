require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);

app.get('/', (req, res) => {
  res.render('index');
});


// const PORT = process.env.PORT || 3000;
// const server = app.listen(3000, () => {
//   console.log(` welcome to my portfolio :))) `);
// });

const server = app.listen(3000, () => {
  console.log(` welcome to my portfolio :))) `);
});

module.exports = app;
