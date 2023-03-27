import express from 'express';

const app = express();

app.set("port", 5080);

app.get("/", (req, res) => {
    res.json({
        response: 'hello'
    })
});

app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`)
});