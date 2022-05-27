const nodemailer = require('nodemailer');
const {MAILER_SERVICE, MAILER_USER, MAILER_PASS} = process.env;
const {purchase} = require('./emailerTypes')


const emailer = async (req, res) => {
    const { email, subject, message } = req.body;
    console.log(email, subject, message);

    var transporter = nodemailer.createTransport({
        
        service: MAILER_SERVICE,
        auth: {
          user: MAILER_USER,
          pass: MAILER_PASS
        },
        tls: {
            rejectUnauthorized: false}
      });

 const messageToSend = message==1? purchase(email):null;


    let mailOptions = {
        from: MAILER_USER,
        to: email,
        subject: subject,
        text: message
    };      

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            res.status(500).json({msg: error});
        } else {
           // console.log('Email sent: ' + info.response);
            res.status(200).json({msg: info.response});
        }
    });
    res.json({msg: 'email sent'}) 
}


async function emailer2(props)  {
    const { email, subject, message } = props;
    console.log(email, subject, message);

    var transporter = nodemailer.createTransport({
        
        service: MAILER_SERVICE,
        auth: {
          user: MAILER_USER,
          pass: MAILER_PASS
        },
        tls: {
            rejectUnauthorized: false}
      });

 const messageToSend = message==1? purchase(email):null;


    let mailOptions = {
        from: MAILER_USER,
        to: email,
        subject: subject,
        text: message
    };      

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            res.status(500).json({msg: error});
        } else {
           // console.log('Email sent: ' + info.response);
            res.status(200).json({msg: info.response});
        }
    });
    res.json({msg: 'email sent'}) 
}


module.exports = {emailer, emailer2}



