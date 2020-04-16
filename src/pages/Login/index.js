import React,{ useState } from 'react'
import { connect } from 'react-redux'
import withRequestHandler from '../../hoc/withRequestHandler'
import LoginTemplate from './template/LoginTemplate'
import {LoginAction} from './actions/login.actions'


function Login(props) {
  const { history, loading, setLoading, error, setError, responseHandler, LoginAction, REDUX } = props
  
  const [resMessage, setResMessage] = useState('')

  const onSuccess = () => {
    setResMessage(REDUX.res.message ? REDUX.res.message : '')
    console.log('succes')
    return history.push('/main/dashboard')
  }

  const onFail = () => {
    
    setResMessage(REDUX.res)
    console.log('fail'+resMessage)
  }

  responseHandler(REDUX, onSuccess, onFail)

  const onLogin = payload => {
    setLoading(true)
    LoginAction(payload)

  }

  return (
    <LoginTemplate 
      onLogin={onLogin}
      loading={loading}
      error={error}
      message={resMessage}
    />
  );
}

const mapStateToProps = (state, props) => {
  return {
    REDUX: state.loginReducers.LoginResponse
  }
}
const redux = connect(mapStateToProps, { LoginAction } )(Login)
export default withRequestHandler ( !redux ? Login : redux )