var express = require('express');
var router = express.Router();
let adminIndexController = require('../controllers/adminIndex');

router.get('/', adminIndexController.displayAdminIndexPage);

module.exports = router;
