import { setWorldConstructor } from '@cucumber/cucumber';

class CustomWorld {
  constructor() {
    this.token = null;       
    this.apiResponse = null;
    this.usuarioActual = null;
  }

  // Métodos opcionales para ayudar en el manejo de datos
  setToken(token) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }

  setApiResponse(response) {
    this.apiResponse = response;
  }

  getApiResponse() {
    return this.apiResponse;
  }

  setUsuario(usuario) {
    this.usuarioActual = usuario;
  }

  getUsuario() {
    return this.usuarioActual;
  }
}


setWorldConstructor(CustomWorld);