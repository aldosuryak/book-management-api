const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const authenticate = require('../middleware/auth');
const { bookValidationRules, validate } = require('../validators/bookValidator');

// All routes are protected
router.use(authenticate);

router.post('/', bookValidationRules(), validate, bookController.create);
router.get('/', bookController.getAll);
router.get('/:id', bookController.getById);
router.put('/:id', bookValidationRules(), validate, bookController.update);
router.delete('/:id', bookController.delete);

module.exports = router;