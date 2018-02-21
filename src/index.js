/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = [2, 3, 1, 5, 6, 4]) {
  var sum = 0, len = preferences.length;
  
  for (var i = 0; i < preferences.length; i++) {
    if (preferences[i] !== 0) {
      var num1 = preferences[i], num2 = preferences[num1 - 1], num3 = preferences[num2 - 1];

        if ((i + 1 === num3) && (preferences[i] !== 0) && (num1 !== num2) && (num2 !== num3) && (num3 !== num1)) {
          ++sum;
          preferences[i] = preferences[num1 - 1] = preferences[num2 - 1] = 0; 
        }
    }
  }

  return sum;
};

/*function getLoveTrianglesCount(preferences = [2, 3, 1, 5, 6, 4]) {
  var sum = 0, len = preferences.length;
  for (var i = 0; i < preferences.length; i++) {
    if (preferences[i] !== 0) {
      var num1 = preferences[i], num2 = preferences[num1 - 1], num3 = preferences[num2 - 1];

        if ((i + 1 === num3) && (preferences[i] !== 0) && (num1 !== num2) && (num2 !== num3) && (num3 !== num1)) {
          ++sum;
          preferences[i] = preferences[num1 - 1] = preferences[num2 - 1] = 0; 
        }
    }
  }

  return sum;
}

let count = getLoveTrianglesCount([2, 3, 1, 5, 6, 4]);
console.log(count);*/