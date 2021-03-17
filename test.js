
var nodemailer = require('nodemailer');
var transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
    user: "SENDER EMAIL",
    pass: "PASSWORD"
    }
});

var mailOptions = {
    from: '"SENDER NAME" <SENDER EMAIL>',
    to: 'SENDER EMAIL',
    subject: 'Test Email',
    html: 'Test email sent successfully. SMTP',
    dsn: {
        id: 'some random message specific id',
        return: 'headers',
        notify: ['failure', 'delay'],
        recipient: 'SENDER EMAIL'
    },
};

transport.sendMail(mailOptions, (error, info) => {
    if (error) {
    return console.log(error);
    }
    console.log('Successfully sent');
});
        
