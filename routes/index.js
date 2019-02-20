const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

// Routing for the index or home screen
router.get('/', (req, res) => {  
    const templateData = { projects };
    res.render('index', templateData);
});

// routing for the about page
router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;