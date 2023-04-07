import { Schema, model } from 'mongoose';
import IHighscore from '../interfaces/highscore.interface';

const HighscoreSchema = new Schema<IHighscore>({
    name: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    word: {
        type: String,
    },
    settings: {
        wordLength: {
            type: Number,
        },
        uniqueLetters: {
            type: Boolean
        }
    },
    correct: {
        type: Boolean
    },
    guesses: [String],
    startTime: {
        type: Date
    },
    endTime: {
        type: Date
    }
});

export default model<IHighscore>("highscore", HighscoreSchema);