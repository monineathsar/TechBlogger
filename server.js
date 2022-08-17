// dependencies
require('dotenv').config();
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const expsesh = require('express-session');


const SequelizeStore = require('connect-session-sequelize')(expsesh.Store);

const sequelize = require('./config/connection');

// routes global variables
const routes = require('');

// handlebars init

const hbs = exphbs.create({});
const viewsPath = path.join(__dirname, './views');


// express session settings

const sessionSettings = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    // maxAge: sesh_expiration_time_millisec,
    saveUninitialized: false,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

const app = express();

const PORT = process.env.PORT || 3001;

// handlebars template engine

app.engine('handlebars', hbs.engine);
app.set('views', viewsPath);
app.set('view engine', 'handlebars');


// middlewares

app.use(express.static('public'));
app.use(expsesh(sessionSettings));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes for 
app.use(routes);

// server listener + sequelize sync

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Go to http://localhost:3001/'));
});