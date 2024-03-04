
    // Open Cart
    function openCartWindow() {
        var modal = document.getElementById('cartWindow');
        modal.style.display = 'block';
    }

    // Close the cart
    function closeCartWindow() {
        var modal = document.getElementById('cartWindow');
        modal.style.display = 'none';
    }

    // Function to add items to cart
    function addItemToCart(item, imageUrl) {
        // Item add
        var cartItemsContainer = document.getElementById('cartItems');
        var newItem = document.createElement('div');

        // Create image element
        var itemImage = document.createElement('img');
        itemImage.src = imageUrl;
        itemImage.alt = item;
        itemImage.style.width = '50px';

        // Span element for item name
        var itemName = document.createElement('span');
        itemName.textContent = item;

        // Append image and name to the new item div
        newItem.appendChild(itemImage);
        newItem.appendChild(itemName);

        // Append item div to cart container
        cartItemsContainer.appendChild(newItem);
    }

    // Click event to cart button
    var cartButton = document.getElementById('Cart_Button');
    cartButton.addEventListener('click', function () {
        openCartWindow();
    });

    // Click events to buttons
    var addButton1 = document.querySelector('.button-add');
    addButton1.addEventListener('click', function () {
        var itemName = addButton1.getAttribute('data-item');
        var itemImage = addButton1.getAttribute('data-image');
        addItemToCart(itemName, itemImage);
    });

