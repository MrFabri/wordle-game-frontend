import { connect } from 'mongoose';
import config from './config';

export default async function init(): Promise<void> {
    try {
        await connect(config.DB.URI, {
            auth: {
                username: config.DB.USERNAME,
                password: config.DB.PASSWORD
            },
        });
        console.log(`Connected to the database`);
    } catch(error) {
        console.log(error);
    }
}