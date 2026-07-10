import express from "express"
import 'dotenv/config'

const app = express()

app.get("/", (_, res) => {
    res.send("Hello World")
})

const port = process.env.PORT

app.listen(port, () => {
    console.log(`server started: http://localhost:${port}`)
})