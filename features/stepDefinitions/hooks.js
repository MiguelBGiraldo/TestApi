import { Before } from '@cucumber/cucumber';
import axios from 'axios';
import {  faker } from '@faker-js/faker';

let api = "http://localhost:8081/api/";
let userGlobal;
let tokenGlobal;

Before(async function () {
  // Crear un usuario dinámico con faker


  if(userGlobal){
    this.setToken(tokenGlobal);
    this.setUsuario(userGlobal);
    return;
  }
    


  const newUser = {
    email: faker.internet.email(),
    password: faker.internet.password(),
    name: faker.person.firstName(),
    role: "USER_ROLE",
  };

  // Crear el usuario en la API
  const res = await axios.post(api+'auth/register', {
    email: newUser.email,
    password: newUser.password,
    name: newUser.name,
    role: newUser.role,
  });

  newUser.id = res.data.usuario.id;


  // Iniciar sesión con el usuario recién creado
  const response = await axios.post(api+'auth/login', {
    email: newUser.email,
    password: newUser.password,
  });


  // Guardar el token y el usuario en el contexto de Cucumber
  this.setToken(response.data.token);
  this.setUsuario(newUser);

  userGlobal = newUser;
  tokenGlobal = response.data.token;

});