Feature: Gestión de usuarios

  Scenario: Actualizar mi cuenta
    Given que soy un usuario autenticado
    When envío una solicitud para actualizar el nombre de mi usuario a "usuarioActualizado"
    Then recibo una respuesta con usuario y un código de estado 200

 Scenario: Error al actualizar mi cuenta sin autenticación
    Given que soy un usuario no autenticado
    When envío una solicitud para actualizar el nombre de mi usuario a "usuarioActualizado" sin token
    Then recibo una respuesta con un código de estado 401

  Scenario: Obtener un usuario por su id exitosamente
    Given que soy un usuario autenticado
    When envío la solicitud para obtener un usuario con id existente
    Then recibo una respuesta con usuario y un código de estado 200

  Scenario: Obtener un usuario por su id incorrectamente
    Given que soy un usuario autenticado
    When envío la solicitud para obtener un usuario con id no existente
    Then recibo una respuesta con un código de estado 404


  Scenario: Eliminar mi cuenta
    Given que soy un usuario autenticado
    When envío la solicitud para eliminar mi cuenta
    Then recibo una respuesta con usuario y un código de estado 200

  Scenario: Error al eliminar mi cuenta sin permisos adecuados
    Given que soy un usuario autenticado
    When envío la solicitud para eliminar mi cuenta con token invalido
    Then recibo una respuesta con un código de estado 401



