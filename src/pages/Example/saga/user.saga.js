import { call, put, takeEvery } from 'redux-saga/effects'

import userServices from '../services/user.services'
import actionsConstants from '../../../config/constants/actions.constants'

function * fetchUsers () {
  try{
    const data = yield call(userServices.fetchUsers)
    if(data.status !== 200){
      return yield put({
        type: actionsConstants.failFetchUsers,
        payload: data
      })
    }
    yield put({
      type: actionsConstants.successFetchUsers,
      payload: data
    })
  }
  catch (e){
    yield put({
      type: actionsConstants.failFetchUsers,
      message: e.message
    })
  }
}

export function * userSaga(){
  yield takeEvery(actionsConstants.fetchUsers, fetchUsers)
}