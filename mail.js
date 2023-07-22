var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pouyagonbadi73@gmail.com',
    pass: 'ymsmxpdytgawwgau'
  }
});

var mailOptions = {
  from: 'pouyagonbadi73@gmail.com',
  to: 'pouyagonbadi@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'Salam pouya'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});