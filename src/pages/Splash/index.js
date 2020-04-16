import React from 'react'
import { connect } from 'react-redux'
import withRequestHandler from '../../hoc/withRequestHandler'
import SplashTemplate from './templates/SplashTemplate'

function Splash({ history, responseHandler, TOKEN }) {

  const onSuccess = () => {

    setTimeout( ()=>{
      return history.push('/main/dashboard')
    }, 2500)
  }

  const onFail = () => {
    setTimeout( ()=>{
      return history.push('/login')
    }, 2500)
  }

  responseHandler({status: 200, data: TOKEN}, onSuccess, onFail)

  return (
    // <SafeAreaView style={{ height: SCREEN_HEIGHT, width: SCREEN_WIDTH }}>
      <SplashTemplate/>
    // </SafeAreaView>
  );
}

const mapStateToProps = (state, props) => {
  return {
    TOKEN: state.initReducers.TOKEN
  }
}

const redux = connect(mapStateToProps, null )(Splash)
export default withRequestHandler ( !redux ? Login : redux )