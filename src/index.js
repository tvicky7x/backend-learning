import express from "express"
import cors from "cors"

export const app = express()

app.use(cors())
app.use(express.urlencoded())
app.use(express.static("public"))

app.get("/", (_, res) => {
    res.send("Hello World")
})
