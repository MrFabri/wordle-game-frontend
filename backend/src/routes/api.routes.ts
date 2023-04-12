import { Router, Request, Response } from "express";
import newGameController from "../controllers/newgame.controller";
import compareWordsController from "../controllers/compare-words.controller";
import addHighscoreController from "../controllers/add-highscore.controller";
import getHighscoresController from "../controllers/get-highscores.controller";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({ response: "Welcome to the wordle game api" });
});

router.post("/new-game", newGameController);

router.post("/compare-words", compareWordsController);

router.post("/highscore/add", addHighscoreController);

router.get("/highscore", getHighscoresController);

export default router;
