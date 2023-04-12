export default interface Game {
    id: string,
    word: string,
    settings: {
        wordLength: number,
        uniqueLetters: boolean,
    },
    correct: boolean,
    guesses: string[],
    startTime?: Date,
    endTime?: Date,
}