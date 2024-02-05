const http = require('http')
const express = require('express')
const application = express()

const servidorHttp = http.createServer(application)
const io = require('socket.io')(servidorHttp)

io.addListener('connection', (socket) => {
    console.log('Usuário conectado')
    socket.addListener('Nova mensagem', (msg) => {
        io.emit('Nova mensagem', msg)
    })
})

application.use(express.static('public'))

servidorHttp.listen(1010)