const User = require("../models/User")


const userController = {
    index: (req, res) => {
       User.find({}).populate('users').then((users)=>{
            res.render("user/index", {users: users})

            // users is what you call in the handlebars ETC.

        } )
    },
    new:(req, res) => {
        res.render("user/new")
    },
    create: (req,res) => {
        console.log(req.body)
        User.create({
            username: req.body.username,
            firstName: req.body.firstName,
            lastName:req.body.lastName,
            password:req.body.password,
            email:req.body.email,
            img: req.body.img
        }).then( newUser => {
            res.redirect('/')
        })
    },
    show: (req,res) => {
        const userId = req.params.banana
        User.findById(userId).populate({path:'recipes'}).then((userLink) =>{
            console.log(userLink)
            res.render('user/show', {userLink})
        })
    },
    edit:(req,res) => {
        const userId = req.params.banana
        res.render ('user/edit', {userId})
    },
    update:(req,res) =>{
        const userId = req.params.banana
        console.log(req.body)
        User.findByIdAndUpdate(userId, req.body, {new: true}).then((user) => {
            res.redirect(`/${userId}`)
        })
    },
    delete:(req,res) =>{
    const userId = req.params.id
        User.findByIdAndRemove(userId).then(() => {
            res.redirect('/')
            console.log(userId)
        })
    }
}