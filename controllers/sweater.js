const Sweater = require('../models/sweater');


let SweaterController = {
  list: function(req, res) {
    Sweater.find().then(function(sweaters) {
      res.render('sweater/list', {
        sweaters: sweaters
      })
    })

  },

  add: function(req, res) {
    let name = req.body.name;
    let pockets = req.body.pockets;
    let materials = {
      primary: req.body.materialPrimary,
      secondary: req.body.materialSecondary
    }
    let colors = req.body.color;
    let newSweater = new Sweater({
      name: name,
      pockets: pockets,
      materials: materials,
      colors: colors
    });
    newSweater.save(function() {


      res.redirect('/sweater');
    });

  },

  delete: function(req, res) {
    let sweaterId = req.params.id;
    Sweater.deleteOne({
      "_id": sweaterId
    }).then(function(sweaters) {
      res.redirect('/sweater');
    })

  },

  update: function(req, res) {
    let sweaterId = req.params.id;
    Sweater.findOne({
      "_id": sweaterId
    }).then(function(sweater) {
      res.render('update/update', sweater);

    })
  },

  complete: function(req, res) {
    let sweaterId = req.body.id;
    let name = req.body.name;

    let pockets = req.body.pockets;
    let materials = {
      primary: req.body.materialPrimary,
      secondary: req.body.materialSecondary
    }
    let colors = req.body.color;

    Sweater.updateOne({
      _id: sweaterId
    }, {
      $set: {
        name: name,
        pockets: pockets,
        materials: materials
      },
        $addToSet: {
          colors: colors
        }
  
    }).then(function(result) {
      res.redirect('/sweater');
    });
  }


};


module.exports = SweaterController;
