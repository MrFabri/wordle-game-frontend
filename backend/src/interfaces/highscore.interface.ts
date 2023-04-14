import IGame from './game.interface';

export default interface Highscore extends IGame {
    name: string,
    duration: string
}