/**
 * Created by Clement on 27/08/2021
 * Created At 19:08
 */
const jwt = require('jsonwebtoken');
const cryptoJS = require("crypto-js");

export class AuthentificationService {

    private cryptedKey = 'd6F3Efeq';

    async getUserInfo(req){
        try {
            const authHeader = req.headers.authorization;
            const token = authHeader && authHeader.split(' ')[1];
            const userInfo =  await jwt.verify(token, process.env.SECRET_TOKEN);
            let infoReturn;
            if(userInfo.data.user.type){
                infoReturn = {userId: userInfo.data.user, boutiqueId: userInfo.data.boutique}
            }else{
                infoReturn = {userId: userInfo.data.user};
            }
            return infoReturn;
        } catch (error) {
            return null;
        }
    }

    encryptPassword(password){
        return cryptoJS.AES.encrypt(password, this.cryptedKey).toString();
    }

    decryptPassword(password){
        const bytes  = cryptoJS.AES.decrypt(password, this.cryptedKey);
        return bytes.toString(cryptoJS.enc.Utf8);
    }
}
