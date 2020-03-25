import Pages from '../pages/export'

export const getReducers = () => {
  let reducersObject = {}
  Pages.forEach(page => {
    try {
      const pageReducers = require(`../pages/${page.name}/reducers`)
      reducersObject = {
        ...reducersObject,
        ...pageReducers.default
      }
    } catch(e) {}
  })
  return reducersObject
}

export const getSagas = () => {
  const sagasList = []

  Pages.forEach(page => {
    try {
      const pageSaga = require(`../pages/${page.name}/saga`)
      pageSaga.default.forEach(saga => sagasList.push(saga))
    } catch(e) {}
  })

  return sagasList
}