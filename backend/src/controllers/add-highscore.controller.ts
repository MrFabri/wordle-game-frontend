import { Request, Response } from "express";
import { errorMessage } from "../utils/error.handler";
import IGame from '../interfaces/game.interface';
import HighscoreModel from "../models/highscore.model";
import GAMES from '../utils/games.array';

export default async (req: Request, res: Response) => {
    const { id, name } = req.body;
    if (!id || !name) return errorMessage(res, 500, "MISSING ID OR NAME ARGUMENT");

    const game: IGame | undefined = GAMES.find(game => game.id === id);

    if (game && game.correct === true) {
        const highscore = await HighscoreModel.create({
            name,
            ...game,
        })

        // Removes the game from the games array
        const index = GAMES.findIndex(obj => obj.id === game.id);
        GAMES.splice(index, 1);

        // Returns the saved game
        return res.status(201).json(highscore);
    }

    return errorMessage(res, 500, "COULD NOT FIND GAME")
}