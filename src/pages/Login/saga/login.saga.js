import { call, put, takeEvery } from 'redux-saga/effects'

import LoginService from '../services/login.services'
import actionsConstants from '../../../config/constants/actions.constants'

function * Login(action) {
  try {
    const data = yield call(LoginService.login, action.payload)
    console.log(data)
    
    if(data.status !== 200){
      return yield put({
        type: actionsConstants.failFetchLogin,
        payload: data
      })
    }

    if(data.res.data.auth.access_token){
      yield put({
        type: actionsConstants.saveToken,
        payload: data.res.data.auth.access_token
      })
    }

    yield put({
      type: actionsConstants.successFetchLogin,
      payload: data
    })

  }
  catch (e) {
    yield put({
      type: actionsConstants.failFetchLogin,
      message: e.message
    })
  }
}

export function * loginSaga() {
  yield takeEvery(actionsConstants.fetchLogin, Login)
}
