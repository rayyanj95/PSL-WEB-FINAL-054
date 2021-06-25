const Post = require('../models/match');
const slugify = require('slugify');

exports.create = (req, res) => {
    // console.log(req.body);
    const { first, second, city } = req.body;
    const slug = slugify(title);
    // validate
    switch (true) {
        case !first:
            return res.status(400).json({ error: 'First Team missing' });
            break;
        case !second:
            return res.status(400).json({ error: 'Second Team Missing' });
            break;
        case !city:
            return res.status(400).json({ error: 'City Missing' });
            break;
    }
    // create post
    Post.create({ title, content, user, slug }, (err, post) => {
        if (err) {
            console.log(err);
            res.status(400).json({ error: 'Duplicate post. Try another title' });
        }
        res.json(post);
    });
};
