import { call, put, takeEvery } from 'redux-saga/effects'

import actionsConstants from '../actions/actions.constants'
import userServices from '../services/user.services'

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