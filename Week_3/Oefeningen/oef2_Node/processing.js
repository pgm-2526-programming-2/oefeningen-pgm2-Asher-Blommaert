function processBooks(books) {
    books.forEach((book) =>
        console.log(
            `ID: ${book.id}, Titel: ${book.title}, Auteur: ${book.author}, Genre: ${book.genre}`
        )
    );
}

module.exports = {
    processBooks
}