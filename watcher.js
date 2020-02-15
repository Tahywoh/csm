const express = require ('express')
const app = express()
const hbs = require('express-handlebars')

const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => {
  res.render('./index')
})

// app.set('view engine', 'html');

//load middle ware for handlebares

//handlebars middlewares.
app.engine('.hbs', hbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.use(express.static(__dirname))

app.use('/public', express.static('./public'))

const port = 5050
app.listen(port, () => {
  console.log(`Your app is listening to port: ${port}`)
})