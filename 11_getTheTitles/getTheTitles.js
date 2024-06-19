const getTheTitles = function(books) {
    let a = [];
    for (book of books) {
        a.push(book.title);
    }
    return a;
};

// Do not edit below this line
module.exports = getTheTitles;
