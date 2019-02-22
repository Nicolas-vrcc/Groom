function pad(num) {
  return ('0' + num).slice(-2)
}

function getTimeFromDate(timestamp) {
  if (timestamp == null) return null
  const date = new Date(timestamp * 1000)
  const hours = date.getHours()
  const minutes = date.getMinutes()
  return `${pad(hours)}h${pad(minutes)}`
}

export { getTimeFromDate }