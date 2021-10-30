import moment from 'moment'

function convertTime(ts) {
  const day = moment.unix(ts) //milliseconds

  return day.format('dddd, Do MMMM YYYY, h:mm:ss a')
}

export { convertTime }
