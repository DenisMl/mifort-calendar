const express = require('express');
const http = require('http');
const config = require('./config');
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
// const morgan = require('morgan');
// const mongoose = require('./libs/mongoose');
const mainRoutes = require('./routes/mainRoutes');
const appRoutes = require('./routes/appRoutes');

// const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);
// const mongoose_store = new MongoStore({mongooseConnection: mongoose.connection});

const app = express();

// app.use(morgan('dev'));
// app.use(cookieParser());

// app.use(session({
//     secret: config.get('session:secret'),
//     key: config.get('session:key'),
//     cookie: config.get('session:cookie'),
//     saveUninitialized: false,
//     resave: false,
//     store: mongoose_store
// }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

app.use('/', mainRoutes);
app.use('/app', appRoutes);

http.createServer(app).listen(config.get('port'), function() {
    console.log('Express server listening on port ' + config.get('port'));
});
