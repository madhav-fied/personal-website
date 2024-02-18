import express from "express";

import helpers from "./helpers.js";

const app = express();

app.use(express.json());

const PORT = 3100;

app.listen(PORT, () => {
    console.log(`App listening on port : ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Hello! World');
});

app.post('/api/cmd', (req, res) => {
    const payload = req.body;
    console.log(payload.data);
    res.send('got data')
});

app.get('/api/blogs', (req, res) => {
    console.log('getting');
    const blogList = helpers.getBlogs();
    console.log(`got ${blogList.length} items`);
    res.json(blogList);
});

app.get('/api/blogs/:blogId', (req, res) => {
    const blogId = parseInt(req.params.blogId);
    const blogContent = helpers.getBlogContentById(blogId);
    res.json({content: blogContent});
});
