import { Router, Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';
import { errorMessage } from "../utils/error.handler";
import selectRandomWord from '../helpers/selectRandomWord';
import giveFeedback from '../helpers/giveFeedback';
import words from '../helpers/words';
import IGame from '../interfaces/game.interface';
import HighscoreModel from "../models/highscore.model";

const router = Router();
const games: IGame[] = []; 

router.get("/", (req: Request, res: Response) => {
  res.json({
    response: "welcome to the wordle game api",
  });
});

router.post("/new-game", (req: Request, res: Response) => {
  const wordLength: number = req.body.wordLength || 5;
  const uniqueLetters: boolean = req.body.uniqueLetters || false;

  const game: IGame = {
    id: uuidv4(),
    word: selectRandomWord(words, wordLength, uniqueLetters),
    settings: {
      wordLength,
      uniqueLetters
    },
    correct: false,
    guesses: [],
    startTime: new Date()
  }

  console.log(game)
  games.push(game);
  res.status(201).json({
    id: game.id
  });
});

router.post("/compare-words", (req: Request, res: Response) => {
  const { id, guess } = req.body;
  if(!id || !guess) return errorMessage(res, 500,"MISSING ID OR GUESS ARGUMENT");

  // Finds the game by id
  const game: IGame | undefined = games.find(game => game.id === id);

  if(game && game.correct === false) {
    if(game.word.length !== guess.length) return errorMessage(res, 500, "THE GUESS AND THE CORRECT WORD MUST HAVE THE SAME LENGTH");
    game.guesses.push(guess);

    // Win Scenario
    if(game.word === guess) {
      game.endTime = new Date();
      game.correct = true;

      return res.status(201).json({
        ...game,
        feedback: giveFeedback(game.word, guess)
      })
    }
    
    // Feedback
    return res.status(201).json({
      id: game.id,
      correct: false,
      guesses: game.guesses,
      feedback: giveFeedback(game.word, guess)
    }); 
  }
  
  return errorMessage(res, 500,"COULD NOT FIND THE GAME")
});

router.get("/highscore/add", async (req: Request, res: Response) => {
  const { id, name } = req.body;
  if(!id || !name) return errorMessage(res, 500,"MISSING ID OR NAME ARGUMENT");

  const game: IGame | undefined = games.find(game => game.id === id);

  if(game && game.correct === true) {
    const highscore = await HighscoreModel.create({
      name,
      ...game,
    })
    const index = games.findIndex(obj => obj.id === game.id);
    games.splice(index, 1);
    return res.status(201).json(highscore);
  }

  return errorMessage(res, 500, "COULD NOT FIND GAME")
});

router.get("/highscore", async (req: Request, res: Response) => {
  const highscores = await HighscoreModel.find({});
  res.status(201).json(highscores);
});

export default router;
