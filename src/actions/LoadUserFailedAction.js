import { LoadUserFailed } from './TwitterActions';

class LoadUserFailedAction {
  constructor(error) {
    this.type = LoadUserFailed;
    this.payload = error;
  }
}

export default LoadUserFailedAction;
