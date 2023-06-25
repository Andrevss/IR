const express = require('express');
const app = express();
const userRoutes = express.Router();

let User = require('../model/User');

userRoutes.route('/add').post(function (req, res) {
  let user = new User(req.body);
  user.save()
  .then(user => {
    res.status(200).json({'status': 'success','msg': 'user added successfully'});
  })
  .catch(err => {
    res.status(409).send({'status': 'failure','msg': 'unable to save to database'});
  });
});

// api to get users
userRoutes.route('/').get(function (req, res) {
  User.find(function (err, users){
    if(err){
      res.status(400).send({'status': 'failure','msg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','users': users});
    }
  });
});

// api to get user
userRoutes.route('/:id').get(function (req, res) {
  let id = req.params.id;
  User.findById(id, function (err, user){
    if(err){
      res.status(400).send({'status': 'failure','msg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','user': user});
    }
  });
});



// api to update route
userRoutes.route('/update/:id').put(function (req, res) {
    User.findById(req.params.id, function(err, user) {
    if (!user){
      res.status(400).send({'status': 'failure','msg': 'Unable to find data'});
    } else {
        user.title = req.body.title;
        user.autor = req.body.autor;
        user.image = req.body.image;
        user.descricao = req.body.descricao;

        user.save().then(business => {
          res.status(200).json({'status': 'success','msg': 'Update complete'});
      })
    }
  });
});

// api for delete
userRoutes.route('/delete/:id').delete(function (req, res) {
  User.findByIdAndRemove({_id: req.params.id}, function(err,){
    if(err){
      res.status(400).send({'status': 'failure','msg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','msg': 'Delete successfully'});
    }
  });
});

module.exports = userRoutes;