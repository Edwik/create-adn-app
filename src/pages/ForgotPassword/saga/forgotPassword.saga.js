import { call, put, takeEvery } from 'redux-saga/effects'

import forgotPasswordServices from '../services/forgotPassword.services'
import actionsConstants from '../../../config/constants/actions.constants'

function * sendForgotPasswordEmail(action) {
  try {
    const data = yield call(forgotPasswordServices.sendForgotPasswordEmail, action.payload)
    if(data.status !== 200){
      return yield put({
        type: actionsConstants.failSendForgotPasswordEmail,
        payload: data
      })
    }
    yield put({
      type: actionsConstants.successSendForgotPasswordEmail,
      payload: data
    })
  }
  catch (e) {
    yield put({
      type: actionsConstants.failSendForgotPasswordEmail,
      message: e.message
    })
  }
}

export function * forgotPasswordSaga() {
  yield takeEvery(actionsConstants.sendForgotPasswordEmail, sendForgotPasswordEmail)
}
