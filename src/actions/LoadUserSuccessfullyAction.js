import { LoadUserSuccessfully } from './TwitterActions';

class LoadUserSuccessfullyAction {
  constructor(userInfo) {
    this.type = LoadUserSuccessfully;
    this.payload = userInfo;
  }
}

export default LoadUserSuccessfullyAction;
