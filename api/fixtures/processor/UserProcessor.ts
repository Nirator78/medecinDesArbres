import { IProcessor } from 'typeorm-fixtures-cli';
import { User } from '../../src/Entity/User';

const bcrypt = require('bcrypt');

export default class UserProcessor implements IProcessor<User> {
    async postProcess(name: string, object: { [key: string]: any }) {
        const salt = await bcrypt.genSalt(10);
        object.password = await bcrypt.hash(object.password,salt);
    }
}