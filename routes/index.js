var express = require('express');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'add email @ gmail.com',
        pass: 'Whatever the passoword is'
    }
});

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '/Home page' });
});

router.get('/success', function(req, res, next) {
  res.render('success', { title: '/Success!' });
});

router.get('/newmessage', function(req, res) {
    res.render('newmessage', { title: 'New Message' });
});

router.post('/sendmessage', function(req, res) {
  var userEmail = req.body.useremail;
  var bodyEmail = req.body.message;
  transporter.sendMail({
    from: 'professoranonymousfeedback@gmail.com',
    to: userEmail,
    subject: 'To students an Anonymous Emil form professor',
    text: bodyEmail
  })  
  res.redirect("success");
});

module.exports = router;
