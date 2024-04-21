import { fastifyConnectPlugin } from '@connectrpc/connect-fastify';
import { fastify } from 'fastify';

const host = Deno.env.get('HOSTNAME') || '127.0.0.1';
const port = parseInt(Deno.env.get('PORT') || '8080');

async function main() {
  const server = fastify({ logger: true });
  await server.register(fastifyConnectPlugin, {});
  server.get('/', (_, reply) => {
    reply.type('text/plain');
    reply.send('Hi. Vocalize API.');
  });
  await server.listen({ host: host, port: port });
}

void main();
