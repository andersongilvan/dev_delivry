import "dotenv/config"
import express from "express"
import { errorHandler } from "./infra/errorHandler/errorHandler"
import { routes } from "./http/routes"


const app = express()

app.use(express.json())

app.use(routes)

app.use(errorHandler)


app.listen(process.env.PORT, () => console.log("Server in running"))