export default class Session {
  isLoogedIn: boolean;
  token: string;

  constructor({isLoggedIn, token}: {isLoggedIn: boolean; token: string}) {
    this.isLoogedIn = isLoggedIn;
    this.token = token;
  }
}
