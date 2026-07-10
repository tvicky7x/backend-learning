import express from "express"
import 'dotenv/config'

export const app = express()

app.get("/", (_, res) => {
    res.send("Hello World")
})
