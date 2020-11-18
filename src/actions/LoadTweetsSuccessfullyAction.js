import { LoadTweetsSuccessfully } from './TwitterActions';

class LoadTweetsSuccessfullyAction {
  constructor(tweets) {
    this.type = LoadTweetsSuccessfully;
    this.payload = tweets;
  }
}

export default LoadTweetsSuccessfullyAction;
