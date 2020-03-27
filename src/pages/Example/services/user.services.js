import { Fetch } from '../../../tools/fetch';
import routes from '../routes';

/**
 * This services are for make all the requests related to the users functionality.
 */
class UserServices {
  async fetchUsers () {
    return Fetch('get', routes.USERS, null)
      .then(res => {
        return res
      })
      .catch(err => {
        return err
      })
  }
}

export default new UserServices()