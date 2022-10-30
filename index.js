const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log("We got a new requets");
//     res.send('<h1>This is my Webpage!!!</h1>');
// })


app.get('/', (req, res) => {
    res.send("Welcome to the Homepage!!");
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit}</h1>`);
})

app.get('/r/:subreddit/:postID', (req, res) => {
    const { subreddit, postID } = req.params;
    res.send(`<h1>Viewing PostID ${postID}on  the ${subreddit}</h1>`);
})


app.post('/cats', (req, res) => {
    res.send("Post Request To Cats! Different from a get request!!");
})

app.get('/cats', (req, res) => {
    res.send("Meow!!");
})

app.get('/dogs', (req, res) => {
    res.send("woof!!");
})

app.get('/search', (req, res) => {
    console.log(req.query)
    const { q } = req.query;
    if (!q) {
        res.send("Nothing found if nothing searched")
    }
    res.send(`<h1>Search Result for: ${q}</h1>`)
})

app.get('*', (req, res) => {
    res.send("I dont know whoops!!!");
})



app.listen(8080, () => {
    console.log("Listening on port 8080");
})
