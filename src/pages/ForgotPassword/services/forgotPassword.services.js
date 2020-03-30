import routes from '../routes'
import { Fetch } from '../../../tools/fetch'
import { resValidator } from '../../../tools/requests'

/**
 * This services are for make the requests related to the Forgot Password functionality
 */
class ForgotPasswordServices {
  async forgotPassword (payload) {
    return Fetch('post', routes.FORGOT_PASSWORD, payload)
      .then(res => {
        console.log(res)
        return resValidator(res)
      })
      .catch(err => {
        return resValidator(err)
      })
  }
}

export default new ForgotPasswordServices()