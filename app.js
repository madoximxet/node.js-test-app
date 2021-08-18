const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// requests listener
app.listen(3000);

app.use((req, res, next) => {
    console.log('New request:');
    console.log('host:', req.hostname);
    console.log('path:', req.path);
    console.log('method:', req.method);
    next();
});

app.get('/', (req, res) => {
        const blogs = [
        {title: 'Hello world', snippet:'Hi world'},
        {title: 'Hello boy', snippet:'Hi boys'},
        {title: 'Hello girl', snippet:'Hi girls'},
        ];
    res.render('index', {title: 'Home', blogs});
});

app.use((req, res, next) => {
    console.log('next middleware');
    next();
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create a new blog'});
});

 // 404 not found
 app.use((req, res) => {
    res.status(404).render('404', {title: '404 Error'});
});