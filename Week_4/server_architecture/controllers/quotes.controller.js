const { returnFile } = require("../utils/file.utils");

function getAllQuotes(req, res) {
    res.json(returnFile("quotes.json"));
}

function getQuoteById(req, res) {
    const { questionId } = req.params
    const allQuotes = returnFile("quotes.json");
    const quoteWithId = allQuotes.find(quote => quote.id === questionId);
    res.json(quoteWithId);
}

module.exports = {
    getAllQuotes,
    getQuoteById
}