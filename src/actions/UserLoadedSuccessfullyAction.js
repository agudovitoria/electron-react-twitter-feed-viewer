import { UserLoadedSuccessfully } from './TwitterActions';

class UserLoadedSuccessfullyAction {
  constructor(userInfo) {
    this.type = UserLoadedSuccessfully;
    this.payload = userInfo;
  }
}

export default UserLoadedSuccessfullyAction;
