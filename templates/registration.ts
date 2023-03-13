/*
 * Copyright (c) 2021 Samyok Nepal.
 */
import * as ejs from "ejs";
import phone from "phone";
import transporter from "./nodemailTransport";
import { send } from "./plivoTransport";

const registration_confirmation = `<html lang="en">

<head>
    <link href="https://fonts.googleapis.com/css2?family=Mate+SC&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Aleo:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Merriweather+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet" >
    <title>Dakota Debate Institute</title>
</head>

<body style="padding: 0; margin: 0;font-family: 'Aleo', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;">
<div style="background: linear-gradient(90.05deg, #7046EA 0%, #42B4CF 100%); padding: 20px 15px;">
    <div style="padding: 20px; background-color: white; font-family: 'Aleo', Merriweather, 'Merriweather Sans', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;">
        <h1 style="font-family: Merriweather, 'Merriweather Sans', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;">
            Thanks for registering to Dakota Debate Institute!</h1>

        <p>I got your registration, <%= name %>!</p>

        <p>A week before camp starts, I'll send you a link to join the Discord, as well as the schedule and other
            details. Feel free to make a Discord account beforehand, as that will speed up the process later.</p>

        <p>If you need to change anything about your registration, feel free to email us at <a
                    href="mailto:samyok@dakotadebate.org">staff@dakotadebate.org</a>. Tell your friends to sign up too!
        </p>

        <p>I can't wait to see what you learn at the camp!</p>
        <p>- Samyok</p>
    </div>
</div>
</body>
</html>
`;

const smsMessage = `

Thanks for signing up to DDI! This is our automated text-blast system where you will get important updates and messages as camp gets closer.

(text STOP to stop)
`.trim();

export default async function Registration(name: string, email: string | string[], phoneNumber: string) {
  console.log(email);
  const rendered = ejs.render(registration_confirmation, { name: name.trim() });
  const emailInfo = await transporter.sendMail({
    from: '"Dakota Debate Institute Staff" <staff@dakotadebate.org>', // sender address
    to: email, // list of receivers
    subject: `Registration confirmation for ${name}`, // Subject line
    text: "Thanks for registering!", // plain text body
    html: rendered, // html body
  });
  const smsInfo = await send(phone(phoneNumber)[0], smsMessage);
  console.log({ emailInfo, smsInfo });
  return { emailInfo, smsInfo };
}
