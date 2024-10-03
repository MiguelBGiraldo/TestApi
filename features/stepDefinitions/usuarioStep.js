import { Given, When, Then } from '@cucumber/cucumber';
import axios from 'axios';
// import {chai} from 'chai';
import { expect } from 'chai';

import { fa, faker } from '@faker-js/faker';
import Ajv from 'ajv';
const ajv = new Ajv();

let api = "http://localhost:8081/api/";
let response;

When('envío una solicitud para agregar un nuevo usuario con nombre "xxx", email "xxx@example.com" y contraseña "xxxx"', async function () {

    const apiUrl = api + "auth/register";

    let res;

    const email = faker.internet.email();
    const name =  faker.person.firstName();
    const password = faker.internet.password();
    try {
        res = await axios.post(apiUrl, {
            email,
            name,
            password,
            role: "USER_ROLE"
        } );
    } catch (err) {
        res = err.response;
    }

    // const user = {
    //     email,
    //     name, 
    //     password,
    //     id: res.data.usuario.id
    // };


    // this.setUsuario(user);

    this.setApiResponse(res);

});


When('envío una solicitud para agregar un nuevo usuario con nombre "xxx", email existente "xxx@example.com" y contraseña "xxxx"', async function () {

    const apiUrl = api + "auth/register";
    const name =  faker.person.firstName();
    const password = faker.internet.password();


    try {
        response = await axios.post(apiUrl, {
            email: "miguel@gmail.com",
            name,
            password,
            role: "USER_ROLE"
        });

    } catch (err) {
        response = err.response;
    }

    this.setApiResponse(response);

});

When('envío una solicitud para actualizar el nombre de mi usuario a "usuarioActualizado"', async function () {

    const user = this.getUsuario(); 
    const id = user.id;
    const token = this.getToken();

    const apiUrl = api + `usuario/update/${id}`;
    try {
        response = await axios.put(apiUrl,
            { name: faker.person.firstName() },

            {
                headers: {
                    Authorization: `Bearer ${token}` // Asegúrate de reemplazar `token` con la variable que contiene tu token
                },
            }
        );

    } catch (err) {
        response = err.response;
    }

    this.setApiResponse(response);
});

When('envío una solicitud para actualizar el nombre de mi usuario a "usuarioActualizado" sin token', async function () {

    const user = this.getUsuario(); 
    const id = user.id;

    const apiUrl = api + `usuario/update/${id}`;

    try {
        response = await axios.put(apiUrl,
            { name: faker.person.firstName() },
        );

    } catch (err) {
        response = err.response;
    }

    this.setApiResponse(response);
});


When('envío la solicitud para eliminar mi cuenta', async function () {

    const user = this.getUsuario(); 
    const id = user.id;
    const token = this.getToken();

    const apiUrl = api + `usuario/delete/${id}`;
    try {
        response = await axios.delete(apiUrl, {
            headers: {
                Authorization: `Bearer ${token}` // Asegúrate de reemplazar `token` con la variable que contiene tu token
            },
        }
        );

    } catch (err) {
        response = err.response;
    }

    this.setApiResponse(response);

});

When('envío la solicitud para eliminar mi cuenta con token invalido', async function () {

    const user = this.getUsuario(); 
    const id = user.id;

    const apiUrl = api + `usuario/delete/${id}`;
    try {
        response = await axios.delete(apiUrl, {
            headers: {
                Authorization: `Bearer 123456` // Asegúrate de reemplazar `token` con la variable que contiene tu token
            },
        }
        );

    } catch (err) {
        response = err.response;
    }

    this.setApiResponse(response);

});


When('envío una solicitud para recuperar mi clave con email "xxx@example.com"', async function () {

    const apiUrl = api + "auth/recuperarclave";
    
    try {
          response = await axios.post(apiUrl, {
            email: "miguel@gmail.com",
        });

    } catch (err) {
        response = err.response;
    }
    
    this.setApiResponse(response);

});


When('envío una solicitud para recuperar mi clave con email "noRegistrado@example.com"', async function () {

    const apiUrl = api + `auth/recuperarclave`;

    try {
        response = await axios.post(apiUrl, {
            email: "noRegistrado@example.com",
        });
    } catch (err) {
        response = err.response;
    }

    this.setApiResponse(response);

});


When('envío la solicitud para obtener un usuario con id existente', async function () {

    const user = this.getUsuario(); 
    const id = user.id;
    const token = this.getToken();

    const apiUrl = api + `usuario/${id}`;
    try {
        response = await axios.get(apiUrl, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }
        );

    } catch (err) {
        response = err.response;
    }
    this.setApiResponse(response);
});

When('envío la solicitud para obtener un usuario con id no existente', async function () {

    const user = this.getUsuario();
    const id = "111111111111111111111111";
    const apiUrl = api + `usuario/${id}`;

    const token = this.getToken();
    try {
        response = await axios.get(apiUrl, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }
        );

    } catch (err) {
        response = err.response;
    }
    
    this.setApiResponse(response);
});