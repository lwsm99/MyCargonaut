const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const path = __dirname + '/views/'

const app = express()

app.use(express.static(path))

var corsOptions = {
  origin: "http://localhost:8081"
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// const db = require("./backend/models")
// db.sequelize.sync()

app.get('/', function (req,res) {
  res.sendFile(path + "index.html")
})

// require("./backend/routes/<route>")(app)

// set port, listen for requests
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})