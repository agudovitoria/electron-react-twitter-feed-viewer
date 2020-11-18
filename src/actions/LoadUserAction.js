import { LoadUser } from './TwitterActions';

class LoadUserAction {
  constructor(username) {
    this.type = LoadUser;
    this.payload = username;
  }
}

export default LoadUserAction;
