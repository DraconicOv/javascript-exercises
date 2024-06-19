const fibonacci = function a(n) {
    if (n < 0) return "OOPS";
    return Number(n < 2 ? n : a(n-1) + a(n-2));
};

// Do not edit below this line
module.exports = fibonacci;
