var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var session = require('express-session');
var config = require('./config.json');
// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;

// var mongoose = require('mongoose');
// var School = require('./models/School');
// var User = require('./models/User');

// var subjectCtrl = require('./controllers/subjectCtrl');
// var userCtrl = require('./controllers/userCtrl');
// var schoolCtrl = require('./controllers/schoolCtrl');
// var emailVerifyCtrl = require('./controllers/emailVerifyCtrl');
// var emailCtrl = require('./controllers/emailCtrl');

// var alg = require('./data/saxon_alg.js');
// var geo = require('./data/saxon_geo.js');
// var alg2 = require('./data/saxon_alg2.js');

// var bcrypt = require('bcrypt');

// var nev = require('email-verification')(mongoose);
// var nodemailer = require("nodemailer");

var port = config.serverPort;
var corsOptions = {
    origin: 'http://localhost:' + 4200
};

var app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));
// app.use(express.static(__dirname + '/../public/'));
app.use(session({
    secret: config.sessionSecret,
    saveUninitialized: true,
    resave: true
}));
// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(new LocalStrategy(function(username, password, done) {
//     User.findOne({
//         username: username
//     }, function(err, user) {
//         if (err) {
//             return done(err);
//         }
//         if (!user) {
//             return done(null, false);
//         }
//         if (!bcrypt.compareSync(password, user.password)) {
//             return done(null, false)
//         }
//         return done(null, user);
//     });
// }));

// passport.serializeUser(function(user, done) {
//     done(null, {
//         _id: user._id,
//         school_id: user.school_id,
//         school_name: user.school_name,
//         school_city: user.school_city,
//         school_state: user.school_state,
//         username: user.username,
//         type: user.type,
//         email: user.email
//     });
// });

// passport.deserializeUser(function(id, done) {
//     User.findById(id, function(err, user) {
//         done(err, user);
//     });
// });

app.listen(port, function() {
    console.log('server running on port', port);
})

// mongoose.connect('mongodb://localhost:27017/saxon', function(err) {
//     if (err) throw err;
// });

app.get('/api', function(req, res, next) {
    res.send("You've successfully hit the node server!")
})