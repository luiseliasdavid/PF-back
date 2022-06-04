const nodemailer = require('nodemailer');
const { MAILER_SERVICE, MAILER_USER, MAILER_PASS } = process.env;
const { purchase } = require('./emailerTypes')


const emailer =  ( email, subject, type ) => {

    var transporter = nodemailer.createTransport({

        service: MAILER_SERVICE,
        auth: {
            user: MAILER_USER,
            pass: MAILER_PASS
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const messageToSend = purchase(email, type) ;


    let mailOptions = {
        from: MAILER_USER,
        to: email,
        subject: subject,
        html: messageToSend
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.status(500).json({ msg: error });
        } else {
            res.status(200).json({ msg: info.response });
        }
    });
}




module.exports = emailer 



