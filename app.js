const express = require('express');
const mainRoutes = require('./routes');
const projectRoutes = require('./routes/project');
const app = express();

// static server generation 
app.use('/static', express.static('public'));

app.set('view engine', 'pug');

// routs for index and projects
app.use(mainRoutes);
app.use('/project', projectRoutes);


// middleware for readable error
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// middleware to render error content
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error', err);
});

app.listen(3000, () => {
    console.log('The App is running at localhost:3000');
});