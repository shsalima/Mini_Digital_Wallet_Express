

function validationUser(req,res,next){
    const {name,email,phone}=req.body
    if(!name || !email || !phone){
        res.status(400).json({message:"tous les champs sont obligatoires "})
        return
    }
    next()
}

function validatewallet(req,res,next){
    const {user_id,name}=req.body
     if(!user_id || !name){
        res.status(400).json({message:"tous les champs sont obligatoires "})
     }
     next()
}



module.exports={validationUser,validatewallet}