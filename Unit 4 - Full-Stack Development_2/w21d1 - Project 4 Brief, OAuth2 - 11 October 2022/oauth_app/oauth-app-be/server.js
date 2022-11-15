const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.options('*', cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/oauth/github', function(req, res) {
    // validate that code is given

    if (!req.body.code) {
        return res.status(400).json()
    }

    axios.post('https://github.com/login/oauth/access_token', {
        client_id: 'fb1aca93e3b5854c83eb',
        client_secret: 'e7e3041bfddc1effce0dd6c5c4153da87ec2e7ca',
        code: req.body.code,
    })
        .then(response => {
            console.log(response.data)
            return res.json(response.data)
        })
        .catch(err => {
            console.log(err)
            return res.status(500).json({
                err: err.message
            })
        })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})