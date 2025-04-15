originalValue = 1000;
class Transaction {
    value = 0;
    date;
    
    constructor(valueAmount, year, month, day) {
         this.value = valueAmount;
         this.date = new Date(year, month, day);
    }

    toHTML() {
        this.divider = document.createElement("p");
        this.divider.innerHTML = this.value + " " + this.date;
        console.log(this.divider);
        return this.divider;
    }
}

johnTransaction = new Transaction(34, 2001, 6, 14);
johnTransaction.toHTML();