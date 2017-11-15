/*
Nodemailer module makes it easy to send emails from your computer: npm installer nodemailer
 */

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth : {
		user: 'salehinrafi@gmail.com',
		pass: 'Ziema52375724'
	}
});

var mailOptions = {
	from: 'salehinrafi@gmail.com',
	to : 'salehin_434202@yahoo.com, salehinrafi@gmail.com',
	subject: 'Sending Email Using Node.js',
	html: '<h1>Welcome</h1><p>That was easy!</p>',
	//text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});