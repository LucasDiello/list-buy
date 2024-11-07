import express from 'express'
import cors from 'cors'
import itemRoute from './routes/itemRoute.js'

const app = express()
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000", "https://localhost:8081"],
    credentials: true, 
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PATCH"]
}));

app.use("/api/v1", itemRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});