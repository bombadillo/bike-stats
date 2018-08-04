var convert = function(seconds, showMins) {
  seconds = Number(seconds)
  var h = Math.floor(seconds / 3600)
  var m = Math.floor((seconds % 3600) / 60)
  var s = Math.floor((seconds % 3600) % 60)

  var hDisplay = h > 0 ? h + (h == 1 ? ' hr' : ' hrs') : ''

  if (showMins) {
    hDisplay += m > 0 ? m + (m == 1 ? ' min' : ' mins') : ''
  }

  return hDisplay
}

export default {
  convert: convert
}
