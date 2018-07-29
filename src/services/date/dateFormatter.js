var format = dateString => {
  if (!dateString || dateString === '') {
    return ''
  }

  var options = { year: 'numeric', month: 'long', day: 'numeric' }

  return new Date(dateString).toLocaleDateString('en-GB', options)
}

var formatWithTime = dateString => {
  if (!dateString || dateString === '') {
    return ''
  }

  var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }

  return new Date(dateString).toLocaleDateString('en-GB', options)
}

export default {
  format: format,
  formatWithTime: formatWithTime
}
