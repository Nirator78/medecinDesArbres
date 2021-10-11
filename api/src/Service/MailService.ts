/**
 * Created by Clement on 20/07/2021
 * Created At 11:46
 */

import * as nodemailer from 'nodemailer';

export class MailService {
    async sendMail(correspondant, lien) {

       // Authentification au service de mail
       let transporter = nodemailer.createTransport({
           service: process.env.EMAIL_SERVICE,
           auth: {
               user: process.env.EMAIL_USER,
               pass: process.env.EMAIL_PASSWORD
           }
       });

       let textEmail = "Voici le lien de connexion pour changer votre mot de passe sur onverraplustard \n " + lien;

       // Contenue du mail
       let mailOptions = {
           from: 'noreplynirator@gmail.com',
           to: correspondant,
           subject: 'Changement de mot de passe',
           text: textEmail,
       };

       // Envoi du mail
       transporter.sendMail(mailOptions, (err, data) => {
           if (err) {
               return 'Email not sent';
           }
           return 'Email sent';
       });
    }
}
