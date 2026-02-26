const {readData,writeData}=require("../data/store")


function createWallet(req,res){
    const data=readData()
    const {user_id,name}=req.body

    if(!user_id || !name){
        res.status(400).json({message:"tout champs obligatores"})
        return
    }
    const user=data.users.find(u=>u.ID== user_id)
    if(!user){
        res.status(400).json({message:"utilisateur non trouvé"})
        return
    }

    const newWallet={
        id:Date.now(),
        user_id,
        name,
        sold:0
    }
    data.wallets.push(newWallet)
    writeData(data)
    res.status(201).json(newWallet)

}



function readWallet(req,res){
    const {wallets}=readData()
    if(wallets.length ===0){
        res.status(404).json({message:"aucun wallets trouvé"})

    }
    res.status(200).json(wallets)
}


function walletID(req,res){
    const  data=readData()
    const wallet=data.wallets.find(w=>w.id == req.params.id)
    if(!wallet){
        res.status(404).json({message:"wallet non trouvé "})
        return
    }
    res.status(200).json(wallet)

}
function updateWallet(req,res){
    const data=readData()
    const indexW=data.wallets.findIndex(w=>w.id ==req.params.id)
    if(indexW=== -1){
        res.status(404).json({message:"wallet non trouvé "})
    }
    const {name}=req.body
    data.wallets[indexW].name= name 
    writeData(data)
    res.status(200).json(data.wallets[indexW])
}

function deleteWallet(req,res){
    const data =readData()
    const indexWallet=data.wallets.findIndex(w=>w.id== req.params.id)
    if(indexWallet=== -1){
        res.status(404).json({message:"wallet non trouvé"})
        return
    }
    data.wallets.splice(indexWallet,1)
    writeData(data)
    res.status(200).json({message:"wallet est supprimé"})
}



module.exports={createWallet,readWallet,walletID,updateWallet,deleteWallet,deposit,retirer}