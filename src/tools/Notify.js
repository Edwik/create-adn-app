import { StyleSheet } from 'react-native'
import Theme from './Theme'
import store from './../store'
import { SendToast, ClearToastData } from './../components/Toast/actions'

const Notify = (message, type) => {
  store.dispatch(ClearToastData())
  store.dispatch(
    SendToast({
      message,
      style: styles[type]
    })
  )
}

const styles = StyleSheet.create({
  info: {
    backgroundColor: Theme().INFO_COLOR
  },
  warning: {
    backgroundColor: Theme().WARNING_COLOR
  },
  success: {
    backgroundColor: Theme().SUCCESS_COLOR
  },
  error: {
    backgroundColor: Theme().ERROR_COLOR}
})

export { Notify }
