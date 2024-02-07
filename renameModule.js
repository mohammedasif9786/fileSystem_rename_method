const { error } = require('console')
let fileSystem = require('fs')
fileSystem.rename("newFile.text","reNamedFile.txt",(error)=>{
    if(error){
        throw error
    }
    console.log("your file name is been successfully changed")

})