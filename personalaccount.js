class personalaccount{

    constructor(firstName, lastName, incomes, expenses){

        this.firstName = firstName;
        this.lastName = lastName;
        this.incomes = incomes;
        this.expenses = expenses;
        

    }
  
    totalIncome(){
        console.log("totalIcome {$}",this.totalIncomes);
    }
    totalExpense(){
    
        console.log("totalexpense {$}",this.totalExpenses);
      
    }
    addIncome(incomes){
        this.incomes =incomes;
         totalIncomes+=incomes;
        return totalIncomes;
      
    }
    addExpense(expenses){
        this.expenses =expenses;
        totalExpenses+=expenses;
        return totalExpenses;
      
    }
    accountBalance(){
      let accountBalance =this.totalIncomes-this.totalExpenses; 
      console.log("accountbalance {$}",accountBalance)
      
    } 
  }
  const account1 = new personalaccount("arsalan","afzal",524,500);
  account1.accountBalance;
