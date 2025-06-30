// app.js

// تحميل السلة من localStorage إذا كانت موجودة
const cart = JSON.parse(localStorage.getItem("cart")) || [];

// تحديد كل أزرار "Add to Cart" الموجودة بالصفحة
document.querySelectorAll('.add-btn').forEach((button) => {
    button.addEventListener('click', () => {
        const itemElement = button.parentElement;
        const name = itemElement.querySelector('h4').textContent;
        const price = itemElement.querySelector('.price').textContent;
        const image = itemElement.querySelector('img').getAttribute('src');

        const item = {
            name,
            price,
            image
        };

        cart.push(item);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();

        alert(`${name} added to cart! 🛒`);
    });
});

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