var convert = function(metres) {
  var miles = Math.trunc(metres * 0.000621371)
  return miles.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' mi'
}

var convertValue = function(metres) {
  return Math.trunc(metres * 0.000621371)
}

var convertMetresPerSecond = function(metres) {
  return (metres * 2.23694).toFixed(1)
}

export default {
  convert: convert,
  convertValue: convertValue,
  convertMetresPerSecond: convertMetresPerSecond
}
