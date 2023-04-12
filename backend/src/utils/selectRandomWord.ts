const selectRandomWord = (words: string[], desiredLength: number, uniqueLetters: boolean): string => {
  // Filter the words based on desired length and unique letters requirement
  const filteredWords = words.filter(word => {
    return word.length === desiredLength && (!uniqueLetters || new Set(word).size === desiredLength)
  });

  // Check if any words are left after filtering
  if (filteredWords.length === 0) {
    return `No suitable words found for length ${desiredLength} and unique letters ${uniqueLetters}`;
  }

  // Select a random word from the filtered list
  const randomIndex = Math.floor(Math.random() * filteredWords.length);
  return filteredWords[randomIndex];
}

export default selectRandomWord;