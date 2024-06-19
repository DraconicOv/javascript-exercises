const palindromes = function (word) {
    return word.toLowerCase().replace(/[\W_]/g, '') == word.toLowerCase().replace(/[\W_]/g, '').split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
