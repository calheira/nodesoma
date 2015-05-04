module.exports = function (numbers) {
  var value = 0;
  for (var i = 0; i < numbers.length; i++) {
      value = value + numbers[i];
  }
  return value;
};