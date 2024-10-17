import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import Ajv  from 'ajv';
const ajv = new Ajv();

const responseSchemaUsuario = {
    "type": "object",
    "properties": {
      "usuario": {"type": "object"},
      "error": { "type": "boolean" },
      "mensaje": { "type": "string" },
      "code": { "type": "integer" },
    },
    "required": ["error", "mensaje", "code","usuario"]
  }
  
  const responseSchema = {
    "type": "object",
    "properties": {
      "error": { "type": "boolean" },
      "mensaje": { "type": "string" },
      "code": { "type": "integer" }
    },
    "required": ["error", "mensaje", "code"]
  }

  const responseSchemaToken = {
    "type": "object",
    "properties": {
      "usuario": {"type": "object"},
      "token": {"type": "string"},
      "error": { "type": "boolean" },
      "mensaje": { "type": "string" },
      "code": { "type": "integer" },
    },
    "required": ["error", "mensaje", "code","token", "usuario"]
  }
  

let response;
let token;
let id;


Given('que soy un usuario', function () {

});

Given('que soy un usuario no autenticado', function () {

});

Given('que mi usuario con email "xxx@example.com" existe', function () {

    
});

Given('que no existe un usuario con email "noRegistrado@example.com"', function () {

    
});

Then('recibo una respuesta con un código de estado {int}', function (expectedStatusCode) {

    const response = this.getApiResponse();
    const validate = ajv.compile(responseSchema);
    const valid = validate(response.data);
    expect(valid).to.be.true;
    expect(response.status).to.equal(expectedStatusCode);

});

Then('recibo una respuesta con usuario y un código de estado {int}', function (expectedStatusCode) {

    const response = this.getApiResponse();

    const validate = ajv.compile(responseSchemaUsuario);
    const valid = validate(response.data);
    expect(valid).to.be.true;
    expect(response.status).to.equal(expectedStatusCode);

});


Given('que soy un usuario autenticado', function () {

  
    const token = this.getToken();
    expect(token).to.exist;
    expect(token).to.not.be.empty;

});


