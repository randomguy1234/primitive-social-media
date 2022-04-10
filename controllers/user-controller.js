const { User }= require('../models');

const userController= {
    //find all users
    seeAllUsers(req, res) 
    {
        User.find({})
            .then(dbUserData => res.json(dbUserData))
            .catch(error => {
                console.log(error);
                res.status(400).json(error);
            });
    },

    //find 1 user by its id
    seeOneUser({params}, res)
    {
        User.findOne({_id: params.id})
            .then(dbUserData => {
                if (!dbUserData)
                {
                    res.status(404).json({message: "Can't find any users with this id."});
                    return;
                }
                
                res.json(dbUserData);
            })
            .catch(error => {
                console.log(error);
                res.status(400).json(error);
            });

    },

    //create new user
    newUser({body}, res)
    {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(error => {
            console.log(error);
            res.status(400).json(error);
        });
    },

    //update user by its id
    editUser({params, body}, res)
    {
        User.findOneAndUpdate({_id: params.id}, body, {new: true})
        .then(dbUserData => {
            if (!dbUserData)
            {
                res.status(404).json({message: 'No user with this id exists.'});
                return;
            }
            
            res.json(dbUserData);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json(error);
        });
    },

    //delete a user by its id
    removeUser({params}, res)
    {
        User.findOneAndDelete({_id: params.id})
        .then(dbUserData => {
            if (!dbUserData)
            {
                res.status(404).json({message: 'No user to remove with this id.'});
                return;
            }
            
            res.json(dbUserData);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json(error);
        });
    }
};

module.exports= userController;