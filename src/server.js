import Hapi from '@hapi/hapi';
import routes from './routes.js';

const init = async () => {
    const server = Hapi.server({
        port: 9000,  // Port sesuai kriteria
        host: 'localhost',
    });

    server.route(routes);

    await server.start();
    console.log(`Server running on ${server.info.uri}`);
};

init();
