import app from './src/app.js';
import Serverless from 'serverless-http';
import { sequelize } from './src/database/database.js';
import './src/models/User.js';

async function main(){
    try{
        await sequelize.sync()
        await sequelize.authenticate();
        //app.listen(3000);
        //console.log("Server is listening")
    }catch (error) {
        console.error("Unable to connect to the database", error);
    }
}

main();

export const handler = Serverless(app);