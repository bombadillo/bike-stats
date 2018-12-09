var convert = function(metres) {
  var miles = Math.trunc(metres * 0.000621371)
  return miles.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' mi'
}

var convertValue = function(metres) {
  var miles = Math.trunc(metres * 0.000621371)
  return miles
}

export default {
  convert: convert,
  convertValue: convertValue
}
