const { body, validationResult } = require('express-validator');

const bookValidationRules = () => {
  return [
    body('title')
      .trim()
      .notEmpty().withMessage('Title is required')
      .isLength({ min: 1, max: 200 }).withMessage('Title must be between 1 and 200 characters'),
    
    body('author')
      .trim()
      .notEmpty().withMessage('Author is required')
      .isLength({ min: 1, max: 100 }).withMessage('Author must be between 1 and 100 characters'),
    
    body('year')
      .notEmpty().withMessage('Year is required')
      .isInt({ min: 1000, max: new Date().getFullYear() })
      .withMessage(`Year must be between 1000 and ${new Date().getFullYear()}`)
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array().map(err => ({
        field: err.path,
        message: err.msg
      }))
    });
  }
  next();
};

module.exports = {
  bookValidationRules,
  validate
};