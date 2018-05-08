const User = require('../models/user');
const db = require('../db');

const UserController = {};

// UserController.index = (req, res)=>{
//   User.findOne({name: "Name"}).then((result)=>{
//     console.log(result);
//     res.json({message: result.name});
//   });
// }

UserController.index = (req, res)=>{
  User.find({}).then((result)=>{
    console.log(result);
    res.json({message: "From server", result: result});
  });
}

UserController.create = (req, res)=>{
  let user = new User({
    name: req.body.name,
    password: 'Test'
  });
  user.save().then(()=>{
    console.log("User created");
    res.send();
  });
}

// UserController.update = (req, res)=>{
//
// }

UserController.delete = (req, res)=>{
  User.findOneAndRemove({_id: req.params.id}).then((result)=>{
      console.log(result);
      res.json({message: result.name});
    });
}

// UserController.addUserPick = (req, res)=>{
//
// }

// UserController.updateUserPick = (req, res)=>{
//
// }

// UserController.deleteUserPick = (req, res)=>{
//
// }

module.exports = UserController;
