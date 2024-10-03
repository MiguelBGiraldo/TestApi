// import { Given, When, Then } from '@cucumber/cucumber';
// import axios from 'axios';
// // import {chai} from 'chai';
// import { expect } from 'chai';

// let response;
// let token;
// let id;

// Given('que soy un usuario', function () {
//   this.apiUrl = 'http://localhost:8081/api/auth/register';  // Cambia la URL por tu API
// });

// When('envío una solicitud para agregar un nuevo usuario con nombre "Kevin", email "xxx@example.com" y contraseña "xxxx"', async function () {
//   try {
//     response = await axios.post(this.apiUrl, {
//       name: "Kevin",
//       email: "xxx@example.com",
//       password: "xxxx",
//       roles: "USER_ROLE"
//     },
//     );


//   } catch (err) {
//     response = err.response;
//   }
// });




// Given('que mi usuario con email "xxx@example.com" existe', function () {
//   this.apiUrl = 'http://localhost:8081/api/auth/login';  // Cambia la URL por tu API
// });

// When('envío una solicitud para loguear con email "xxx@example.com" y contraseña "xxx"', async function () {
//   try {
//     response = await axios.post(this.apiUrl, {
//       email: "miguel@gmail.com",
//       password: "123456",
//     });

//     token = response.data.token;
//     id = response.data.usuario.id;

//   } catch (err) {
//     response = err.response;
//   }
// });

// Then('recibo una respuesta con un código de estado {int}', function (expectedStatusCode) {

//   expect(response.status).to.equal(expectedStatusCode);
// });

// Then('recibo una respuesta con un token de autenticación', function () {

//   expect(token).to.exist;
//   expect(token).to.not.be.empty;
// });


// Given('que soy un usuario autenticado', function () {
//   this.apiUrl = `http://localhost:8081/api/usuario/update/${id}`;  // Cambia la URL por tu API
// });


// When('envío una solicitud para actualizar el nombre de mi usuario a "usuarioActualizado"', async function () {

//   try {
//     response = await axios.put(this.apiUrl,
//       { name: "usuarioActualizado" },

//       {
//         headers: {
//           Authorization: `Bearer ${token}` // Asegúrate de reemplazar `token` con la variable que contiene tu token
//         },
//       }
//     );

//   } catch (err) {
//     response = err.response;
//   }

// });



// Given('que soy un usuario registrado', function () {
//   this.apiUrl = `http://localhost:8081/api/usuario/delete/${id}`;
// });

// Given('estoy autenticado', function () {

//   // expect(token).to.exist;
//   expect(token).to.exist;
//   expect(token).to.not.be.empty;
// });

// When('envío la solicitud para eliminar mi cuenta', async function () {

//   try {
//     response = await axios.delete(this.apiUrl, {
//       headers: {
//         Authorization: `Bearer ${token}` // Asegúrate de reemplazar `token` con la variable que contiene tu token
//       },
//     }
//     );

//   } catch (err) {
//     response = err.response;
//   }
// });




