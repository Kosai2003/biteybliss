const cart = JSON.parse(localStorage.getItem("cart")) || [];

const count = cart.length;
let total = 0;

cart.forEach(item => {
  total += parseFloat(item.price.replace("$", ""));
});

// حساب الخصم
let discount = 0;
if (count >= 5) {
  discount = total * 0.10; // خصم 10%
}

const finalTotal = total - discount;

// عرض النتائج
document.getElementById("checkoutCount").textContent = count;
document.getElementById("checkoutTotal").textContent = `$${total.toFixed(2)}`;
document.getElementById("checkoutDiscount").textContent = `-$${discount.toFixed(2)}`;
document.getElementById("checkoutFinal").textContent = `$${finalTotal.toFixed(2)}`;

// التحقق من الحقول وتخزينها مؤقتًا
document.getElementById("checkoutForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const notes = document.getElementById("notes").value.trim();

  const customerInfo = {
    fullName,
    email,
    phone,
    address,
    notes
  };

  localStorage.setItem("customerInfo", JSON.stringify(customerInfo));

  // ✅ التوجيه بعد التخزين
  window.location.href = "confirmation.html";
});
