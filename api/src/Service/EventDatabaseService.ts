/**
 * Created by Clement on 20/07/2021
 * Created At 17:34
 */
const mysql = require('mysql');

export class EventDatabaseService {

    private eventDeletePasswordKeyAfter24Hours =
        "CREATE EVENT delete_event\n" +
        "ON SCHEDULE AT CURRENT_TIMESTAMP + INTERVAL 1 DAY\n" +
        "ON COMPLETION PRESERVE\n" +
        "DO\n" +
        "DELETE FROM ONVERRAPLUSTARD2.password_key WHERE createdAt < DATE_SUB(NOW(), INTERVAL 1 DAY);";

    private showEvents =
        "SHOW EVENTS";

    async create() {
        const connection = mysql.createConnection({
            host     : process.env.DATABASE_HOST,
            user     : process.env.DATABASE_USER,
            password : process.env.DATABASE_PASSWORD,
            database : process.env.DATABASE_DB
        });

        try{
            connection.connect();
            connection.query(this.eventDeletePasswordKeyAfter24Hours, function (err, rows, fields) {
                connection.end();
            });
        }catch (err){
            console.log(err);
        }
    }
}
