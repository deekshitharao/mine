var express = require('express');
var router = express.Router();

var ctrlwatches = require('../controller/watches');
var ctrlothers = require('../controller/others');

router.get('/signin',ctrlothers.signin);
/* GET Locations page. */
router.get('/',ctrlwatches.homelist);
router.get('/watch',ctrlwatches.watchInfo);

router.get('/watch/review/new',ctrlwatches.addReview);
/* get others page */
router.get('/about',ctrlothers.about);
router.get('/register',ctrlothers.register);
module.exports=router;
