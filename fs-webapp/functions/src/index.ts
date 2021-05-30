import * as functions from "firebase-functions";
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

exports.sendMail = functions.firestore
    .document("contact-shippers/{contactId}")
    .onCreate((snap, context) => {
      // getting dest email by query string
      const shipper = snap.data();
      const mailOptions: Mail.Options = {
        from: "Equipo Flyshipp <contact@flyshipp.com>",
        to: shipper.mail,
        subject: "Bienvenid@ a Flyshipp",
        html: `
              <p style="font-size: 16px;">Bienvenid@ a Flyshipp</p>
              <br />
              <p style="font-size: 16px;">
                Nos pondremos en contacto con usted a la brevedad.</p>
              <img style="max-width: 500px;"
              src="https://firebasestorage.googleapis.com/v0/b/flyshipp-4eab3.appspot.com/o/flyshipp.png?alt=media&token=a6b1c7e2-07a0-4f85-b5c1-c804172529c4" />
            `,
      };
      const mailOptions2: Mail.Options = {
        from: "Equipo Flyshipp <contact@flyshipp.com>",
        to: ["contact@flyshipp.com", "jcfernandez@flyshipp.com"],
        subject: "Nuevo solicitud de inscripcion de shipper",
        html: `
              <p style="font-size: 16px;">
              Se ha detectado una nueva inscripcion de un shipper:
              </p>
              <br />
              <p style="font-size: 16px;">
                Nombre: ${shipper.name || ""}
              </p>
              <br>
              <p style="font-size: 16px;">
                Apellido: ${shipper.lastName || ""}
              </p>
              <br>
              <p style="font-size: 16px;">
                Mail: ${shipper.mail || ""}
              </p>
              <br>
              <p style="font-size: 16px;">
                Telefono: ${shipper.number || ""}
              </p>
              <br>
              <img style="max-width: 500px;"
              src="https://firebasestorage.googleapis.com/v0/b/flyshipp-4eab3.appspot.com/o/flyshipp.png?alt=media&token=a6b1c7e2-07a0-4f85-b5c1-c804172529c4" />
            `,
      };

      // returning result
      return transporter.sendMail(mailOptions, (error) => {
        if (error) {
          console.log(error);
          return;
        }
        return transporter.sendMail(mailOptions2, (error) => {
          if (error) {
            console.log(error);
            return;
          }
          console.log("Sent!");
        });
      });
    });
