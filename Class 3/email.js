let nodemailer = require('nodemailer');
require("dotenv").config()

let Email_info = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
})

let Email_Body= {
    to: ["samreenrafiq@aptechnorth.edu.pk", "samreenrafiq@gmail.com", "shaikh.sahab.zindabad@gmail.com"],
    from: process.env.EMAIL ,
    subject: "Hello Miss/Sir",
    html: "<p>Hello Miss/Sir, I am Zain Ali, I am a student of your class.</p>"
}

Email_info.sendMail(Email_Body,function (error , info){
    if (error) {
        console.log("Something Went Wrong");
        console.log(error)
    } else {
        console.log(`Email Sent to ${Email_Body.to}`);
        console.log(info)
    }
})