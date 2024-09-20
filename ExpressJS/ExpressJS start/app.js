const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// Logging middleware
app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} request for '${req.url}'`);
    next();
});
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));
let books = [
    { id: 1, title: 'SunShine', author: 'Zin Htet' },
    { id: 2, title: 'Flower', author: 'Jue Jue' },
    { id: 3, title: 'Raining', author: 'Rose' },
];

app.get('/books', async (req, res) => {
    try {
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.get('/books/:id', async (req, res) => {
    console.log(req.params)
    try {
        const book = books.find(b => b.id === parseInt(req.params.id));
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.post('/books', async (req, res) => {
    console.log(req.body)
    try {
        const newBook = {
            id: books.length + 1,
            title: req.body.title,
            author: req.body.author
        };
        books.push(newBook);
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.put('/books/:id', async (req, res) => {
    try {
        const book = books.find(b => b.id === parseInt(req.params.id));
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }
        book.title = req.body.title;
        book.author = req.body.author;
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.delete('/books/:id', async (req, res) => {
    try {
        books = books.filter(b => b.id !== parseInt(req.params.id));
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});