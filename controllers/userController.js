// babch n9adro nktbo f fichier json   
// const fs = require('fs')
const {readData,writeData}=require("../data/store")
// const {users}=require('../data/store')


function createUser(req,res){
    const data=readData()
    const {name,email,phone}=req.body;
    if(!name || !email || !phone){
        return res.status(400).json({message:"tout champs obligatoires "})
    }
    const newUser={
        ID:Date.now(),
        name,
        email,
        phone,
        
    }
    data.users.push(newUser)
    writeData(data)
    res.status(201).json(newUser)

}




function readUser(req,res){
    const {users}=readData()
    if(!users){
        res.status(404).json({message:"ne trouve aucun user"})
        return
    }
    else{
        res.status(200).json(users)

    }
}

function userId(req,res){
    data=readData()
    const user=data.users.find(us=>us.ID==req.params.id)

    if(!user){
        res.status(404).json({message:"cette utilisateur non trouvé"} )
        return
    }
    else{
        res.status(200).json(user)
    }
}



function updateUser(req,res){
    data=readData()
    
    const user=data.users.findIndex(us=>us.ID== req.params.id)
    if(user===-1){
        res.status(404).json({message:"cette utilisateur non trouvé"})
        return
    }
    else{
        const {name,email,phone}=req.body
        data.users[user].name=name
        data.users[user].email=email
        data.users[user].phone=phone
        writeData(data)
        res.status(200).json(data.users[user])
    }
}

function deleteUser(req,res){
        data=readData()
        const user=data.users.findIndex(us=>us.ID==req.params.id)
        if(user=== -1){
            res.status(404).json({message:"cette utilisateur non trouvé"})
        return

        }
        else{
            data.users.splice(user,1)
            writeData(data)
            res.status(200).json({message:"utilisateur est supprimé"})
        }

}
module.exports={createUser,readUser,userId,updateUser,deleteUser}