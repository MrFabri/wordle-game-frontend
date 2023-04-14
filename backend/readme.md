# Wordle Backend

## API DOC
```ts
CREATE A NEW GAME

POST /api/new-game/

Returns a game id that you can use to play the game

BODY:
{
    "wordLength": number,
    "uniqueLetters": boolean
}

DEFAULT:
{
    "wordLength": 5,
    "uniqueLetters": false
}
```


```ts
COMPARES YOUR GUESS WORD WITH THE CORRECT WORD

POST /api/compare-words/

Returns info about your guess

BODY (REQUIRED):
{
  "id": string,
  "guess": string
}

```

```ts
ADDS YOUR SCORES TO THE HIGHSCORE

POST /api/highscore/add/

Returns your saved highscore

BODY (REQUIRED):
{
  "id": string,
  "name": string
}

```