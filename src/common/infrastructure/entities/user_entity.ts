export default class User {
  name: string;
  lastName: string;

  constructor({name, lastName}: {name: string; lastName: string}) {
    this.name = name;
    this.lastName = lastName;
  }
}
