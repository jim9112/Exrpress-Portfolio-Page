const express = require('express');
const mainRoutes = require('./routes');
const app = express();

app.use('/static', express.static('public'));


app.set('view engine', 'pug');



app.use(mainRoutes);


app.listen(3000, () => {
    console.log('The App is running at localhost:3000');
});