import * as StoreController from '../StoreController'

const express = require('express');

const router = express.Router();

router.get('/', StoreController.getAll);
router.post('/', StoreController.save);

module.exports = router;