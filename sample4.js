const fastify = require('fastify')({
    logger:true
});
fastify.get('/', async (request, reply) => {
    reply.type('application/json').code(200);
    return { hello: 'world'};
});
fastify.listen(30000, (err, address) => {
    if (err) throw err;
    fastify.log.info('App listening on ${adress}');
});