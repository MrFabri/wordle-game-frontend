import 'dotenv/config';
import express from "express";
import path from "path";
import apiRoutes from "./routes/api.routes";
import highscoreRoutes from './routes/highscore.routes'
import config from './config';
import db from './db';
db();

const app = express();

// ****** Configuration ****** \\
app.set("frontend", "../../frontend/dist/");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// ******* Middlewares ******** \\
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, app.get("frontend"))));

// ****** Routes ******\\
app.use("/api", apiRoutes);
app.use("/highscore", highscoreRoutes);

// ****** Serves the react app on every route left ******* \\
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, app.get("frontend"), "index.html"));
});

app.listen(config.PORT, () => {
  console.log(`Server on port ${config.PORT}`);
});
