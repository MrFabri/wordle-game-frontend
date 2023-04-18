## Wordle Game - Fullstack application
<a href="https://wordle.fabricioflores.se/">Demo website</a>
<hr>

#### Configuration
- Look for an `.env.example` file in the backend folder and rename it to `.env` and fill it with your information
<hr>

#### Run
- `npm run build` in /frontend. Creates a build folder in the backend directory.
- `npm start` in /backend. Compiles the TS into JS and starts the server.

#### Dev
- `npm run dev` in /frontend. http://localhost:5173/ (this port may vary)
- `npm run dev` in /backend. http://localhost:5080/

<hr>

#### Frontend
- React app created using vite as a project generator and bundler
- The app contains 2 pages
- The homepage renders the game itself and it's logic
- The information page renders a static page with info about the game
- Proxy config in `vite.config.ts` for development of the fullstack app

#### Backend
- Powered by express
- A react app is rendered to all the root routes `/*` but with 2 exceptions
- Exceptions are `/api/*` and `/highscore`
- `/api/*` routes are used for powering the game api
- `/highscore/` is a SSR page which is rendered with EJS template engine 
