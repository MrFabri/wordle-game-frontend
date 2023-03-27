export default (correctWord: string, guessWord: string) => {
    if (!correctWord || !guessWord) return 'Fill both inputs!';
    if (correctWord.length !== guessWord.length) return 'Both input must have the same length!';

    correctWord = correctWord.toLowerCase();
    guessWord = guessWord.toLowerCase();

    let feedback: { letter: string, result: string }[]= [];
    const incorrectLetterIndexes: number[] = [];
    const correctLetters: { [index: string]: number} = {};

    for (let i = 0; i < guessWord.length; i++) {
        feedback.push({
            letter: guessWord[i],
            result: "incorrect"
        });

        let correctWordLetter: string = correctWord[i];
        let guessWordLetter: string = guessWord[i];

        // correctLetters.includes(correctWordLetter) ? correctLetters[correctWordLetter]++ : correctLetters[correctWordLetter] = 1;
        correctWordLetter in correctLetters ? correctLetters[correctWordLetter]++ : correctLetters[correctWordLetter] = 1;

        if (guessWordLetter === correctWordLetter) {
            feedback[i].result = 'correct';
            correctLetters[correctWordLetter]--;
        } else {
            incorrectLetterIndexes.push(i);
        }
    }

    // Handles missplaced letters
    for (const index of incorrectLetterIndexes) {
        let guessLetter = guessWord[index];

        if (guessLetter in correctLetters && correctLetters[guessLetter] > 0) {
            feedback[index].result = 'misplaced';
            correctLetters[guessLetter]--;
        }
    }

    return (feedback);
}