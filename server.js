// dependencies
require('dotenv').config();
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const expsesh = require('express-session');
const routes = require('./controllers');

const SequelizeStore = require('connect-session-sequelize')(expsesh.Store);
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

// handlebars init

const hbs = exphbs.create({});
const viewsPath = path.join(__dirname, './views');

hbs.handlebars.registerHelper('dateFormat', function (dateTime) {
    if (!dateTime) {
        return "N/A";
    }
    return new Date(dateTime).toLocaleDateString();
});
hbs.handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {
    switch (operator) {
        case '==':
            return (v1 == v2) ? options.fn(this) : options.inverse(this);
        case '===':
            return (v1 === v2) ? options.fn(this) : options.inverse(this);
        case '!=':
            return (v1 != v2) ? options.fn(this) : options.inverse(this);
        case '!==':
            return (v1 !== v2) ? options.fn(this) : options.inverse(this);
        case '<':
            return (v1 < v2) ? options.fn(this) : options.inverse(this);
        case '<=':
            return (v1 <= v2) ? options.fn(this) : options.inverse(this);
        case '>':
            return (v1 > v2) ? options.fn(this) : options.inverse(this);
        case '>=':
            return (v1 >= v2) ? options.fn(this) : options.inverse(this);
        case '&&':
            return (v1 && v2) ? options.fn(this) : options.inverse(this);
        case '||':
            return (v1 || v2) ? options.fn(this) : options.inverse(this);
        default:
            return options.inverse(this);
    }
});

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

// handlebars template engine

app.engine('handlebars', hbs.engine);
app.set('views', viewsPath);
app.set('view engine', 'handlebars');


// middlewares

app.use(express.static(path.join(__dirname, 'public')));
app.use(expsesh(sessionSettings));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes for 
app.use(routes);

// server listener + sequelize sync

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Go to http://localhost:3001/'));
});