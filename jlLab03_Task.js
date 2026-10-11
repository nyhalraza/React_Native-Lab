const orders = [
    {
        customerName: "Abu Hurairah",
        prodName: "Laptop",
        qty: 3,
        price: 1500,
        status: "Pending"
    },
    {
        customerName: "Abu Hurairah",
        prodName: "Laptop",
        qty: 3,
        price: 1500,
        status: "Pending"
    },
    {
        customerName: "Abdullah Farooqi",
        prodName: "Charger",
        qty: 2,
        price: 350,
        status: "Shipped"
    },
    {
        customerName: "Nehal Raza",
        prodName: "Mobile",
        qty: 5,
        price: 4599,
        status: "Delivered"
    },
    {
        customerName: "Hassan Sohail",
        prodName: "Toy Car",
        qty: 1,
        price: 1200,
        status: "Shipped"
    },
    {
        customerName: "Farukh Waheed",
        prodName: "RTX 5090",
        qty: 10,
        price: 8999,
        status: "Pending"
    }   
];

// ---------------------- 1. Calculate Order Total ----------------------
const calculateOrderTotal = order => order.qty * order.price;

console.log("---------------------- Function 1 ----------------------");
for (let order of orders) {
    console.log("Customer: " + order.customerName + ", Total Bill: Rs. " + calculateOrderTotal(order));
}


// ---------------------- 2. Find Customer Spending ----------------------
function spendingByCustomer(customerName, orderList) {
    let totalForCust = 0;
    for (let order of orderList) {
        if (order.customerName === customerName) {
            totalForCust += calculateOrderTotal(order);
        }
    }
    return totalForCust;
}

console.log("\n---------------------- Function 2 ----------------------");
console.log("Total Spending by Abu Hurairah: Rs. " + spendingByCustomer("Abu Hurairah", orders));


// ---------------------- 3. Filter Orders ----------------------
function filterOrders(orderList, status) {
    const filteredList = [];
    for (let order of orderList) {
        if (order.status === status) {
            filteredList.push(order);
        }
    }
    return filteredList;
}

console.log("\n---------------------- Function 3 ----------------------");
console.log("Orders with Status 'Shipped':", filterOrders(orders, "Shipped"));


// ---------------------- 4. Find Best Selling Product ----------------------
function findBestSellingProduct(orderList) {
    const productSales = {};

    for (let order of orderList) {
        if (productSales[order.prodName]) {
            productSales[order.prodName] += order.qty;
        } else {
            productSales[order.prodName] = order.qty;
        }
    }

    let bestProduct = "";
    let highestQty = 0;

    for (let product in productSales) {
        if (productSales[product] > highestQty) {
            highestQty = productSales[product];
            bestProduct = product;
        }
    }

    return { product: bestProduct, totalQuantitySold: highestQty };
}

console.log("\n---------------------- Function 4 ----------------------");
const bestSeller = findBestSellingProduct(orders);
console.log("Best Selling Product: " + bestSeller.product + " (" + bestSeller.totalQuantitySold + " units sold)");


// ---------------------- 5. Apply Discount ----------------------
function applyDiscount(order) {
    const originalTotal = calculateOrderTotal(order);
    let finalAmount = originalTotal;

    if (originalTotal > 10000) {
        const discount = originalTotal * 0.10;
        finalAmount = originalTotal - discount;
    }

    return finalAmount;
}

console.log("\n---------------------- Function 5 ----------------------");
console.log("Final amount for order 1 (Original Rs. 4,500): Rs. " + applyDiscount(orders[0]));
console.log("Final amount for order 6 (Original Rs. 89,990): Rs. " + applyDiscount(orders[5]));


// ---------------------- 6. Find Highest Order ----------------------
function findHighestOrder(orderList) {
    if (orderList.length === 0) return null;

    let highestAmount = 0;
    let highestCustomer = "";

    for (let order of orderList) {
        const finalAmount = applyDiscount(order);
        if (finalAmount > highestAmount) {
            highestAmount = finalAmount;
            highestCustomer = order.customerName;
        }
    }

    return highestCustomer;
}

console.log("\n---------------------- Function 6 ----------------------");
console.log("Customer with Highest Final Order: " + findHighestOrder(orders));


// ---------------------- 7. Display Summary ----------------------
function displaySummary(orderList) {
    for (let order of orderList) {
        const originalTotal = calculateOrderTotal(order);
        const finalAmount = applyDiscount(order);
        const discountAmount = originalTotal - finalAmount;

        console.log(
            "Customer: " + order.customerName +
            " | Product: " + order.prodName +
            " | Original Total: Rs. " + originalTotal +
            " | Discount: Rs. " + discountAmount +
            " | Final Amount: Rs. " + finalAmount
        );
    }
}

console.log("\n---------------------- Function 7 ----------------------");
displaySummary(orders);