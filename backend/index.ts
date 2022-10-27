var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require('./models/user');
var cors = require('cors');

var app = express();

var db = mongoose.connect('mongodb://localhost:27017/quiz', function (err, res) {
    if (err) {
        console.log("there is a connection problem");
    }
    else {
        console.log("connection successful");
    }
});

app.use(cors());

app.set('port', process.env.port || 3000);

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("<h1>hello</h2>")
});

app.post('/register', (req, res) => {
    console.log(req.body);

    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    // var phone_no = req.body.phone_no;
    var email = req.body.email;
    var password = req.body.password;
    var conf_pwd = req.body.conf_pwd;

    var user = new User();
    user.firstname = firstname;
    user.lastname = lastname;
    // user.phone_no = phone_no;
    user.email = email;
    user.password = password;
    user.conf_pwd = conf_pwd;

    user.save((err, result) => {
        if (err) {
            console.log("there is an error in adding the user in db");
            res.send({success: "Failed to add user!", status: 500});
        }
        res.send({success: "Successfully added new user!", status: 200});
    });
});

app.listen(app.get('port'), function (err, res) {
    console.log("server is running on port:", app.get('port'));
});