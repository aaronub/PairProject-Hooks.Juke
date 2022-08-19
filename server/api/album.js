const router = require('express').Router()
const Album = require('../db/Album');

router.get('/albums', async (req, res, next) => {
    try {
        const albums = await Album.findAll();
        res.send(albums);
    } catch (error) {
        next(error)
    }
})

module.exports = router