import express from "express";
import path from "path";
import apiRoutes from "./routes/api.routes";

const app = express();

// ****** Configuration ****** \\
app.set("port", 5080);
app.set("frontend", "../../frontend/dist/");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// ******* Middlewares ******** \\
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, app.get("frontend"))));

// ****** Routes ******\\
app.use("/api", apiRoutes);

app.use("/highscore", (req, res) => {
  res.render("highscore", {
    data: 'Welcome to the highscore page'
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, app.get("frontend"), "index.html"));
});

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
