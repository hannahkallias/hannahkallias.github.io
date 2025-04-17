class Transaction {
    value = 0;
    date;
    
    constructor(valueAmount, year, month, day) {
        this.value = valueAmount;
        this.date = new Date(year, month, day);
    }

    toHTML() {
        this.divider = document.createElement("p");
        this.divider.innerHTML = `$${this.value} at ${this.date}`;
        return this.divider;
    } 
}


let transactionList = [];

// Unused
function saveItems() {
    localStorage.setItem('budgetItems', JSON.stringify(transactionList));
};

// also unused
function loadItems() {
    const data = localStorage.getItem('budgetItems');
    return data ? JSON.parse(data) : [];
};

function processTransactions() {
    let sum = 0;
    document.getElementById("transactionList").innerHTML = "";
    for (const transaction of transactionList) {
        sum += transaction.value;
        document.getElementById("transactionList").appendChild(transaction.toHTML())
    }
    document.getElementById("balance").innerHTML = sum;
}

document.getElementById("addBtn").addEventListener("click", () => {
    const amount = parseFloat(document.getElementById("amount").value);
    const year = parseInt(document.getElementById("year").value);
    const month = parseInt(document.getElementById("month").value);
    const day = parseInt(document.getElementById("day").value);

    if(!isNaN(amount) && year && month && day){
        const tx = new Transaction(amount, year, month, day);
        transactionList.push(tx);
        processTransactions();

        document.getElementById("amount").value = "";
        document.getElementById("year").value = "";
        document.getElementById("month").value = "";
        document.getElementById("day").value = "";
    } else {
        alert("please enter the information correctly!");
    }
});