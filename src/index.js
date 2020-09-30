
exports.min = function min(array) {
  if (arguments.length < 1 || array.length < 1) {
    return 0;
  } else {
      return array.sort((a, b) => {
          return a - b
      })[0];
  }
}

exports.max = function max(array) {
    if (arguments.length < 1 || array.length < 1) {
        return 0;
    } else {
        return array.sort((a, b) => {
            return b - a
        })[0];
    }
}

exports.avg = function avg(array) {
    if (arguments.length < 1 || array.length < 1) {
        return 0;
    } else {
        return array.reduce((prevValue, curValue) => {
            return prevValue + curValue
        }) / array.length;
    }
}
