const express = require('express');

// express app
const app = express();

// requests listener
app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<p>home page</p>');
    res.sendfile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    // res.send('<p>about page</p>');
    res.sendfile('./views/about.html', { root: __dirname });
});

// redirects
app.get('/about-us', (req, res) => {
    res.redirect('about');
});

// 404 not found
app.use((req, res) => {
    res.sendfile('./views/404.html', { root: __dirname });
});