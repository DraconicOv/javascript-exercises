const findTheOldest = function(people) {
    let total = 0
  let OldestPerson = {}
  people.reduce((prev, curr) => {
    if (isNaN(prev.yearOfDeath)){
      prev.yearOfDeath = new Date().getFullYear();
      if ((prev.yearOfDeath - prev.yearOfBirth) > total) {
        total = (prev.yearOfDeath - prev.yearOfBirth);
        OldestPerson = prev;
      }
    }
    if ((curr.yearOfDeath - curr.yearOfBirth) > total) {
      total = (curr.yearOfDeath - curr.yearOfBirth);
      OldestPerson = curr
    }
    return prev;
  })
  return OldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
