const express = require('express')
const phones = require('./phones.json');
const app = express()
const port = 5000


// const express = require('express')
// const app = express()
// const port = 5000

app.get('/', (req, res) => {
  res.send('my phone information ')
})


//API: get data from my local server phones.json

app.get('/phones', (req, res) => {
    res.send(phones);

})

app.get('/phones/:id', (req, res) => {
    const id = req.params.id;
    console.log('i need data from id', id);

})

app.get('/mylove', (req, res) => {
    res.send('test!')
  })

app.listen(port, () => {
  console.log(`my phone server  ${port}`)
})