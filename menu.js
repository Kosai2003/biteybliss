// menu.js

const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach(button => {
  button.addEventListener("click", () => {
    const item = {
      name: button.dataset.name,
      price: button.dataset.price,
      image: button.dataset.image
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();

    alert(`The "${item.name}" has been added to the cart. ✅`);
  });
});

function updateCartCount() {
  const countSpan = document.getElementById("cartCount");
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  if (countSpan) {
    countSpan.textContent = cartItems.length;
  }
}

updateCartCount();

const filterButtons = document.querySelectorAll(".filter-btn");
const menuItems = document.querySelectorAll(".menu-item");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    // إزالة التفعيل من كل الأزرار
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const category = button.dataset.category;

    menuItems.forEach(item => {
      const itemCategory = item.dataset.category;

      if (category === "all" || itemCategory === category) {
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    });
  });
});

document.querySelectorAll(".rating").forEach(ratingEl => {
  const stars = ratingEl.querySelectorAll(".star");
  const productId = ratingEl.dataset.id;
  const ratingValue = ratingEl.querySelector(".rating-value");

  // استرجاع التقييم من localStorage
  let savedRating = parseInt(localStorage.getItem(`rating-${productId}`)) || 0;
  updateStars(savedRating);

  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      // عند تمرير الماوس على النجمة
      star.addEventListener("mouseenter", () => {
        highlightStars(index + 1);
      });

      // عند الخروج من النجوم
      star.addEventListener("mouseleave", () => {
        const saved = parseInt(localStorage.getItem(`rating-${productId}`)) || 0;
        updateStars(saved);
      });
      const currentRating = parseInt(localStorage.getItem(`rating-${productId}`)) || 0;
      const newRating = index + 1;

      if (newRating === currentRating) {
        // إذا ضغط على نفس التقييم، احذف التقييم
        localStorage.removeItem(`rating-${productId}`);
        updateStars(0);
      } else {
        // تقييم جديد
        localStorage.setItem(`rating-${productId}`, newRating);
        updateStars(newRating);
      }
    });
  });

  function updateStars(rating) {
    stars.forEach((star, i) => {
      star.classList.toggle("active", i < rating);
    });
    ratingValue.textContent = `(${rating})`;
  }
  
  function highlightStars(rating) {
    stars.forEach((star, i) => {
      star.classList.toggle("hovered", i < rating);
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // نوقف المراقبة بعد الظهور
      }
    });
  }, {
    threshold: 0.2
  });

  fadeElements.forEach(el => observer.observe(el));
});