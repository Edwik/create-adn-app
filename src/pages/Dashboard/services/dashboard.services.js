import routes from '../routes'
import { Fetch } from '../../../tools/fetch'
import { resValidator } from '../../../tools/requests'

/**
 * This services are for make the requests related to the Forgot Password functionality
 */
class DashboardServices {
  async getQuickNumbers () {
    return Fetch('get', routes.QUICK_NUMBERS)
      .then(res => {
        return resValidator(res)
      })
      .catch(err => {
        return resValidator(err)
      })
  }
}

export default new DashboardServices()
