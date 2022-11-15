const express = require('express')
const budgetController = require('./controllers/budget_controller')

const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/budgets', budgetController.listBudgets)
app.get('/budgets/:budget_id', budgetController.showBudget)

app.listen(port, () => {
  console.log(`Budgtr app listening on port ${port}`)
})
