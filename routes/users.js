const express=require('express')
const router=express.Router()
const {createUser,readUser,userId,updateUser,deleteUser}=require('../controllers/userController')
const {validationUser}=require('../middlewares/validate')
 

router.post('/',validationUser,createUser)
router.get('/',readUser)
router.get('/:id',userId)
router.put('/:id',validationUser,updateUser)
router.delete('/:id',deleteUser)



module.exports=router;