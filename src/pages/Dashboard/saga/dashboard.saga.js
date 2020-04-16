import { call, put, takeEvery } from 'redux-saga/effects'

import DashboardServices from '../services/dashboard.services'
import actionsConstants from '../../../config/constants/actions.constants'

function * fetchQuickNumbers() {
  try {
    yield put({ type: actionsConstants.clearQuickNumbersData })
    const numbersResponse = yield call(DashboardServices.getQuickNumbers)
    if(numbersResponse.status !== 200) {
      return yield put({
        type: actionsConstants.failFetchQuickNumbers,
        payload: numbersResponse
      })
    }
    yield put({
      type: actionsConstants.successFetchQuickNumbers,
      payload: numbersResponse
    })
  }
  catch (e) {
    yield put({
      type: actionsConstants.failFetchQuickNumbers,
      message: e.message
    })
  }
}

export function * dashboardSaga() {
  yield takeEvery(actionsConstants.fetchQuickNumbers, fetchQuickNumbers)
}
