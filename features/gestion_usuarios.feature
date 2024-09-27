Feature: Gestión de usuarios

  Scenario: registrar cuenta
    Given que soy un usuario
    When envío una solicitud para agregar un nuevo usuario con nombre "Kevin", email "xxx@example.com" y contraseña "xxxx"
    Then recibo una respuesta con un código de estado 200

  Scenario: Error al registrar cuenta con email ya existente
    Given que soy un usuario
    And existe un usuario con email "xxx@example.com"
    When envío una solicitud para agregar un nuevo usuario con nombre "Kevin", email "xxx@example.com" y contraseña "xxxx"
    Then recibo una respuesta con un código de estado 400

  Scenario: Actualizar mi cuenta
    Given que soy un usuario autenticado
    And estoy autenticado
    When envío una solicitud para actualizar el nombre de mi usuario a "usuarioActualizado"
    Then recibo una respuesta con un código de estado 200

 Scenario: Error al actualizar mi cuenta sin autenticación
    Given que soy un usuario no autenticado
    When envío una solicitud para actualizar el nombre de mi usuario a "usuarioActualizado"
    Then recibo una respuesta con un código de estado 401
    
  Scenario: Eliminar mi cuenta
    Given que soy un usuario registrado
    And estoy autenticado
    When envío la solicitud para eliminar mi cuenta
    Then recibo una respuesta con un código de estado 200

  Scenario: Error al eliminar mi cuenta sin permisos adecuados
    Given que soy un usuario autenticado
    And no tengo permisos para eliminar cuenta
    When envío la solicitud para eliminar mi cuenta
    Then recibo una respuesta con un código de estado 403

