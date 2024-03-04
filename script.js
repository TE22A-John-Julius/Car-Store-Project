
// Open Cart
function openCartWindow() {
    let modal = document.getElementById('cartWindow');
    modal.style.display = 'block';
}

// Close the cart
function closeCartWindow() {
    let modal = document.getElementById('cartWindow');
    modal.style.display = 'none';
}

let totalPrice = 0;

let cartItems = []

function addItemToCart(item, imageUrl, price) {
    //Item object creation
     let newItem = {
        item: item,
        imageUrl: imageUrl,
        price: price
    };

     // Add the item to the cart array
     cartItems.push(newItem);

     // Save the updated cart to local storage
    saveCartToLocalStorage();

    // Item add
    let cartItemsContainer = document.getElementById('cartItems');
    let newItemElement = document.createElement('div');
    newItemElement.classList.add('cart-item');

    // Create image element
    let itemImage = document.createElement('img');
    itemImage.src = imageUrl;
    itemImage.alt = item;
    itemImage.style.width = '14vw';

    // Span element for item name
    let itemName = document.createElement('span');
    itemName.textContent = item;

    // Span element for item price
    let itemPrice = document.createElement('span');
    itemPrice.textContent = '$' + price.toFixed(2); // Display the price with two decimal places

    // Remove button
    let removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function () {
        removeItemFromCart(newItemElement, price);
    });

    // Update total price
    totalPrice += price;

    // Update total price element
    document.getElementById('totalPrice').textContent = 'Total: $' + totalPrice.toFixed(2);

    // Append image, name, price, and remove button to the new item div
    newItemElement.appendChild(itemImage);
    newItemElement.appendChild(itemName);
    newItemElement.appendChild(itemPrice);
    newItemElement.appendChild(removeButton);

    // Append item div to cart container
    cartItemsContainer.appendChild(newItemElement);
}

// Function to remove items from cart
function removeItemFromCart(item, price) {
    item.remove();
   
    // Remove item from array
    cartItems = cartItems.filter(cartItem => cartItem.price !== price);
    saveCartToLocalStorage();

    totalPrice -= price;

    // Update total price element
    document.getElementById('totalPrice').textContent = 'Total: $' + totalPrice.toFixed(2);
}

// Function to save cart to local storage
function saveCartToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Function to load cart from local storage
function loadCartFromLocalStorage() {
    let storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
        cartItems = JSON.parse(storedCart);
        // Display items from local storage
        cartItems.forEach(cartItem => {
            addItemToCart(cartItem.item, cartItem.imageUrl, cartItem.price);
        });
    }
}

// Load cart from local storage when the page loads
loadCartFromLocalStorage();

// Click event to cart button
let cartButton = document.getElementById('Cart_Button');
cartButton.addEventListener('click', function () {
    openCartWindow();
});

// Click events to buttons
let addButtons = document.querySelectorAll('.button-add');
addButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        let itemName = button.getAttribute('data-item');
        let itemImage = button.getAttribute('data-image');
        let itemPrice = parseFloat(button.getAttribute('data-price'));
        addItemToCart(itemName, itemImage, itemPrice);
    });
});
