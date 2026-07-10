import 'dotenv/config'
import { app } from './src/index.js'


const port = process.env.PORT
app.listen(port, () => {
    console.log(`server started: http://localhost:${port}`)
})