import { Given, When, Then } from '@cucumber/cucumber';
import axios from 'axios';
// import {chai} from 'chai';
import { expect } from 'chai';
// import responseSchemaToken from '../../schemas/conToken';
import Ajv  from 'ajv';
const ajv = new Ajv();

let response;
let token;
let id;

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


const api = process.env.RUTA_API || "http://localhost:8081/api/";

When('envío una solicitud para loguear con email "xxx@example.com" y contraseña "xxx"', async function () {

    const apiUrl = api + "auth/login";
    const user = this.getUsuario(); 

    console.log("Esta es la url")
    console.log(apiUrl);

    try {
        response = await axios.post(apiUrl, {
            email: user.email,
            password: user.password,
        });

        token = response.data.token;
        id = response.data.usuario.id;

    } catch (err) {
        response = err.response;
    }

    
    this.setApiResponse(response);

    
});

Then('recibo una respuesta con un token de autenticación', function () {

    const response = this.getApiResponse();
    const validate = ajv.compile(responseSchemaToken);
    const valid = validate(response.data);
    expect(valid).to.be.true;;
    expect(response.data.token).to.exist;
    expect(response.data.token).to.not.be.empty;
});


When('envío una solicitud para loguear con email "xxx@example.com" y contraseña "contraseñaIncorrecta"', async function () {

    const apiUrl = api + "auth/login";
    try {
      response = await axios.post(apiUrl, {
        email: "miguel@gmail.com",
        password: "contraseñaIncorrecta",
      });
    } catch (err) {
      response = err.response;
    }

    this.setApiResponse(response);
  });

  When('envío una solicitud para loguear con email "noRegistrado@example.com" y contraseña "cualquierContraseña"', async function () {

    const apiUrl = api + "auth/login";
    try {
      response = await axios.post(apiUrl, {
        email: "noRegistrado@example.com",
        password: "cualquierContraseña",
      });
    } catch (err) {
      response = err.response;
    }

    this.setApiResponse(response);
  });
  