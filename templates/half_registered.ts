/*
 * Copyright (c) 2021 Samyok Nepal.
 */
import * as ejs from "ejs";
import transporter from "./nodemailTransport";

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

        <a href="https://dakotadebate.org/e/<%= link %>" style="text-align: center; padding: 20px; background: linear-gradient(90.05deg, #7046EA 0%, #42B4CF 100%); color: white; font-weight: bold; display: block; border-radius: 5px;box-shadow: rgba(0,0,0,0.3) 2px 2px 10px 2px; font-size: 25px;">Click Here Finish Registering</a>

        <p>If you need to change anything, feel free to email us at <a href="mailto:samyok@dakotadebate.org">staff@dakotadebate.org</a>. Tell your friends to sign up too!
        </p>

        <p>Let me know if you have any issues signing up!</p>
        <p>- Samyok</p>
      </div>
    </div>
  </body>

</html>
`;

export default async function PartialRegistrationReminder(
  name: string,
  link: string,
  email: string | string[]
) {
  console.log(email);
  const rendered = ejs.render(registration_confirmation, { name, link });
  return rendered;
  const info = await transporter.sendMail({
    from: '"Dakota Debate Institute Staff" <staff@dakotadebate.org>', // sender address
    to: email, // list of receivers
    subject: `Complete your DDI registration, ${name}`, // Subject line
    text: "You didn't finish your registration :(", // plain text body
    html: rendered, // html body
  });
  console.log(info);
  return info;
}
