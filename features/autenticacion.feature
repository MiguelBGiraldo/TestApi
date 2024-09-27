Feature: Autenticacion

    Scenario: Loguear un usuario
        Given que mi usuario con email "xxx@example.com" existe
        When envío una solicitud para loguear con email "xxx@example.com" y contraseña "xxx"
        Then recibo una respuesta con un código de estado 200
        And recibo una respuesta con un token de autenticación

    Scenario: Error al loguear con contraseña incorrecta
        Given que mi usuario con email "xxx@example.com" existe
        When envío una solicitud para loguear con email "xxx@example.com" y contraseña "contraseñaIncorrecta"
        Then recibo una respuesta con un código de estado 401

    Scenario: Error al loguear con email no registrado
        Given que no existe un usuario con email "noRegistrado@example.com"
        When envío una solicitud para loguear con email "noRegistrado@example.com" y contraseña "cualquierContraseña"
        Then recibo una respuesta con un código de estado 404

    Scenario: Error al loguear con campos vacíos
        Given que soy un usuario
        When envío una solicitud para loguear sin proporcionar email y contraseña
        Then recibo una respuesta con un código de estado 400

    Scenario: Intento de acceso a recurso protegido sin autenticación
        Given que soy un usuario no autenticado
        When intento acceder a un recurso protegido
        Then recibo una respuesta con un código de estado 401
    
    Scenario: Sesión expirada por token de autenticación inválido
        Given que soy un usuario autenticado
        And mi token de autenticación ha expirado
        When envío una solicitud a un recurso protegido
        Then recibo una respuesta con un código de estado 401
        