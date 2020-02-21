
// You should implement your task here.

module.exports = function towelSort (arr) {
  if (!arr || !arr.length) return new Array(0)
  return arr.map((el, pos) => pos % 2 != 0 ? el.sort((a,b) => b - a) : el)
            .map(el => el.join(','))
            .join(',')
            .split(',')
            .map(el => parseInt(el));
}
