const express=require('express')
// const router=require("./routes/users")
const userRoutes=require('./routes/users')
const walletRouter=require("./routes/wallets")

const app =express()
const port=3000


app.use(express.json())
app.use('/users',userRoutes)
app.use('/wallet',walletRouter)

// hna kanmchiw ngolo express ymkn lih y9ra req lijayn b forme json f etat dyal (POST,PUT)
app.listen(port,()=>{
    console.log(` server travailler sur port ${port}`)


})