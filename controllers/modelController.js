let { Model } = require('mongoose');

Model = require('../models/model');

exports.index = function(req, res) {
  Model.get(function(err, model) {
    if (err) {
      res.json({
        status: `error`,
        message: err,
      });
    }
    res.json({
      status: `success`,
      message: `Model retreieved successfully`,
      data: model,
    });
  });
};

// Handle Create
exports.new = function(req, res) {
  const model = new Model();
  model.name = req.body.name;
  model.constituency = req.body.constituency;
  model.email = req.body.email;

  model.save(function(err) {
    if (err) res.json(err);

    res.json({
      message: `New model created!`,
      data: model,
    });
  });
};

// Handle View
exports.view = function(req, res) {
  Model.findById(req.params.model_id, function(err, model) {
    if (err) res.send(err);
    res.json({
      message: `Model details loading...`,
      data: model,
    });
  });
};

// Handle updates
exports.update = function(req, res) {
  Model.findById(req.params.model_id, function(err, model) {
    if (err) res.send(err);

    model.name = req.body.name ? req.body.name : model.name;
    model.email = req.body.email;
    model.constituency = req.body.constituency;

    // Save model
    model.save(function(err) {
      if (err) res.json(err);
      res.json({
        message: `COntact Info updated`,
        data: contact,
      });
    });
  });
};

// Handle delete
exports.delete = function(req, res) {
  Model.remove(
    {
      _id: req.params.model_id,
    },
    function(err, model) {
      if ((err, model)) res.send(err);

      res.json({
        status: `Success`,
        message: `Model Deleted`,
      });
    }
  );
};
