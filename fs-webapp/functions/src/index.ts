import * as functions from "firebase-functions";
import * as cors from "cors";
import {transporter} from "./mail-keys";
import Mail = require("nodemailer/lib/mailer");

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.randomNumber = functions.https.onRequest(async (request, response) => {
  const number = Math.round(Math.random() * 100);
  response.json({number: number.toString()});
});

exports.sendMail = functions.https.onRequest((req, res) => {
  cors<cors.CorsRequest>()(req, res, () => {
    // getting dest email by query string
    const dest = req.query.dest as string;
    const mailOptions: Mail.Options = {
      from: "Equipo Flyshipp <yourgmailaccount@gmail.com>",
      to: dest,
      subject: "Bienvenid@ a Flyshipp", // email subject
      html: `
        <p style="font-size: 16px;">Bienvenid@ a Flyshipp</p>
        <br />
        <p style="font-size: 16px;">
        Nos pondremos en contacto con usted a la brevedad.</p>
        <img src="https://firebasestorage.googleapis.com/v0/b/flyshipp-4eab3.appspot.com/o/flyshipp.png?alt=media&token=a6b1c7e2-07a0-4f85-b5c1-c804172529c4" />
      `,
    };

    // returning result
    return transporter.sendMail(mailOptions, (error) => {
      if (error) {
        return res.send(error.toString());
      }
      return res.send("Sended");
    });
  });
});
