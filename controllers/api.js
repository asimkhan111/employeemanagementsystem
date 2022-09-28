const { response } = require('express')
const express = require('express')
 const db = require('../model/connection')
const router = express.Router()

router.get("/",(req,res) =>{
    res.render('home')
})
router.get("/insert",(req,res)=>{
    res.render('insert')
})
router.post("/",(req,res) =>{
    const {name,email,phone,city} = req.body
    const user = {name,email,phone,city}
    let sql = "INSERT INTO users SET ?"
    db.query(sql,user,(err,result)=>{
        if(err) console.log(err)
        else{
          res.redirect('/employe/showall')
        }
    })
})

router.get("/showall",(req,res)=>{
    let sql = "SELECT * FROM users";
    db.query(sql,(err,result)=>{
        if(err) console.log(err)
        else{
           
            res.render('list',{rows:result})
        }
    })
})


router.get("/delete",(req,res)=>{
    let sql = "SELECT * FROM users"
    db.query(sql,(err,result)=>{
        if(err) console.log(err)
        res.render("delete",{rows:result})
    })
})
router.get("/finaldelete/:id",(req,res)=>{
    let id = parseInt(req.params.id)
    let sql = "DELETE FROM users WHERE id="+id;
    db.query(sql,(err,result) =>{
        if(err) console.log(err)
        res.redirect("/employe/delete")
    })

})

router.get("/update",(req,res)=>{
    let sql = "SELECT * FROM users"
    db.query(sql,(err,result)=>{
        if(err) console.log(err)
        res.render("update",{rows:result})
    })
})

router.get("/finalupdate/:id",(req,res)=>{
   let id = parseInt(req.params.id)
   let sql = "SELECT * FROM users WHERE id="+id;
   db.query(sql,(err,result)=>{
    if(err) console.log(err)
    else{
        res.render('finalupdate',{record:result[0]})
    }
   })
})

router.post("/lastupdate",(req,res)=>{
    const {name,email,phone,city,id} = req.body
    let sql = `UPDATE users SET name='${name}', email='${email}', phone='${phone}', city='${city}' WHERE id=${id}`
    db.query(sql,(err,result)=>{
        if(err) console.log(err)
        else{
            res.redirect('/employe/update')
        }
    })
})

module.exports = router