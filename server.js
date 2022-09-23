// Load dotenv config
require("dotenv").config()

// Server definitions
const express = require("express")
const app = express()

// Server configuration
const PORT = process.env.PORT || 8000
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// 404 Error
app.use((req, res, next) => {
    const response = {
        error: -2,
        description: `${req.url} ${req.method} not implemented`
    }
    res.status(404).json(response)
})

// Server start
const server = app.listen(PORT, () => {
    console.log(`Server running on Port No. ${PORT}`)
})

// Server error handling
server.on("error", (err) => {
    console.error(`Error: ${err}`)
})