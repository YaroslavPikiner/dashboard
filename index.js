const express = require('express')
const path = require('path');
const exphbs = require('express-handlebars');


const app = express();

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine )
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static('public'))

app.get('/', (req,res) => {
    res.render('index.hbs');
})

app.get('/about', (req,res) => {
    res.render('about.hbs');
})

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log("Server is running")
})