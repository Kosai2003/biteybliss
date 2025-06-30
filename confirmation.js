// قراءة بيانات الزبون
const customer = JSON.parse(localStorage.getItem("customerInfo")) || {};
document.getElementById("confirmName").textContent = customer.fullName || "-";
document.getElementById("confirmEmail").textContent = customer.email || "-";
document.getElementById("confirmPhone").textContent = customer.phone || "-";
document.getElementById("confirmAddress").textContent = customer.address || "-";
document.getElementById("confirmNotes").textContent = customer.notes || "-";

// قراءة بيانات السلة
const cart = JSON.parse(localStorage.getItem("cart")) || [];
const count = cart.length;
let total = 0;

cart.forEach(item => {
  total += parseFloat(item.price.replace("$", ""));
});

let discount = count >= 5 ? total * 0.10 : 0;
let finalTotal = total - discount;

document.getElementById("confirmCount").textContent = count;
document.getElementById("confirmTotal").textContent = `$${finalTotal.toFixed(2)}`;

// (اختياري) مسح البيانات بعد التأكيد
// localStorage.removeItem("cart");
// localStorage.removeItem("customerInfo");