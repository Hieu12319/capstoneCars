require("dotenv").config()


const { PORT = 3001 } = process.env

const express = require("express")
const { default: mongoose } = require("mongoose")

const app = express()



//database connection

mongoose.connect(DATABASE_URL)
mongoose.connection
    .on("open", () => console.log("you are connected to MongoDB"))
    .on("close", () => console.log("You are disconnected from MongoDB"))
    .on("error", (error) => console.log(error))

// cars models
    

//routes
    
app.get("/", (req, res) => {
    res.send("hello World")
})

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))