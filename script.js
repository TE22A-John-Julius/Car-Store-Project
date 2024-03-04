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

function addItemToCart(item, imageUrl, price) {
    // Item add
    let cartItemsContainer = document.getElementById('cartItems');
    let newItem = document.createElement('div');
    newItem.classList.add('cart-item');

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
        removeItemFromCart(newItem, price);
    });

    // Update total price
    totalPrice += price;

    // Update total price element
    document.getElementById('totalPrice').textContent = 'Total: $' + totalPrice.toFixed(2);

    // Append image, name, price, and remove button to the new item div
    newItem.appendChild(itemImage);
    newItem.appendChild(itemName);
    newItem.appendChild(itemPrice);
    newItem.appendChild(removeButton);

    // Append item div to cart container
    cartItemsContainer.appendChild(newItem);
}

// Function to remove items from cart
function removeItemFromCart(item, price) {
    item.remove();
    totalPrice -= price;

    // Update total price element
    document.getElementById('totalPrice').textContent = 'Total: $' + totalPrice.toFixed(2);
}

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
