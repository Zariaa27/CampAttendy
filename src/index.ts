import DB from "./db";
import chalk from "chalk";
import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
});

fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
});

fastify.get('/getOccupant:name', async function (request, reply) {
    let name = (request.params as { [key: string]: string }).name.replace(":", "")
    let occupant = await DB.getOccupant(name)
    reply.send(occupant)
});

fastify.get('/getAllFromGroup:group', async function (request, reply) {
  let group = (request.params as { [key: string]: string }).group.replace(":", "")
  console.log(group)
  let dbReply = await DB.getAllFromGroup(group)
  console.log(dbReply)
  reply.send(dbReply)
});


fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    console.log(chalk.green.bold('Server is now listening on localhost:3000'))
});