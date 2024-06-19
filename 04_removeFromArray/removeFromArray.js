function removeItem(array, item) {
    var i = array.length;
    while (i--) {
      if (array[i] === item) {
        array.splice(i, 1);
      }
    }
  }
  
const removeFromArray = function() {
    array = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        removeItem(array, (arguments[i]));
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
