/**
 * Created by Clement on 27/08/2021
 * Created At 19:08
 */
const jwt = require('jsonwebtoken');

export class AuthentificationService {

    async getUserInfo(req){
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
    }

}
