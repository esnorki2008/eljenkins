const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000

var cors = require('cors')
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use(cors())
app.post('/', (req, res) => {
  let result = req.body.a * req.body.b
  res.send({result:result})
})



app.listen(port, () => {
  console.log(`Backend en  http://localhost:${port}`)
})