const express = require('express')
const router = express.Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const db = 'mongodb+srv://Tornike:ChooseYourPassword1@events-db.gc9hf4s.mongodb.net/mipove';

mongoose.connect(db, err => {
    if (err) {
    console.log(err)
    }else {
    console.log('connected to mongoDB')
    }
})

router.get('/', (req, res)=> {
    res.send('From API route')
})

router.post('/register', (req, res)=> {
    let userData = req.body
    let user = new User(userData)
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error)
        }else {
            res.status(200).send(registeredUser)
        }
    })
})

router.post('/login', (req, res) => {
    let userData = req.body;
  
    User.findOne({ email : userData.email }, (error, user) => {
        if (error) {
            console.log(error)
        }else 
        if (!user) {
            res.status(401).send('Invalid email')
        }else
        if (user.password !== userData.password) {
            res.status(401).send('Invalid password')
        }
    })
})

module.exports = router 


router.get('/categories', (req, res) => {
    let categories =  [
        {
        "_id" : "1",
        "name": "ავეჯის დამზადება/ შეკეთება",
        "users" : [
        ]
      },
      {
        "_id" : "2",
        "name": "მხატვრობა",
        "users" : [
            {
                "user_id" : "01",
                "username" : "კაჭკაჭა",
                "profilePicture" : "https://www.instagram.com/p/CqTd8vErH54/"
            }
        ]
      },
      {
        "_id" : "3",
        "name": "ქრომირება",
        "users" : [
            {
                "user_id" : "03",
                "username" : "ირლე",
                "profilePicture" : "https://www.instagram.com/p/CsgTwCxsNkS/"
            }
        ]
      },
      {
        "_id" : "4",
        "name": "საათის შეკეთება",
        "users" : []
      },
      {
        "_id" : "5",
        "name": "ტყავის დამუშავება",
        "users" : [
            {
                "user_id" : "05",
                "username" : "Green's Handcrafting ",
                "profileImage" : "https://www.instagram.com/p/Cpdt67hsoj3/",
            }
        ]
      },
      {
        "_id" : "6",
        "name": "დიზაინი",
        "users" : [
        ]
      }
    ]
    res.json(categories)
})