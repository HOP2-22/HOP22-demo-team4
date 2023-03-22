const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  const mailOptions = {
    from: process.env.SMTP_EMAIL,
    to: options.id,
    subject: options.subject,
    html: options.message,
  };

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
