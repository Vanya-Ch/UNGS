const express = require('express');
const mongoose = require('mongoose');
const infoRouter = require('./server/routes/info-routes');
const rentCarRouter = require('./server/routes/rentCar-routes');

const auth = require('./server/routes/auth-routes');
const path = require('path');
const session = require('express-session');
const authRequiredRole = require('./server/middleware/authRequiredRole')
const authVar = require('./server/middleware/authVar')


const PORT = 3000;
const URL = "mongodb://localhost:27017/UNGS_DBS";

const app = express();

// Додаємо підтримку статичних файлів
app.use('/assets', express.static(path.join(__dirname, 'assets')));  // Налаштовуємо статичні файли з папки 'assets'
app.use('/pages', express.static(path.join(__dirname, 'pages')));  // Налаштовуємо статичні файли з папки 'pages'

app.use(session({
    secret: 'idksecret',
    resave: false,
    saveUninitialized: false,
}))

app.use(authVar);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(auth);
app.use(infoRouter);
app.use(rentCarRouter);

mongoose
    .connect(URL)
    .then((res) => console.log('Connected to MongoDB'))
    .catch((err) => console.log(`DB connection error: ${err}`));

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`listening port ${PORT}`);
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); 
});


app.get('/news',authRequiredRole(['admin', 'newsCreator', 'user']), (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/news.html'));  
});

app.get('/createNews',authRequiredRole(['admin', 'newsCreator']), (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/createNews.html'));  
});

app.get('/rentCar',authRequiredRole(['admin', 'newsCreator', 'user']), (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/rentCar.html'));  
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/login.html')); 
});