import { setWorldConstructor } from '@cucumber/cucumber';

class CustomWorld {
  constructor() {
    this.apiUrl = '';
    this.response = null;
  }
}

setWorldConstructor(CustomWorld);