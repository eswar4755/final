// functions.js

function calculateTotal(quantity, price) {
  return (quantity * price).toFixed(2);
}

function outputCartRow(item) {
  const total = calculateTotal(item.quantity, item.product.price);
  document.write("<tr>");
  document.write("<td><img src='images/" + item.product.filename + "'></td>");
  document.write("<td>" + item.product.title + "</td>");
  document.write("<td>" + item.quantity + "</td>");
  document.write("<td>$" + item.product.price.toFixed(2) + "</td>");
  document.write("<td>$" + total + "</td>");
  document.write("</tr>");
}
