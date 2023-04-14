## Wordle Game - Fullstack application

### Configuration
- Go to the backend folder and rename .env.example to .env and fill it with your information

### To start the project, run these commands in its respective folders
- `npm run build` in /frontend
- `npm start` in /backend

### Frontend
- React app created using vite as a project generator and bundler
- The app contains 2 pages
- The homepage renders the game itself and it's logic
- The information page renders a static page with info about the game
- Proxy config in `vite.config.ts` for development of the fullstack app

### Backend
- Powered by express
- A react app is rendered to all the root routes `/*` but with 2 exceptions
- Exceptions are `/api/*` and `/highscore`
- `/api/*` routes are used for powering the game api
- `/highscore/` is a SSR page which is rendered with EJS template engine 