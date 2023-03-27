import express from "express";
import path from "path";
import apiRoutes from "./routes/api.routes";

const app = express();

app.set("port", 5080);
app.set("frontend", "../../frontend/dist/");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, app.get("frontend"))));

app.use("/api", apiRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, app.get("frontend"), "index.html"));
});

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
