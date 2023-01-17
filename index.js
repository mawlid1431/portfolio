const express = require(`express`)
const homerouts = require(`./routes/index`)
const app = express()
app.set(`view engine`, `ejs`)
const port = process.env.PORT || 2000
app.listen(port)
console.log(`its running now`);


app.use(express.static(`public`))

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use("/", homerouts)