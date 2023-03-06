const express = require('express')
require('./db/mongoose')

const app =express()
const port =process.env.PORT || 5000

app.use(express.json())

app.get('/', (req, res) => {
    res.send({ msg: 'Hey congratulations, we are connected' })
  })

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
 