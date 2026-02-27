

function validationUser(req,res,next){
    const {name,email,phone}=req.body
    if(!name || !email || !phone){
        res.status(400).json({message:"tous les champs sont obligatoires "})
        return
    }
    next()
}
module.exports={validationUser}