
 const fs=require("fs")

 const path=require("path")

 const filePath=path.join(__dirname,"data.json")

 function readData(){
  

    const file=fs.readFileSync(filePath,"utf-8")
    return JSON.parse(file)

 }

 function writeData(data){
    fs.writeFileSync(filePath,JSON.stringify(data,null,2))

 }
    

