// console.log('Hello World');
const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const notes = require('./notes');

const PORT = process.env.PORT || 5000;
const init = async () => {
    const server = Hapi.server({
        port: PORT,
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
        routes: {
            cors: {
              origin: ['*'],
            },
          },
    });

    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
    // console.log(notes)

}

init();
