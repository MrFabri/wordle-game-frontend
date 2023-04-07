import { connect } from 'mongoose';
import config from './config';

export default async function init(): Promise<void> {
    try {
        const db = await connect(config.DB.URI, {
            auth: {
                username: config.DB.USERNAME,
                password: config.DB.PASSWORD
            },
            dbName: "wordle-game"
        });
        console.log(`Connected to the database: ${db.connection.name}`);
    } catch(error) {
        console.log(error);
    }
}