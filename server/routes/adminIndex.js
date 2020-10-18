var express = require('express');
var router = express.Router();
let adminIndexController = require('../controllers/adminIndex');

router.get('/', adminIndexController.displayAdminIndexPage);
router.get('/add', adminIndexController.displayAdminAddPage )

module.exports = router;
