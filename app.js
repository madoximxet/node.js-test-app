const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// requests listener
app.listen(3000);

app.get('/', (req, res) => {
        const blogs = [
        {title: 'The title1', snippet:'The snippet1'},
        {title: 'The title2', snippet:'The snippet2'},
        {title: 'The title3', snippet:'The snippet3'},
        ];
    res.render('index', {title: 'Home', blogs});
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