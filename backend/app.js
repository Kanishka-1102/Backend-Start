const express = require('express');
const app = express();
const port = process.env.PORT||3000;
app.listen(port);  
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get("/about-us", (req, res) => {
    res.redirect(301, '/about');
});
//get a list of 5 jokes 
app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'A joke',
            content: 'This is a joke'
        },
        {
            id:2,
            title:'Another joke',
            content: 'This is another joke'
        },
        {
            id:3,
            title:'yet another joke',
            content: 'This is yet another joke'
        },
        {
            id:4,
            title:'4th joke',
            content: 'This is 4th joke'
        },
        {
            id:5,
            title:' 5th joke',
            content: 'This is 5th joke'
        }
    ];
    res.send(jokes);
});

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', {root: __dirname });
});
app.use((req, res) => {
    res.status(404).send('Page not found');
});
