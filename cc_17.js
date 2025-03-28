//task 1 :New customer creation and total spent after purchases.
class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.purchaseHistory = [];
    }

    addPurchase(amount) {
        this.purchaseHistory.push(amount);
        console.log(`${this.name} purchased $${amount}`);
    }

    getTotalSpent() {
        const total = this.purchaseHistory.reduce((sum, amount) => sum + amount, 0);
        console.log(`${this.name} spent $${total}`);
        return total;
    }
}

const customer1 = new Customer("Batman", "batmobile@gmail.com");
customer1.addPurchase(20);
customer1.addPurchase(15);
customer1.getTotalSpent();
