const { addNoteHandler, getAllNotesHandler, getNotesByIdHandler, updateNoteByIdHandler, deleteNoteByIdHandler } = require("./handler");

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
      },
      {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNotesByIdHandler
      },
      {
        method: 'PUT',
        path: '/notes/{id}',
        handler: updateNoteByIdHandler,
      },
      {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler
      }
];

module.exports = routes;