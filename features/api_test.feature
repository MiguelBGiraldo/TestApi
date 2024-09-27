Feature: Gestión de usuarios

  Scenario: registrar cuenta
    Given que soy un usuario
    When envío una solicitud para agregar un nuevo usuario con nombre "Kevin", email "xxx@example.com" y contraseña "xxxx"
    Then recibo una respuesta con un código de estado 200

  Scenario: Loguear un usuario
    Given que mi usuario con email "xxx@example.com" existe
    When envío una solicitud para loguear con email "xxx@example.com" y contraseña "xxx"
    Then recibo una respuesta con un código de estado 200
    And recibo una respuesta con un token de autenticación

  Scenario: Actualizar mi cuenta
    Given que soy un usuario autenticado
    And estoy autenticado
    When envío una solicitud para actualizar el nombre de mi usuario a "usuarioActualizado"
    Then recibo una respuesta con un código de estado 200

  Scenario: Eliminar mi cuenta
    Given que soy un usuario registrado
    And estoy autenticado
    When envío la solicitud para eliminar mi cuenta
    Then recibo una respuesta con un código de estado 200

 
