Feature: Autenticacion

    Scenario: registrar cuenta
        Given que soy un usuario
        When envío una solicitud para agregar un nuevo usuario con nombre "xxx", email "xxx@example.com" y contraseña "xxxx"
        Then recibo una respuesta con usuario y un código de estado 200

    Scenario: Error al registrar cuenta con email ya existente
        Given que soy un usuario
        And que mi usuario con email "xxx@example.com" existe
        When envío una solicitud para agregar un nuevo usuario con nombre "xxx", email existente "xxx@example.com" y contraseña "xxxx"
        Then recibo una respuesta con un código de estado 404

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
        Then recibo una respuesta con un código de estado 401

    Scenario: Recuperar clave correctamente
        Given que mi usuario con email "xxx@example.com" existe
        When envío una solicitud para recuperar mi clave con email "xxx@example.com"
        Then recibo una respuesta con un código de estado 200

    Scenario: Recuperar clave incorrectamente
        Given que no existe un usuario con email "noRegistrado@example.com"
        When envío una solicitud para recuperar mi clave con email "noRegistrado@example.com"
        Then recibo una respuesta con un código de estado 404


 
        