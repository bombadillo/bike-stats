var convert = function(metres) {
  var miles = Math.trunc(metres * 0.000621371)
  return miles.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export default {
  convert: convert
}
