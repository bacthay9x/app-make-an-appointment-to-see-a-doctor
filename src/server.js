import express from "express"
import bodyParser from "body-parser"
import viewEngine from "./config/viewEngine"
import initWebRoutes from "./route/web"
import dotenv from "dotenv"
import testConnect from "./config/connectDB"

dotenv.config()
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))


viewEngine(app)
initWebRoutes(app)
testConnect()


const port = process.env.PORT || 6969

app.listen(port,() =>{
    console.log("Đang chạy port: ",+port)
})
