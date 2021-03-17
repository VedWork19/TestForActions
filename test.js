
var nodemailer = require('nodemailer');
var transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
    user: "vedant19khandokar2000@gmail.com",
    pass: "PROEVOLUTION"
    }
});

var mailOptions = {
    from: '"Vedant" <vedant19khandokar2000@gmail.com>',
    to: 'vedant19khandokar2000@gmail.com',
    subject: 'Test Email',
    html: 'Test email sent successfully. SMTP',
    dsn: {
        id: 'some random message specific id',
        return: 'headers',
        notify: ['failure', 'delay'],
        recipient: 'vedant19khandokar@gmail.com'
    },
};

transport.sendMail(mailOptions, (error, info) => {
    if (error) {
    return console.log(error);
    }
    console.log('Successfully sent');
});
        