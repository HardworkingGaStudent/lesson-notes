const budgets = require('../models/budget')

module.exports = {

    listBudgets: (req, res) => {
        res.render('budget/index', {budgets})
    },

    showBudget: (req, res) => {
        const budgetID = req.params.budget_id

        // validation
        // ...

        const budgetIDNum = parseInt(budgetID)


        // get the budget item from "database"
        const budgetItem = budgets[budgetIDNum]

        res.render('budget/show', {budget: budgetItem})
    },

}