var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '1803021@ritindia.edu',
    pass: 'dhruvraj20'
  }
});

var mailOptions = {
  from: '1803021@ritindia.edu',
  to: 'anuvpatil203@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'HI from other Anuradha'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});