const router = require('express').Router();

router.get('/', function(req, res) {
  res.json({
    status: `API is working`,
    message: `Welcome to RESTHUb`,
  });
});

// Import controller
const modelController = require('../controllers/modelController');

// Model Routes
router
  .route('/models')
  .get(modelController.index)
  .post(modelController.new);

router
  .route('/models/:model_id')
  .get(modelController.view)
  .patch(modelController.update)
  .put(modelController.update)
  .delete(modelController.delete);

// Export API routes
module.exports = router;
