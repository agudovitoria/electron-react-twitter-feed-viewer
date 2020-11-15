import { UserLoadFailed } from './TwitterActions';

class UserLoadFailedAction {
  constructor(error) {
    this.type = UserLoadFailed;
    this.payload = error;
  }
}

export default UserLoadFailedAction;
