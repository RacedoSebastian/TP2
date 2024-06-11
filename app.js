import express from ("express")
import cors from ("cors")
import { dbConnect } from ("./database")
import { route } from ("./src/routes/routes")
const app = express()
app.use(express.json())
app.use(cors())

dbConnect()

app.use("/ciudad", route)

app.listen(4000, () => {
    console.log("estoy en el puerto 4000")
})