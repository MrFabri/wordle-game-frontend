import { Request, Response } from "express";
import { errorMessage } from "../utils/error.handler";
import IGame from '../interfaces/game.interface';
import GAMES from '../utils/games.array';
import feedback from "../utils/getFeedback";

export default (req: Request, res: Response) => {
    const { id, guess } = req.body;
    if (!id || !guess) return errorMessage(res, 500, "MISSING ID OR GUESS ARGUMENT");

    // Finds the game by id
    const game: IGame | undefined = GAMES.find(game => game.id === id);

    if (game && game.correct === false) {
        if (game.word.length !== guess.length) return errorMessage(res, 500, "THE GUESS AND THE CORRECT WORD MUST HAVE THE SAME LENGTH");

        // Starts the timer on first guess
        if (game.guesses.length === 0) {
            game.startTime = new Date();
        }
        game.guesses.push(guess);

        // Win Scenario
        if (game.word === guess) {
            game.endTime = new Date();
            game.correct = true;

            return res.status(201).json({
                ...game,
                feedback: feedback(game.word, guess)
            })
        }

        // Feedback
        return res.status(201).json({
            id: game.id,
            settings: game.settings,
            guesses: game.guesses,
            correct: false,
            feedback: feedback(game.word, guess)
        });
    }

    return errorMessage(res, 500, "COULD NOT FIND THE GAME")
}