import express from "express";

const app = express();

app.listen(5555, () => {
    console.log("Server is listening on port 5555");
})