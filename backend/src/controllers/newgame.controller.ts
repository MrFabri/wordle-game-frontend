import { Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';
import selectRandomWord from '../utils/selectRandomWord';
import IGame from '../interfaces/game.interface';
import WORDS from '../utils/words.array';
import GAMES from '../utils/games.array';

export default (req: Request, res: Response) => {
    const wordLength: number = req.body.wordLength || 5;
    const uniqueLetters: boolean = req.body.uniqueLetters || false;

    const game: IGame = {
        id: uuidv4(),
        word: selectRandomWord(WORDS, wordLength, uniqueLetters),
        settings: {
            wordLength,
            uniqueLetters
        },
        correct: false,
        guesses: []
    }

    GAMES.push(game);
    res.status(201).json({
        id: game.id
    });
}