const responseSchemaUsuario = {
    "type": "object",
    "properties": {
      "usuario": {"type": "object"},
      "error": { "type": "boolean" },
      "mensaje": { "type": "string" },
      "code": { "type": "integer" },
    },
    "required": ["error", "mensaje", "code","usuario"]
  }
  
  export default responseSchemaUsuario;