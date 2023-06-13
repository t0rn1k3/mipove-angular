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
            "_id" : "07",
            "name" : "All"
        },
        {
        "_id" : "1",
        "name": "ავეჯის დამზადება/ შეკეთება",
      },
      {
        "_id" : "2",
        "name": "მხატვრობა",
      },
      {
        "_id" : "3",
        "name": "ქრომირება",
      },
      {
        "_id" : "4",
        "name": "საათის შეკეთება",
      },
      {
        "_id" : "5",
        "name": "ტყავის დამუშავება"
      },
      {
        "_id" : "6",
        "name": "დიზაინი",
      }
    ]
    res.json(categories)
})

router.get('/professionals', (req , res) => {
    let professionals = [
        {
            "id" : "01",
            "name" : "კაჭკაჭა",
            "profilePicture" : "/assets/images/profile-images/kach.jpg",
            "phone" : "555555555",
            "profession" : "მხატვრობა",
            "tags" : ['Painting', 'Design']
        },
        {
            "id" : "2",
            "name" : "ამირან კაკაურიძე",
            "profilePicture" : "/assets/images/profile-images/amiran.jpg",
            "phone" : "555555555",
            "profession" : "მხატვრობა",
            "tags" : ['Painting']
        },
        {
            "id" : "3",
            "name" : "Green's Handcrafting ",
            "profileImage" : "/assets/images/profile-images/greens.jpg",
            "phone" : "555555555",
            "profession" : "ტყავის დამუშავება",
            "tags" : ['Leather']
        },
        {
            "id" : "4",
            "name" : "ირლე",
            "profilePicture" : "/assets/images/profile-images/irle.jpg",
            "phone" : "555555555",
            "profession" : "ქრომირება",
            "tags" : ['Chrome']
        }
    ]
    res.json(professionals)
})


router.get('/leaders', (req, res) => {
    let leaders = [
        {
            "id" : "1",
            "name" : "ირლე",
            "profession" : "ქრომირება",
            "phone" : "555555555",
            "imagePath" : "/assets/images/profile-images/irle.jpg"
        },
        {
            "id" : "2",
            "name" : "Green's Handcafting",
            "profession" : "ტყავის დამუშავება",
            "phone" : "555555555",
            "imagePath" : "/assets/images/profile-images/greens.jpg"
        },
        {
            "id" : "3",
            "name" : "ამირან კაკაურიძე",
            "profession" : "მხატვრობა",
            "phone" : "555555555",
            "imagePath" : "/assets/images/profile-images/amiran.jpg"
        },
        {
            "id" : "3",
            "name" : "კაჭკაჭა",
            "profession" : "მხატვრობა",
            "phone" : "555555555",
            "imagePath" : "/assets/images/profile-images/kach.jpg"
        },
    ]
    res.json(leaders)
})