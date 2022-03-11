# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
- Voici un exemple
```bash
{
   "name": "default",
   "type": "mysql",
   "host": "127.0.0.1",
   "port": 3306,
   "username": "root",
   "database": "test",
   "password": "",
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/Entity/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/Entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}
```
4. Run `npm start` command
