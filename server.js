const express = require('express');
const mongoose = require('mongoose');
const infoRouter = require('./server/routes/info-routes');
const rentCarRouter = require('./server/routes/rentCar-routes');
const exportRents = require('./server/routes/exportData-routes')

const auth = require('./server/routes/auth-routes');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const authRequiredRole = require('./server/middleware/authRequiredRole')
const authVar = require('./server/middleware/authVar')
const userRoutes = require('./server/controllers/currentUser-controller');
const getDrivers = require('./server/controllers/getDrivers-controller')
require('dotenv').config();
const app = express();

const URL="mongodb+srv://mrvanya383:xGlhQRdFydXRVfcs@ungs.gl60b.mongodb.net/UNGS_DBS"
const PORT = 3000;

app.use(
    session({
        secret: 'idksecret',
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            mongoUrl: URL,
        }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24,
            httpOnly: true,
            sameSite: 'lax',
            secure: false,
        },
    })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(auth);
app.use(authVar);
app.use(getDrivers);
app.use(userRoutes);
app.use(infoRouter);
app.use(exportRents);
app.use(rentCarRouter);

mongoose
    .connect(URL)
    .then((res) => console.log('Connected to MongoDB'))
    .catch((err) => console.log(`DB connection error: ${err}`));

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`listening port ${PORT}`);
});

app.use('/assets', express.static(path.join(__dirname, 'assets')));  


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/news', authRequiredRole(['admin', 'newsCreator', 'user']), (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/news.html'));
});

app.get('/createNews', authRequiredRole(['admin', 'newsCreator']), (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/createNews.html'));
});

app.get('/orgStructure', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/orgStructure.html'));
});

app.get('/carBooking', authRequiredRole(['admin', 'newsCreator', 'user']), (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/carBooking.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/login.html'));
});
