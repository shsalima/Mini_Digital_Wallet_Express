const express=require("express")
const router=express.Router()

const {createWallet,readWallet,walletID,updateWallet,deleteWallet,deposit}=require("../controllers/walletsControllers")
const {validatewallet}=require("../middlewares/validate")

router.post("/",validatewallet,createWallet)
router.get("/",readWallet)
router.get("/:id",walletID)
router.put("/:id",updateWallet)
router.delete("/:id",deleteWallet)
router.post("/:id",deposit)


module.exports=router