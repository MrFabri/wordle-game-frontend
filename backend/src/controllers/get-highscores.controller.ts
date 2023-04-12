import { Request, Response } from 'express';
import HighscoreModel from "../models/highscore.model";
import { errorMessage } from '../utils/error.handler';

export default async (req: Request, res: Response) => {
    try {
        const highscores = await HighscoreModel.find({});
        res.status(201).json(highscores);
    } catch (error) {
        errorMessage(res, 500, "Serverside error, try again later!")
        console.log(error);
    }
}