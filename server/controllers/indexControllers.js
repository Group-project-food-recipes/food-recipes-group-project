const User = require('../models/user');
const {compare, encrypt} = require('../helpers')
const jwt = require('jsonwebtoken')
const axios = require('axios')

module.exports = {
    login : function(req, res, next){
        User.findOne({
            email : req.body.email
        }, function(err, user){
            if(err){
                res.status(400).json(err.message)
            }else{
                if(user){
                    if(compare(req.body.password, user.password)){
                        var token = jwt.sign({
                            id: user._id, 
                            email: user.email
                        }, process.env.secret);
                        res.status(200).json({
                            msg : "user login", 
                            token: token
                        })
                    }else{
                        res.status(400).json("wrong password")
                    }
                }else{
                    res.status(400).json({
                        message: "User not found"
                    })
                }
            }
        })   
    },
    register: function(req, res, next){
        User.create({
            email : req.body.email,
            password: encrypt(req.body.password),
            firstName: req.body.firstName,
            lastName: req.body.lastName
        }, function(err,users){
            if(err){
                res.status(400).json(err)
            }else{
                res.status(200).json({
                    msg : "User Created",
                    data: users
                })
            }
        })
    },
    loginGoogle: function(req, res, next){
        axios.get(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${req.body.token}`)
        .then(function (response) {
            let data = {
                email : response.data.email,
                picture: response.data.picture,
                name: response.data.picture,
                first_name: response.data.given_name,
                last_name: response.data.family_name
            }
            User.findOne({
                email : data.email
            }, function(err, user){
                if(err){
                    res.status(400).json(err.message)
                }else{
                    if(user){
                        var token = jwt.sign({
                            email: user.email
                        }, process.env.secret);
                        res.status(200).json({
                            msg : "user login", 
                            token: token,
                            name: data.name,
                            profile_pict: data.picture
                        })
                    }else{
                        User.create({
                            email : data.email,
                            firstName: data.first_name,
                            lastName: data.last_name,
                            provider: "google"
                        }, function(err,users){
                            if(err){
                                res.status(400).json(err)
                            }else{
                                var token = jwt.sign({
                                    email: users.email
                                }, process.env.secret);
                                res.status(200).json({
                                    msg : "User Created",
                                    token: token
                                })
                            }
                        })
                    }
                }
            })   
            
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}