import _ from 'lodash'
const array = []
function ArrayString (key, value, avoid) {
  const obj = {
    key,
    value
  }

  if (avoid) {
    return
  }

  _.findIndex(array, function (k) {
    if (k.key === obj.key && k.value !== obj.value) {
      throw Error(`Error the key: ${k.key} exist!`)
    }
  })

  var x = array.filter(function (hero) {
    return hero.key === obj.key
  })

  if (x.length <= 0) {
    array.push(obj)
  }

  return array
}
export { ArrayString }
