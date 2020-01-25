var isDateInPast = date => {
  let currentDate = new Date()
    .getTime()
    .toString()
    .substring(0, 10)

  return currentDate >= date
}

export default {
  isDateInPast: isDateInPast
}
