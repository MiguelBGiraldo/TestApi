const responseSchemaToken = {
    "type": "object",
    "properties": {
      "usuario": {"type": "object"},
      "token": {"type": "string"},
      "error": { "type": "boolean" },
      "mensaje": { "type": "string" },
      "code": { "type": "integer" },
    },
    "required": ["error", "mensaje", "code","token", "usuario"]
  }
  
  
export default responseSchemaToken;