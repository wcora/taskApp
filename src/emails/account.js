const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);


const sendEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'corawang@cmu.edu',
        // from: 'bounces+18546190@em2227.corawang.dev',
        subject: 'Test my email service!',
        text: `Welcome ${name}! You've kicked off this sending email service :) Yahhhh`
    });
}

const cancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'corawang@cmu.edu',
        // from: 'bounces+18546190@em2227.corawang.dev',
        subject: 'Finished Testing! User deleted~',
        text: `Thanks ${name}! You've finished sendGrid setup!`
    });
}

module.exports = {
    sendEmail,
    cancelEmail
};
