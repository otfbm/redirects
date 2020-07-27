const fastify = require('fastify');

const server = fastify();

server.get('/*', (request, reply) => {
    const params = request.params["*"];
    const url = new URL(params, 'https://otfbm.io');
    reply.header('Location', url.href).status(301).send('');
});

server.listen(process.env.PORT || 3002, '0.0.0.0');