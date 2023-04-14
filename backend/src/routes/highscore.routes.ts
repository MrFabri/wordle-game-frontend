import { Router } from 'express';
import HighscoreModel from "../models/highscore.model";

const router = Router();

router.get('/', async (req, res) => {
    try {
        const highscores = await HighscoreModel.find({});

        res.status(200).render("highscore", {
            data: highscores
        });
    } catch (error) {
        res.status(200).render("highscore", {
            data: { error: 'Failed to load the highscore!' }
        });
    }
});

export default router;