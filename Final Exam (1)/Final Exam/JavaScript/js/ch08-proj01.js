// ch08-proj01.js

// Functions used for updating the table
function updateTable() {
  const tableBody = document.querySelector(".table-fill.tbody");
  tableBody.innerHTML = ""; // Clear existing rows

  // Assuming cart is the array from data.js
  for (let i = 0; i < cart.length; i++) {
    outputCartRow(cart[i]);
  }

  // Assuming taxRate and shippingThreshold are input from the user
  const taxRate = parseFloat(prompt("Enter tax rate (as a decimal):"));
  const shippingThreshold = parseFloat(prompt("Enter shipping threshold:"));

  const subtotal = calculateSubtotal();
  const tax = calculateTax(subtotal, taxRate);
  const shipping = calculateShipping(subtotal, shippingThreshold);
  const grandTotal = calculateGrandTotal(subtotal, tax, shipping);

  // Update the corresponding elements in your HTML with the calculated values
  document.querySelectorAll(".totals")[0].lastElementChild.innerHTML =
    "$" + subtotal;
  document.querySelectorAll(".totals")[1].lastElementChild.innerHTML =
    "$" + tax;
  document.querySelectorAll(".totals")[2].lastElementChild.innerHTML =
    "$" + shipping;
  document.querySelectorAll(".totals")[3].lastElementChild.innerHTML =
    "$" + grandTotal;
}

// Call the updateTable function to initially populate the table
updateTable();
