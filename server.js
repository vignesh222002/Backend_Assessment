import express from 'express'
import cors from 'cors'
import TextRouter from './route/textRoute.js'

const app = express();
const PORT = 4000 // Store it in env

app.use(cors()) // Handle Cors
app.use(express.json())

app.use('/text', TextRouter)

app.listen(PORT, () => console.log("Server is listening in the port ", PORT))