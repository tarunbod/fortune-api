var router = require('express').Router();
var fortunes = require('./fortunes');

router.get('/', function(req, res) {
    if (req.query['id']) {
        // res.json(fortunes.byId(req.query['id']));
        res.status(501).json({
            "success": false,
            "message": "Future implementation coming"
        });
    } else {
        var category = req.query['category'] || 'all';
        res.json({
            "success": true,
            "fortune": fortunes.random(category)
        });
    }
});

router.get('/categories', function(req, res) {
    res.json({
       "categories": fortunes.categories 
    });
})

module.exports = router;
