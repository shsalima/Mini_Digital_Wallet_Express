const express=require("express")
const router=express.Router()

const {createWallet,readWallet,walletID,updateWallet,deleteWallet,deposit,retirer}=require("../controllers/walletsControllers")

router.post("/",createWallet)
router.get("/",readWallet)
router.get("/:id",walletID)
router.put("/:id",updateWallet)
router.delete("/:id",deleteWallet)



module.exports=router