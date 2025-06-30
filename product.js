// product.js

const products = [
  {
    id: "1",
    name: "Cheeseburger",
    price: "$8.99",
    image: "../Images/cheeseburger.jpeg",
    description: "Juicy beef burger with cheese and lettuce."
  },
  {
    id: "2",
    name: "Margherita Pizza",
    price: "$12.50",
    image: "../Images/pepperoni-pizza.jpeg",
    description: "Classic pepperoni pizza with mozzarella."
  },
  {
    id: "3",
    name: "Chicken Wrap",
    price: "$7.50",
    image: "../Images/chicen-wrap.jpeg",
    description: "Grilled chicken with garlic sauce in a warm wrap."
  },
  {
    id: "4",
    name: "French Fries",
    price: "$3.00",
    image: "../Images/french-fries.jpeg",
    description: "Golden crispy fries served fresh."
  },
  {
    id: "5",
    name: "Fried Chicken",
    price: "$10.75",
    image: "../Images/fried-chicken.jpeg",
    description: "Crispy golden fried chicken served with dipping sauce."
  },
  {
    id: "6",
    name: "Veggie Salad",
    price: "$6.50",
    image: "../Images/veggie-salad.jpeg",
    description: "Fresh greens with cherry tomatoes, cucumbers, and vinaigrette."
  },
  {
    id: "7",
    name: "Spaghetti Bolognese",
    price: "$11.50",
    image: "../Images/spaghetti.jpeg",
    description: "Classic Italian pasta with rich meat sauce and parmesan."
  },
  {
    id: "8",
    name: "Chocolate Cake",
    price: "$4.75",
    image: "../Images/chocolate-cake.jpeg",
    description: "Rich and moist chocolate cake with fudge frosting."
  },
  {
    id: "9",
    name: "Beef Tacos",
    price: "$9.25",
    image: "../Images/beef-tacos.jpeg",
    description: "Spicy ground beef in soft tortillas with lettuce and cheese."
  },
  {
    id: "10",
    name: "Lemonade",
    price: "$2.99",
    image: "../Images/lemonade.jpeg",
    description: "Refreshing homemade lemonade with mint."
  },
  {
    id: "11",
    name: "Grilled Salmon",
    price: "$14.99",
    image: "../Images/grilled-salmon.jpeg",
    description: "Perfectly grilled salmon fillet with lemon butter sauce."
  },
  {
    id: "12",
    name: "Iced Tea",
    price: "$2.50",
    image: "../Images/iced-tea.jpeg",
    description: "hilled black tea with lemon and mint."
  },
  {
    id: "13",
    name: "Mango Smoothie",
    price: "$3.99",
    image: "../Images/mango-smoothie.jpeg",
    description: "Fresh mango blended with yogurt and honey."
  },
  {
    id: "14",
    name: "Iced Coffee",
    price: "$3.50",
    image: "../Images/iced-coffee.jpeg",
    description: "Cold brew coffee with milk, vanilla and caramel."
  },
  {
    id: "15",
    name: "Strawberry Milkshake",
    price: "$4.25",
    image: "../Images/strawberry-milkshake.jpeg",
    description: "Classic milkshake with fresh strawberries and cream."
  },
  {
    id: "16",
    name: "Orange Juice",
    price: "$2.75",
    image: "../Images/orange-juice.jpeg",
    description: "Freshly squeezed orange juice."
  },
  {
    id: "17",
    name: "Mojito",
    price: "$3.25",
    image: "../Images/mojito.jpeg",
    description: "Refreshing lime and mint soda mocktail."
  },
  {
    id: "18",
    name: "Hot Chocolate",
    price: "$3.75",
    image: "../Images/hot-chocolate.jpeg",
    description: "Rich cocoa with steamed milk and whipped cream."
  },
  {
    id: "19",
    name: "Vanilla Ice Cream",
    price: "$3.50",
    image: "../Images/vanilla-icecream.jpeg",
    description: "Creamy vanilla ice cream with a hint of bourbon."
  },
  {
    id: "20",
    name: "Apple Pie",
    price: "$4.25",
    image: "../Images/apple-pie.jpeg",
    description: "Warm apple pie with cinnamon and flaky crust."
  },
  {
    id: "21",
    name: "Chocolate Brownie",
    price: "$3.99",
    image: "../Images/brownie.jpeg",
    description: "Fudgy brownie with dark chocolate chunks."
  },
  {
    id: "22",
    name: "Cheesecake",
    price: "$5.50",
    image: "../Images/cheesecake.jpeg",
    description: "Classic New York-style cheesecake with berry topping."
  },
  {
    id: "23",
    name: "Donuts",
    price: "$4.00",
    image: "../Images/donuts.jpeg",
    description: "Assorted glazed donuts with chocolate and sprinkles."
  },
  {
    id: "24",
    name: "Tiramisu",
    price: "$5.75",
    image: "../Images/tiramisu.jpeg",
    description: "Italian dessert with coffee-soaked ladyfingers and mascarpone."
  },
  {
    id: "25",
    name: "Creme Brulee",
    price: "$5.25",
    image: "../Images/creme-brulee.jpeg",
    description: "Silky vanilla custard with caramelized sugar top."
  },
  {
    id: "26",
    name: "Greek Salad",
    price: "$6.99",
    image: "../Images/greek-salad.jpeg",
    description: "Fresh cucumbers, tomatoes, olives, and feta cheese."
  },
  {
    id: "27",
    name: "Caesar Salad",
    price: "$7.25",
    image: "../Images/caesar-salad.jpeg",
    description: "Crisp romaine lettuce with parmesan and croutons."
  },
  {
    id: "28",
    name: "Quinoa Salad",
    price: "$7.75",
    image: "../Images/quinoa-salad.jpeg",
    description: "Protein-packed quinoa with veggies and lemon dressing."
  },
  {
    id: "29",
    name: "Caprese Salad",
    price: "$6.50",
    image: "../Images/caprese-salad.jpeg",
    description: "Fresh mozzarella, tomatoes, and basil with olive oil."
  },
  {
    id: "30",
    name: "Chicken Salad",
    price: "$8.25",
    image: "../Images/chicken-salad.jpeg",
    description: "Grilled chicken breast with mixed greens and vinaigrette."
  },
  {
    id: "31",
    name: "Beet Salad",
    price: "$7.50",
    image: "../Images/beet-salad.jpeg",
    description: "Roasted beets with arugula, goat cheese, and walnuts."
  },
  {
    id: "32",
    name: "Asian Salad",
    price: "$6.75",
    image: "../Images/asian-salad.jpeg",
    description: "Crunchy cabbage, carrots, and sesame dressing."
  },
];

// قراءة ID من الرابط
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

// البحث عن المنتج
const product = products.find(p => p.id === productId);

const container = document.getElementById("productDetails");

if (!product) {
  container.innerHTML = "<p>The product is not exist. ❌</p>";
} else {
  container.innerHTML = `
    <div class="product-box">
      <img src="${product.image}" alt="${product.name}" class="product-image" />
      <div class="product-info">
        <h2 class="product-title">${product.name}</h2>
        <p class="product-description">${product.description}</p>
        <p class="product-price">${product.price}</p>
        <button id="addToCartBtn" class="add-to-cart">Add to Cart</button>
      </div>
    </div>
  `;

  document.getElementById("addToCartBtn").addEventListener("click", () => {
    const item = {
      name: product.name,
      price: product.price,
      image: product.image
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`The "${product.name}" has been added to cart. ✅`);
    updateCartCount();
  });
}

// تحديث عداد السلة
function updateCartCount() {
  const countSpan = document.getElementById("cartCount");
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  if (countSpan) {
    countSpan.textContent = cartItems.length;
  }
}

updateCartCount();