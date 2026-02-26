const express=require('express')
const router=express.Router()
const {createUser,readUser,userId,updateUser,deleteUser}=require('../controllers/userController')

router.post('/',createUser)
router.get('/',readUser)
router.get('/:id',userId)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)

module.exports=router;