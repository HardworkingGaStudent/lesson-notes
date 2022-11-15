class BankAccount:
    total_deposits = 0

    def __init__(self):
        self.accountType = "savings"
        self.balance = 0
        self.overdraft_fees = 0
    
    def deposit(self, amount):
        self.balance += amount
        BankAccount.total_deposits += amount

    def withdraw(self, amount):
        bal = self.balance - amount
        if bal < 0:
            self.overdraft_fees += 20
            print("Cannot withdraw more than what you have")
            return
        self.balance = bal
        BankAccount.total_deposits -= amount

account = BankAccount()

print(BankAccount.total_deposits)
print(account.balance)

account.deposit(100)
print(BankAccount.total_deposits)
print(account.balance)