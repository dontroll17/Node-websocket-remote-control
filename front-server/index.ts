import {httpServer} from './src/http_server/index';

const HTTP_PORT = 8081;

console.log(`http://localhost:${HTTP_PORT}`);
httpServer.listen(HTTP_PORT);
