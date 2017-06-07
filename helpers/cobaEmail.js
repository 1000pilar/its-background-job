var CronJob = require('cron').CronJob
var kue = require('kue')
    , queue = kue.createQueue()
const nodemailer = require('nodemailer');
require('dotenv').config()

// let transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true, // secure:true for port 465, secure:false for port 587
//     auth: {
//         user: 'nunua7a8@gmail.com',
//         pass: 'nunuhana180390'
//     }
// });
//
// // setup email data with unicode symbols
// let mailOptions = {
//     from: '"Nugraha 👻" <nunua7a8@gmail.com>', // sender address
//     to: 'edimdendy@gmail.com', // list of receivers
//     subject: 'Hello ✔', // Subject line
//     text: 'Hello world ?', // plain text body
//     html: '<b>Hello world ?</b>' // html body
// };
//
// // send mail with defined transport object
// transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//         return console.log(error);
//     }
//     console.log('Message %s sent: %s', info.messageId, info.response);
// });

new CronJob('* * * * * *', function() {
  console.log('You will see this message every second');
}, null, true, 'America/Los_Angeles');
