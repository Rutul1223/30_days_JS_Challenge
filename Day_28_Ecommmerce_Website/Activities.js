/* (No need to use database, you can use json files or just an array to simulate database) */

/* Activity -> 1 : Setting Up the Project */

// Task_1 - Initialize a new project directory and set up the basic HTML structure for the e-commerce website.

// Answer :- Explore index.html file

// Task_2 - Add a basic CSS file to style the e-commerce website, including a product listning grid and a shopping cart section.

// Answer :- Explore styles.css file

/* Activity -> 2 : Product Listing */

// Task_3 - Create a JSON file or an array of product objects with details like name, price, description, and image URL.

// Answer :- Explore products.json file

// Task_4 - Write a script to dynamically generate the product listing from the product data and display it on the web page. Style the product cards using CSS.

// const generateProductListing = (products) => {
//     const productGrid = document.querySelector('.product-grid');
//     productGrid.innerHTML = '';
  
//     products.forEach(product => {
//       const productItem = document.createElement('div');
//       productItem.classList.add('product-item');
  
//       productItem.innerHTML = `
//         <img src="${product.imageUrl}" alt="${product.name}">
//         <h3>${product.name}</h3>
//         <p>${product.description}</p>
//         <div class="price">$${product.price.toFixed(2)}</div>
//         <button>Add to Cart</button>
//       `;
  
//       productGrid.appendChild(productItem);
//     });
//   };
  
//   // Fetch products from JSON file and generate product listing
//   document.addEventListener('DOMContentLoaded', () => {
//     fetch('products.json')
//       .then(response => response.json())
//       .then(data => generateProductListing(data))
//       .catch(error => console.error('Error fetching product data:', error));
//   });

/* Activity -> 3 : Shopping Cart */

// Task_5 - Add an "Add to Cart" button to each product card. Write a function to handle adding products to the shopping cart. 

// // Function to generate product listing
// const generateProductListing = (products) => {
//     const productGrid = document.querySelector('.product-grid');
//     productGrid.innerHTML = '';
  
//     products.forEach((product, index) => {
//       const productItem = document.createElement('div');
//       productItem.classList.add('product-item');
  
//       productItem.innerHTML = `
//         <img src="${product.imageUrl}" alt="${product.name}">
//         <h3>${product.name}</h3>
//         <p>${product.description}</p>
//         <div class="price">$${product.price.toFixed(2)}</div>
//         <button data-index="${index}">Add to Cart</button>
//       `;
  
//       productGrid.appendChild(productItem);
//     });
  
//     // Attach event listeners to "Add to Cart" buttons
//     document.querySelectorAll('.product-item button').forEach(button => {
//       button.addEventListener('click', (e) => {
//         const productIndex = e.target.dataset.index;
//         addToCart(products[productIndex]);
//       });
//     });
//   };
  
//   // Function to add a product to the cart
//   const addToCart = (product) => {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
//     const existingProductIndex = cart.findIndex(item => item.name === product.name);
  
//     if (existingProductIndex !== -1) {
//       // If the product is already in the cart, update the quantity
//       cart[existingProductIndex].quantity += 1;
//     } else {
//       // If the product is not in the cart, add it
//       cart.push({ ...product, quantity: 1 });
//     }
  
//     localStorage.setItem('cart', JSON.stringify(cart));
//     updateCartUI();
//   };
  
//   // Function to update the cart UI
//   const updateCartUI = () => {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const cartList = document.querySelector('#shopping-cart ul');
//     const totalElement = document.querySelector('.total');
//     let total = 0;
  
//     cartList.innerHTML = '';
  
//     cart.forEach(item => {
//       const cartItem = document.createElement('li');
//       cartItem.textContent = `${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`;
//       cartList.appendChild(cartItem);
//       total += item.price * item.quantity;
//     });
  
//     totalElement.textContent = `Total: $${total.toFixed(2)}`;
//   };
  
//   // Fetch products from JSON file and generate product listing
//   document.addEventListener('DOMContentLoaded', () => {
//     fetch('products.json')
//       .then(response => response.json())
//       .then(data => {
//         generateProductListing(data);
//         updateCartUI(); // Update cart UI on page load
//       })
//       .catch(error => console.error('Error fetching product data:', error));
//   });
  
// Task_6 - Create a shopping cart section that displays the products added to the cart, including the name, price and quantity. Update the cart display whenever a product is added.

// Answer :- Refer Task_5 is same

/* Activity -> 4 : Cart Management */

// Task_7 - Add functionality to update the quantity of products in the cart. Write a function to handle increasing and decreasing the quantity of items.

// // Function to generate product listing
// const generateProductListing = (products) => {
//     const productGrid = document.querySelector('.product-grid');
//     productGrid.innerHTML = '';
  
//     products.forEach((product, index) => {
//       const productItem = document.createElement('div');
//       productItem.classList.add('product-item');
  
//       productItem.innerHTML = `
//         <img src="${product.imageUrl}" alt="${product.name}">
//         <h3>${product.name}</h3>
//         <p>${product.description}</p>
//         <div class="price">$${product.price.toFixed(2)}</div>
//         <button data-index="${index}">Add to Cart</button>
//       `;
  
//       productGrid.appendChild(productItem);
//     });
  
//     // Attach event listeners to "Add to Cart" buttons
//     document.querySelectorAll('.product-item button').forEach(button => {
//       button.addEventListener('click', (e) => {
//         const productIndex = e.target.dataset.index;
//         addToCart(products[productIndex]);
//       });
//     });
//   };

// // Function to add a product to the cart
// const addToCart = (product) => {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
//     const existingProductIndex = cart.findIndex(item => item.name === product.name);
  
//     if (existingProductIndex !== -1) {
//       // If the product is already in the cart, update the quantity
//       cart[existingProductIndex].quantity += 1;
//     } else {
//       // If the product is not in the cart, add it
//       cart.push({ ...product, quantity: 1 });
//     }
  
//     localStorage.setItem('cart', JSON.stringify(cart));
//     updateCartUI();
//   };
  
//   // Function to increase the quantity of a product in the cart
//   const increaseQuantity = (index) => {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     cart[index].quantity += 1;
//     localStorage.setItem('cart', JSON.stringify(cart));
//     updateCartUI();
//   };
  
//   // Function to decrease the quantity of a product in the cart
//   const decreaseQuantity = (index) => {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
//     if (cart[index].quantity > 1) {
//       cart[index].quantity -= 1;
//     } else {
//       cart.splice(index, 1); // Remove the item from the cart if quantity is 1
//     }
  
//     localStorage.setItem('cart', JSON.stringify(cart));
//     updateCartUI();
//   };
  
//   // Function to update the cart UI
//   const updateCartUI = () => {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const cartList = document.querySelector('#shopping-cart ul');
//     const totalElement = document.querySelector('.total');
//     let total = 0;
  
//     cartList.innerHTML = '';
  
//     cart.forEach((item, index) => {
//       const cartItem = document.createElement('li');
  
//       cartItem.innerHTML = `
//         ${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}
//         <button onclick="increaseQuantity(${index})">+</button>
//         <button onclick="decreaseQuantity(${index})">-</button>
//       `;
  
//       cartList.appendChild(cartItem);
//       total += item.price * item.quantity;
//     });
  
//     totalElement.textContent = `Total: $${total.toFixed(2)}`;
//   };
  
//   // Fetch products from JSON file and generate product listing
//   document.addEventListener('DOMContentLoaded', () => {
//     fetch('products.json')
//       .then(response => response.json())
//       .then(data => {
//         generateProductListing(data);
//         updateCartUI(); // Update cart UI on page load
//       })
//       .catch(error => console.error('Error fetching product data:', error));
//   });
  
// Task_8 - Add a "Remove" button to each item in cart. Write a function to handle removing products from the cart and updating the display.

// Answer :- Refer Task_7 is same

/* Activity -> 5 : Checkout Process */

// Task_9 - Create a checkout form that collects user information (e.g., name, address, payment details). Style the form using CSS. 

// Answer :- Explore index.html styles.css file

// Task_10 - Write a function to handle form submission, simulating the checkout process. Display a confirmation message with the order details.

// Function to show the checkout section
const showCheckoutForm = () => {
    document.getElementById('checkout').style.display = 'block';
  };
  
  // Function to generate product listing
  const generateProductListing = (products) => {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = '';
  
    products.forEach((product, index) => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
  
        productItem.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">$${product.price.toFixed(2)}</div>
            <button data-index="${index}">Add to Cart</button>
        `;
  
        productGrid.appendChild(productItem);
    });
  
    // Attach event listeners to "Add to Cart" buttons
    document.querySelectorAll('.product-item button').forEach(button => {
        button.addEventListener('click', (e) => {
            const productIndex = e.target.dataset.index;
            addToCart(products[productIndex]);
        });
    });
  };
  
  // Function to add a product to the cart
  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    const existingProductIndex = cart.findIndex(item => item.name === product.name);
  
    if (existingProductIndex !== -1) {
        // If the product is already in the cart, update the quantity
        cart[existingProductIndex].quantity += 1;
    } else {
        // If the product is not in the cart, add it
        cart.push({ ...product, quantity: 1 });
    }
  
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
  };
  
  // Function to increase the quantity of a product in the cart
  const increaseQuantity = (index) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity += 1;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
  };
  
  // Function to decrease the quantity of a product in the cart
  const decreaseQuantity = (index) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        cart.splice(index, 1); // Remove the item from the cart if quantity is 1
    }
  
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
  };
  
  // Function to update the cart UI
  const updateCartUI = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartList = document.querySelector('#shopping-cart ul');
    const totalElement = document.querySelector('.total');
    let total = 0;
  
    cartList.innerHTML = '';
  
    cart.forEach((item, index) => {
        const cartItem = document.createElement('li');
  
        cartItem.innerHTML = `
            ${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}
            <button onclick="increaseQuantity(${index})">+</button>
            <button onclick="decreaseQuantity(${index})">-</button>
        `;
  
        cartList.appendChild(cartItem);
        total += item.price * item.quantity;
    });
  
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
  };
  
  // Function to handle checkout form submission
  const handleCheckout = (event) => {
    event.preventDefault(); // Prevent the default form submission
  
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const payment = document.getElementById('payment-method').value;
  
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let orderDetails = `Name: ${name}\nAddress: ${address}\nPayment Details: ${payment}\n\nOrder Items:\n`;
  
    cart.forEach(item => {
        orderDetails += `${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}\n`;
    });
  
    // Display the order confirmation
    document.getElementById('order-details').textContent = orderDetails;
    document.getElementById('confirmation-message').style.display = 'block';
  
    // Clear the cart
    localStorage.removeItem('cart');
    updateCartUI();
  
    // Optionally, reset the form
    document.getElementById('checkout-form').reset();
  };
  
  // Fetch products from JSON file and generate product listing
  document.addEventListener('DOMContentLoaded', () => {
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            generateProductListing(data);
            updateCartUI(); // Update cart UI on page load
  
            // Attach event listener to checkout button
            // document.getElementById('checkout-button').addEventListener('click', showCheckoutForm);
  
            // Attach event listener to checkout form
            document.getElementById('checkout-form').addEventListener('submit', handleCheckout);
        });
  });