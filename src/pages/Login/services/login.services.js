import routes from '../routes'
import { Fetch } from '../../../tools/fetch'
import { resValidator } from '../../../tools/requests'

class LoginService {

  async login (payload) {
    return Fetch('post', routes.LOGIN, payload)
      .then(res => {
        return resValidator(res)
      })
      .catch(err => {
        return resValidator(err)
      })
  }
  
}

export default new LoginService()