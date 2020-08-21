const express = require('express');
const routes = require('./routes');
const server = express();


server.use(express.json());
server.use(routes);

module.exports = function() {
    server.listen(process.env.PORT, () => {
        console.log(`O Server está rodando no http://localhost:${process.env.PORT}`)
    });
}()