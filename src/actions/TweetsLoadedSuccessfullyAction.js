import { TweetsLoadedSuccessfully } from './TwitterActions';

class TweetsLoadedSuccessfullyAction {
  constructor(tweets) {
    this.type = TweetsLoadedSuccessfully;
    this.payload = tweets;
  }
}

export default TweetsLoadedSuccessfullyAction;
