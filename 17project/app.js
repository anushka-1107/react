const express = require('express')

const app = express()

const product_Route = require('./routes/products')

const PORT = process.env.PORT || 5000

app.get("/" , ( req , res )=> {
        res.send("I am here")
})


app.use("/api/products", product_Route)



const start = async ( ) => {
    try {
       app.listen(PORT, ()=>{console.log(`${PORT} It happened`)})
    } catch (error) {
        console.log(error)
    }
}


start ()












// mongodb+srv://anushkabhadoria63_db_user:44KGEA361fOPsemo@cluster0.kohqx6j.mongodb.net/?appName=Cluster0