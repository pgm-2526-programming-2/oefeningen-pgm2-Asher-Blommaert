const express = require("express");
const app = express();
const quotesRouter = require("./routes/quotes.routes");

// app.get("/api/quotes", getAllQuotes)
app.use("/api", quotesRouter);


app.listen(8080, "localhost", (err) => {
    if (err) {
        return console.log(err.message);
    }

    console.log("server is opgestart en draaiende op http://localhost:8080");
});