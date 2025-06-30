// cart.js

const cartContainer = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is currently empty.</p>";
    cartTotal.textContent = "$0.00";
} else {
    cartContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "cart-item";

        itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <div class="cart-item-details">
        <h4>${item.name}</h4>
        <p>Price: ${item.price}</p>
      </div>
      <span class="item-price">${item.price}</span>
      <button class="remove-btn">🗑️ Remove</button>
    `;

        cartContainer.appendChild(itemDiv);

        total += parseFloat(item.price.replace("$", ""));

        // زر الإزالة
        const removeBtn = itemDiv.querySelector(".remove-btn");
        removeBtn.addEventListener("click", () => {
            const confirmDelete = confirm(`Are you sure you want to remove "${item.name}" from your cart?`);
            if (confirmDelete) {
                // حذف من الذاكرة أولاً
                cart.splice(index, 1);
                localStorage.setItem("cart", JSON.stringify(cart));

                // أنيميشن اختفاء ناعم
                itemDiv.classList.add("removing");

                // بعد انتهاء الأنيميشن, احذف العنصر وأعد حساب الإجمالي
                setTimeout(() => {
                itemDiv.remove();
                updateCartCount();
                updateCartTotal();

                // في حال كانت السلة فاضية
                if (cart.length == 0) cartContainer.innerHTML = "<p>Your cart is currently empty.</p>";
                }, 400);
            }
        });
    });

    cartTotal.textContent = `$${total.toFixed(2)}`;
}

function updateCartTotal() {
  let total = 0;
  const priceElements = document.querySelectorAll('.item-price');
  priceElements.forEach(priceEl => {
    const price = parseFloat(priceEl.textContent.replace("$", ""));
    total += price;
  });
  document.getElementById("cartTotal").textContent = `$${total.toFixed(2)}`;
}

// تحديث عدّاد السلة في الهيدر
function updateCartCount() {
  const countSpan = document.getElementById("cartCount");
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  if (countSpan) {
    countSpan.textContent = cartItems.length;
  }
}

// نادِها بمجرد تحميل الصفحة
updateCartCount();