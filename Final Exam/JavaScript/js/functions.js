/* define your functions here */

// Instruction 3
// FUnction Declaration
function calculateTotal(quantity, price) {
    return quantity * price;
}

// Instruction 4 & 5
function outputCartRow(item, total) {
    // document.querySelector("tr").innerHTML = ""
    document.write(`<tr>
        <td><img src="images/${item.product.filename}"></td>
        <td>${item.product.title}</td>
        <td>${item.quantity}</td>
        <td>$${item.product.price.toFixed(2)}</td>
        <td>$${total.toFixed(2)}</td>
    </tr>`);
}


// Instruction 7
function calculateSubtotal(cart) {
    let subtotal = 0;
    for (let i = 0; i < cart.length; i++) {
        subtotal += cart[i].quantity * cart[i].product.price;
    }
    return subtotal;
}

function calculateTax(subtotal, taxRate) {
    return subtotal * taxRate;
}

function calculateShipping(subtotal, threshold) {
    return subtotal > threshold ? 0 : 40;
}

function calculateGrandTotal(subtotal, tax, shipping) {
    return subtotal + tax + shipping;
}





        
