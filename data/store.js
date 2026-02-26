// file system ykhalina read |create|update
 const fs=require("fs")
//  path  kaysa3dna n7adedo fin kayna data.json
 const path=require("path")
//  __dirname lblassa fin kayn file | hna bach léw folder m3a file
 const filePath=path.join(__dirname,"data.json")

 function readData(){
    // had fun kat9ra lina file btari9ta string
    
// Sync => katsna 7ta yt9ra file 3ad ykamel lcode 
// utf-8 => bach traj3 lina text maxi buffer(raw data=> ar9am mafhomach)
    const file=fs.readFileSync(filePath,"utf-8")
    // lihada drna JSON.parse=>bach n7awlo mn string-> object
    return JSON.parse(file)

 }

 function writeData(data){
    // null,2 bach yban json organiser (pretty format)
    fs.writeFileSync(filePath,JSON.stringify(data,null,2))

 }
 module.exports={readData,writeData }
    

