import { TweetsLoadFailed } from './TwitterActions';

class TweetsLoadFailedAction {
  constructor(error) {
    this.type = TweetsLoadFailed;
    this.payload = error;
  }
}

export default TweetsLoadFailedAction;
