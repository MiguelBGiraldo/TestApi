import { Given, When, Then } from '@cucumber/cucumber';
import axios from 'axios';
import assert from 'assert';

// Datos de prueba
let response;
let logResponse;

let rutaApi = process.env.RUTA_API || "http://localhost:8081/api/";

let rutaLog = process.env.RUTA_LOGS || "http://localhost:8085/api/";
Given('que tengo un usuario con el email "user@example.com" y la contraseña incorrecta', function () {

    this.email = "usuarioIncorrecto@gmail.com";
    this.password = "contraseñaIncorrecta"; // Contraseña incorrecta intencionada
});

When('intento iniciar sesión con las credenciales incorrectas', async function () {
    try {
        // Hacer una petición a la API de autenticación con credenciales incorrectas
        response = await axios.post(`${rutaApi}auth/login`, {
            email: this.email,
            password: this.password
        });
    } catch (error) {
        response = error.response; // Capturamos el error 401 aquí
    }
});

Then('debería recibir una respuesta con un código de estado {int}', function (expectedStatusCode) {
    assert.strictEqual(response.status, expectedStatusCode);
});

Then('un log de error debería haberse registrado en el sistema de logs', async function () {
    // Consulta al sistema de logs para verificar que el log se haya guardado
    logResponse = await axios.get(`${rutaLog}logs/getLogs` );

    console.log(logResponse.data.data);

    // Verifica que el log existe en la respuesta
    const log = logResponse.data.data.find(log => log.application === "Auth" && log.className === "Login");
    assert(log, "El log no fue registrado correctamente.");

    // Verifica que la fecha del log esté cerca de la fecha actual
    const logDate = new Date(log.createdAt);
    const now = new Date();
    const timeDifference = Math.abs(now - logDate); // Diferencia en milisegundos

    // Verificar si la diferencia es menor a un límite de tiempo razonable (ej. 5 minutos)
    const maxDifferenceInMinutes = 1 * 60 * 1000; // 5 minutos en milisegundos
    assert(timeDifference < maxDifferenceInMinutes, `El log fue registrado fuera del tiempo esperado. Fecha del log: ${logDate}, Fecha actual: ${now}`);
});