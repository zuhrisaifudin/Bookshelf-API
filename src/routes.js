const { addNoteHandler } = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addNoteHandler,
        options: {
            cors: {
              origin: ['*'],
            },
        },
     },
];
module.exports = routes;