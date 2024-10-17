
Feature: Integración entre gestión de usuarios y sistema de logs

  Scenario: Verificar la integración de sistema de gestión de usuarios y el sistema de logs
    Given que tengo un usuario con el email "user@example.com" y la contraseña incorrecta
    When intento iniciar sesión con las credenciales incorrectas
    Then debería recibir una respuesta con un código de estado 401
    And un log de error debería haberse registrado en el sistema de logs