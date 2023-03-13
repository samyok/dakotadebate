/*
 * Copyright (c) 2021 Samyok Nepal.
 */
require("dotenv").config({ path: "../.env.local" });
const ejs = require("ejs");
const nodemailer = require("nodemailer");
const validator = require("email-validator");
const phone = require("phone");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});
const plivo = require("plivo");

const client = new plivo.Client(process.env.PLIVO_ID, process.env.PLIVO_TOKEN);
const { nanoid } = require("nanoid");
const clientPromise = require("../utils/mongodb");

const registration_confirmation = `
<html lang="en">

  <head>
    <title>Dakota Debate Institute</title>
  </head>

  <body style="padding: 0; margin: 0;font-family: 'Aleo', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;">
    <div style="background: linear-gradient(90.05deg, #7046EA 0%, #42B4CF 100%); padding: 20px 15px;">
      <div style="padding: 20px; background-color: white; font-family: 'Aleo', Merriweather, 'Merriweather Sans', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;">
        <h1 style="font-family: Merriweather, 'Merriweather Sans', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;">
          You didn't finish registering!</h1>

        <p>You started signing up to <a href="https://dakotadebate.org">Dakota Debate Institute</a>, but I only got part of your registration, <%= name %>!</p>

        <p>To continue where you left off, please click the button below :)</p>

        <a href="https://dakotadebate.org/e/<%= link %>" style="text-align: center; padding: 20px; background: linear-gradient(90.05deg, #7046EA 0%, #42B4CF 100%); color: white; font-weight: bold; display: block; border-radius: 5px;box-shadow: rgba(0,0,0,0.3) 2px 2px 10px 2px; font-size: 25px;">Click here to finish registering</a>

        <p>If you need to change anything, feel free to email us at <a href="mailto:samyok@dakotadebate.org">staff@dakotadebate.org</a>. Tell your friends to sign up too!
        </p>

        <p>Let me know if you have any issues signing up,<br>Samyok</p>
      </div>
    </div>
  </body>

</html>
`;

async function PartialRegistrationReminder(name, link, email, phoneNumber) {
  console.log(email);
  const rendered = ejs.render(registration_confirmation, { name, link });
  // if (email !== "n.epalsamyok@gmail.com") return rendered;
  const info = await transporter.sendMail({
    from: '"Dakota Debate Institute Staff" <staff@dakotadebate.org>', // sender address
    to: email, // list of receivers
    subject: `Complete your DDI registration, ${name}`, // Subject line
    text: "You didn't finish your registration :(", // plain text body
    html: rendered, // html body
  });
  // let info = "";
  console.log(info);
  const sms = await client.messages.create(
    process.env.PLIVO_NUMBER,
    phoneNumber,
    `Hey! This is Samyok from DDI checking in. We noticed you hadn't completed your registration! You can click below to continue if you're still interested.
    
https://dakotadebate.org/e/${link}
    
(text STOP to stop getting messages from us)
`
  );
  return { email: info, sms };
}

(async () => {
  const client = await clientPromise;
  const db = client.db("ddi");

  const cursor = await db.collection("partials").find({});
  // make sure email is used only once
  const emails = new Set();
  // @ts-ignore
  await cursor.forEach((partial) => {
    // see if it exists in registrations:
    db.collection("registration")
      .findOne({
        studentFirstName: partial.studentFirstName,
        studentLastName: partial.studentLastName,
      })
      .then((result) => {
        if (!result) {
          if (
            validator.validate(partial.studentEmail) &&
            phone(partial.studentPhoneNumber)[0] &&
            !emails.has(partial.studentEmail) &&
            !partial.sentReminderDate
          ) {
            emails.add(partial.studentEmail);
            console.log(
              "sending email to",
              partial.studentFirstName,
              partial.studentEmail,
              phone(partial.studentPhoneNumber)[0],
              partial.sentReminderDate
            );
            db.collection("partials")
              .updateOne({ _id: partial._id }, { $set: { sentReminderDate: new Date() } })
              .then(() => {
                console.log(
                  PartialRegistrationReminder(
                    partial.studentFirstName,
                    partial.nanoid,
                    partial.studentEmail,
                    phone(partial.studentPhoneNumber)[0]
                  )
                );
              });
          } else {
            console.log("\temail/phone not valid for", partial.studentFirstName);
          }
        }
      });
  });
})();
