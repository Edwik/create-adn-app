import Pages from '../pages/export'

export const getReducers = () => {
  let reducersObject = {}
  Pages.forEach(page => {
    if (page.reducers) {
      reducersObject = {
        ...reducersObject,
        ...page.reducers.default
      }
    }
  })
  return reducersObject
}

export const getSagas = () => {
  const sagasList = []

  Pages.forEach(page => {
    if (page.sagas) {
      page.sagas.default.forEach(saga => sagasList.push(saga))
    }
  })

  return sagasList
}