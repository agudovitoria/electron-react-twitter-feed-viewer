import { LoadTweets } from './TwitterActions';

class LoadTweetsAction {
  constructor() {
    this.type = LoadTweets;
    this.payload = null;
  }
}

export default LoadTweetsAction;
