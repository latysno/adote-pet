const express = require('express')
const cors = require('cors')
const route = 3000

const app = express()

app.use(express.json())
app.use(cors())

app.listen(route, ()=> console.log(`api rodando na porta ${route}`))


