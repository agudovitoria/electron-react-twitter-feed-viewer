import { LoadTweetsFailed } from './TwitterActions';

class LoadTweetsFailedAction {
  constructor(error) {
    this.type = LoadTweetsFailed;
    this.payload = error;
  }
}

export default LoadTweetsFailedAction;
