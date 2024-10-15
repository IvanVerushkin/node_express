const express = require('express');
const router = express.Router();

// Авторизация пользователя
router.post('/login', (req, res) => {
	res.status(201).json({ id: 1, mail: "iverushkin@rnd.beeline.ru" });
});

module.exports = router;