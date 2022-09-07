import * as StoreController from '../StoreController'

const express = require('express');

const router = express.Router();

router.get('/:id', StoreController.getStoreById)
router.patch('/:id', StoreController.updateStore);
router.delete('/:id', StoreController.deleteStore)
router.get('/', StoreController.getAllStores);
router.post('/', StoreController.createStore);

module.exports = router;