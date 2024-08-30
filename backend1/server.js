const express = require('express') 
const app = express() 
const PORT = 8000 ;

app.get('/' ,(req,res) => {
    console.log("hello world") ;
})

app.listen(PORT , () => console.log(`Server Started at port 8000`)) ;