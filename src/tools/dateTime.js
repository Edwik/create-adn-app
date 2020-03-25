const moment = require('moment')

export const getDateFormat = (arrival) => {
  return moment((arrival.date).concat('Z')).utcOffset(arrival.offset).format('MM/DD/YYYY')
}  

export const getArrayTimeFormat = (date) => {
  return moment((date[0].date).concat('Z')).utcOffset(date[0].offset).format('HH:mm') + '-' + moment((date[1].date).concat('Z')).utcOffset(date[1].offset).format('HH:mm')
}

export const getTimeFormat = (arrival) => {
  return moment((arrival.date).concat('Z')).utcOffset(arrival.offset).format('HH:mm')
}