const express = require('express');
const router = express.Router();
let books = [];

router.get('/', (req, res) => {
	res.status(200).json(books);
});

router.get('/:id', (req, res) => {
	const book = books.find(b => b.id === req.params.id);
	if (book) {
		res.status(200).json(book);
	} else {
		res.status(404).send('undefined');
	}
});

router.post('/', (req, res) => {
	const newBook = { ...req.body, id: `${books.length + 1}` };
	books.push(newBook);
	res.status(201).json(newBook);
});

router.put('/:id', (req, res) => {
	const bookIndex = books.findIndex(b => b.id === req.params.id);
	if (bookIndex !== -1) {
		books[bookIndex] = { ...books[bookIndex], ...req.body };
		res.status(200).json(books[bookIndex]);
	} else {
		res.status(404).send('undefined');
	}
});

router.delete('/:id', (req, res) => {
	const bookIndex = books.findIndex(b => b.id === req.params.id);
	if (bookIndex !== -1) {
		books.splice(bookIndex, 1);
		res.status(200).send('ok');
	} else {
		res.status(404).send('undefined');
	}
});

module.exports = router;