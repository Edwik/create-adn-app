import { Fetch } from '../../../tools/fetch';
import routes from '../routes';

/**
 * This services are for make the requests related to the Forgot Password functionality
 */
class ForgotPasswordServices {
  async forgotPassword (payload) {
    return Fetch('get', routes.FORGOT_PASSWORD, payload)
      .then(res => {
        return res
      })
      .catch(err => {
        return err
      })
  }
}

export default new ForgotPasswordServices()