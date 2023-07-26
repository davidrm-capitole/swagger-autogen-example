module.exports = function (app) {
  app.get("/users/:id", (req, res) => {
    // #swagger.tags = ['User']
    // #swagger.description = 'Endpoint para obtener un usuario.'
    // #swagger.parameters['id'] = { description: 'ID del usuario.' }

    /* #swagger.parameters['filtro'] = {
	       in: 'query',
               description: 'Un filtro cualquiera.',
               type: 'string'
        } */

    const filtro = req.query.filtro;

    if (false) return res.status(404).send(false);

    /* #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/User" },
               description: 'Usuario encontrado.' 
        } */
    return res.status(200).send(data);
  });

  app.post("/users", (req, res) => {
    /* #swagger.tags = ['User']
        #swagger.description = 'Endpoint para crear un usuario' */

    /* #swagger.parameters['newUser'] = {
           in: 'body',
           description: 'Información del usuario',
           required: true,
           schema: { $ref: "#/definitions/AddUser" }
    } */

    const newUser = req.body;

    if (true) {
      // #swagger.responses[201] = { description: 'Usuario registrado con éxito' }
      return res.status(201).send(data);
    }
    return res.status(500); // #swagger.responses[500]
  });
};
