var convert = function(metres) {
  var feet = Math.trunc(metres * 3.28084)
  return feet.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export default {
  convert: convert
}
