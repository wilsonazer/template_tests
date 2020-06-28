import express from 'express'

const server = express()

server.get("/", ( req, res )=>{
    res.send("<h1>Hello Ladies!!!</h1>")
})

server.listen( 3333, ()=>{
    console.log("Running on port 3333")
})