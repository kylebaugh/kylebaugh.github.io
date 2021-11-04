const express = require('express')
const app = express()
app.use(express.json())
const ac = require('./controllers/armyController')

const port = 4242


app.get('/api/army', ac.getArmy)
app.post('/api/army', ac.addItem)
app.delete('/api/army/:id', ac.deleteItem)
app.put('/api/army/:id', ac.editItem)


app.listen(port, () => console.log(`Server is running on port ${port}.`))