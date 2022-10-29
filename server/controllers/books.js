// define the book model
import booksModel from '../models/books.js';

/* GET books List page. READ */
export function displayBookList(req, res, next) {
    // find all books in the books collection
    booksModel.find((err, booksCollection) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Book List', page: 'books/list', books: booksCollection });
    });
}

//  GET the Book Details page in order to add a new Book
export function displayAddPage(req, res, next) {

    router.get('/add', function(req, res) {

        res.render('books/add.ejs', {
      
          title: 'Add Book',
      
          book: {},
      
        });
      
      });
}

// POST process the Book Details page and create a new Book - CREATE
export function processAddPage(req, res, next) {

    router.post('/add', function(req, res) {

        let book = new Book({
      
          title: req.body.title,
      
          author: req.body.author,
      
          genre: req.body.genre,
      
          read: req.body.read,
      
        });
      
        book.save(function(err) {
      
          if (err) {
      
            console.log(err);
      
            return;
      
          } else {
      
            res.redirect('/books');
      
          }
      
        });
      
      });
}

// GET the Book Details page in order to edit an existing Book
export function displayEditPage(req, res, next) {

    router.get('/:id', function(req, res) {

        let id = req.params.id;
      
        Book.findById(id, function(err, book) {
      
          if (err) {
      
            console.log(err);
      
            return;
      
          }
      
          res.render('books/details.ejs', {
      
            title: 'Edit Book',
      
            book: book,
      
          });
      
        });
      
      });

}

// POST - process the information passed from the details form and update the document
export function processEditPage(req, res, next) {
    router.post('/:id', function(req, res) {

        let id = req.params.id;
      
        let book = new Book({
      
          _id: id,
      
          title: req.body.title,
      
          author: req.body.author,
      
          genre: req.body.genre,
      
          read: req.body.read,
      
        });
      
        Book.update({_id: id}, book, function(err) {
      
          if (err) {
      
            console.log(err);
      
            return;
      
          }
      
          res.redirect('/books');
      
        });
      
      });
}

// GET - process the delete by user id
export function processDelete(req, res, next) {
    router.get('/delete/:id', function(req, res) {

        let id = req.params.id;
      
        Book.remove({_id: id}, function(err) {
      
          if (err) {
      
            console.log(err);
      
            return;
      
          }
      
          res.redirect('/books');
      
        });
      
      });
}