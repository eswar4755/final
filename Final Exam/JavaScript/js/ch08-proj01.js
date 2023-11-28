
const tax_rate = prompt('Enter tax rate (0.10)');
const shipping_threshold = prompt('Enter shipping threshold (1000)');

/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */


console.log("ch08-proj01.js is running!"); 

// Instruction 6
// Output cart rows
for (let i = 0; i < cart.length; i++) {
    const total = calculateTotal(cart[i].quantity, cart[i].product.price); // Calculates the total amount of the product
    outputCartRow(cart[i], total); // Displays the row dynamically 
}


// Calculate totals
const subtotal = calculateSubtotal(cart);
const tax = calculateTax(subtotal, tax_rate);
const shipping = calculateShipping(subtotal, shipping_threshold);
const grandTotal = calculateGrandTotal(subtotal, tax, shipping);

// Update the corresponding elements in the HTML with the calculated values
document.getElementById("subtotal").innerText = `$${subtotal.toFixed(2)}`;
document.getElementById("tax").innerText = `$${tax.toFixed(2)}`;
document.getElementById("shipping").innerText = `$${shipping.toFixed(2)}`;
document.getElementById("grandTotal").innerText = `$${grandTotal.toFixed(2)}`;

