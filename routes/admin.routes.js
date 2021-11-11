const adminRouter = require('express').Router();
const Admin = require('../models/Admin');

//GET Routes
adminRouter.get('/', (req,res)=>{
    const { username, password } = req.body;
    Admin.find({})
    .then((result)=> res.status(200).send(result))
    .catch((err)=>res.status.apply(500).send('Something wrong'))
});

//POST Routes
adminRouter.post('/', (req, res) => {
    const { username, password } = req.body

    console.log(username, password)

    Admin.create({ username, password })
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((err) => {
        console.log(err)
        res.status(500).send("Something went wrong")
    })
    
});

//UPDATE Routes
adminRouter.put('/:id', (req, res) => { 
    Admin.findByIdAndUpdate({_id: req.params.id}, req.body) 
        .then(()=>{ Project.findOne({_id: req.params.id}) 
        .then((result)=>{ res.status(200).send(result) }) 
        .catch((err)=>{ 
            console.log(err) 
            res.status(500).send('Something went wrong') 
        }) 
    }) 
});

//REMOVE ROUTES
adminRouter.delete('/:id', (req, res)=>{
    Admin.findByIdAndRemove({_id: req.params.id})
    .then((result)=>{
        console.log(result)
        res.status(200).send("Item successfully deleted ")
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send("Something went wrong")
    })
})


module.exports = adminRouter;