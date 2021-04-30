const { nanoid } = require('nanoid');
const books = require('./books');

const addNoteHandler = (request, h) => {
    const { name, year, author,summary, publisher, pageCount, readPage, finished, reading } = request.payload;

    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;


    const NewBook = {
        id, name, year, author,summary, publisher,pageCount, readPage, finished,reading, createdAt, updatedAt
    };

    books.push(NewBook);

    const isSuccess = books.filter((book) => book.id === id).length > 0;

    if(isSuccess){
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil ditambahkan',
            data:{
                bookId: id
            },
        });
        response.code(201);
        return response;
    }
    

};

module.exports = { addNoteHandler };