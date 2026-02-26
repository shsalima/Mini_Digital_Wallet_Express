const express=require("express")
const router=express.Router()

const {createWallet,readWallet,walletID,updateWallet,deleteWallet,deposit,retirer}=require("../controllers/walletsControllers")

router.post("/",createWallet)
router.get("/",readWallet)


module.exports=router