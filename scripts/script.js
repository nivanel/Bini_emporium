/* product.html */
var mainImage = document.getElementById("mainImage");
var smallImage = document.getElementsByClassName("small-img")

smallImage [0].onclick = function () {
    mainImage.src = smallImage[0].src;
}
smallImage [1].onclick = function () {
    mainImage.src = smallImage[1].src;
}
smallImage [2].onclick = function () {
    mainImage.src = smallImage[2].src;
}
smallImage [3].onclick = function () {
    mainImage.src = smallImage[3].src;
}
smallImage [4].onclick = function () {
    mainImage.src = smallImage[4].src;
}
smallImage [5].onclick = function () {
    mainImage.src = smallImage[5].src;
}
smallImage [6].onclick = function () {
    mainImage.src = smallImage[6].src;
}
smallImage [7].onclick = function () {
    mainImage.src = smallImage[7].src;
}





// product html

document.addEventListener('DOMContentLoaded', function() {
    // Function to load product details based on hash fragment
    function showProductDetails() { /*Hides all product details initially, then displays the one corresponding to the current URL hash.*/
        // Get the hash fragment from the URL
        var hash = window.location.hash;

        var productDetails = document.querySelectorAll('.product-details');
        productDetails.forEach(function(detail) { /*Uses querySelectorAll to select all elements with the class product-details and hides them.*/
            detail.style.display = 'none';
        });

        // Show the corresponding product details based on hash
        if (hash === '#product-details-one') {
            document.getElementById('product-details-one').style.display = 'flex';
        } else if (hash === '#product-details-two') {
            document.getElementById('product-details-two').style.display = 'flex';
        } else if (hash === '#product-details-three') {
            document.getElementById('product-details-three').style.display = 'flex';
        } else if (hash === '#product-details-four') {
            document.getElementById('product-details-four').style.display = 'flex';
        } else if (hash === '#product-details-five') {
            document.getElementById('product-details-five').style.display = 'flex';
        } else if (hash === '#product-details-six') {
            document.getElementById('product-details-six').style.display = 'flex';
        } else if (hash === '#product-details-seven') {
            document.getElementById('product-details-seven').style.display = 'flex';
        } else if (hash === '#product-details-eight') {
            document.getElementById('product-details-eight').style.display = 'flex';
        } else if (hash === '#product-details-nine') {
            document.getElementById('product-details-nine').style.display = 'flex';
        } else if (hash === '#product-details-ten') {
            document.getElementById('product-details-ten').style.display = 'flex';
        } else if (hash === '#product-details-eleven') {
            document.getElementById('product-details-eleven').style.display = 'flex';
        } else if (hash === '#product-details-twelve') {
            document.getElementById('product-details-twelve').style.display = 'flex';
        } else if (hash === '#product-details-thirteen') {
            document.getElementById('product-details-thirteen').style.display = 'flex';
        } else if (hash === '#product-details-fourteen') {
            document.getElementById('product-details-fourteen').style.display = 'flex';
        } else if (hash === '#product-details-fifthteen') {
            document.getElementById('product-details-fifthteen').style.display = 'flex';
        } else if (hash === '#product-details-sixthteen') {
            document.getElementById('product-details-sixthteen').style.display = 'flex';
        } else if (hash === '#product-details-seventeen') {
            document.getElementById('product-details-seventeen').style.display = 'flex';
        } else if (hash === '#product-details-eighteen') {
            document.getElementById('product-details-eighteen').style.display = 'flex';
        } else if (hash === '#product-details-nineteen') {
            document.getElementById('product-details-nineteen').style.display = 'flex';
        } else if (hash === '#product-details-twenty') {
            document.getElementById('product-details-twenty').style.display = 'flex';
        } else if (hash === '#product-details-twentyone') {
            document.getElementById('product-details-twentyone').style.display = 'flex';
        } else if (hash === '#product-details-twentytwo') {
            document.getElementById('product-details-twentytwo').style.display = 'flex';
        } else if (hash === '#product-details-twentythree') {
            document.getElementById('product-details-twentythree').style.display = 'flex';
        } else if (hash === '#product-details-twentyfour') {
            document.getElementById('product-details-twentyfour').style.display = 'flex';
        } else if (hash === '#product-details-twentyfive') {
            document.getElementById('product-details-twentyfive').style.display = 'flex';
        } else if (hash === '#product-details-twentysix') {
            document.getElementById('product-details-twentysix').style.display = 'flex';
        } else if (hash === '#product-details-twentyseven') {
            document.getElementById('product-details-twentyseven').style.display = 'flex';
        } else if (hash === '#product-details-twentyeight') {
            document.getElementById('product-details-twentyeight').style.display = 'flex';
        } else if (hash === '#product-details-twentynine') {
            document.getElementById('product-details-twentynine').style.display = 'flex';
        } else if (hash === '#product-details-thirty') {
            document.getElementById('product-details-thirty').style.display = 'flex';
        } else if (hash === '#product-details-thirtyone') {
            document.getElementById('product-details-thirtyone').style.display = 'flex';
        } else if (hash === '#product-details-thirtytwo') {
            document.getElementById('product-details-thirtytwo').style.display = 'flex';
        } 
    }
    // Call the function initially to load product details
    showProductDetails();
});





//cart html

// scripts/script.js

// document.addEventListener('DOMContentLoaded', () => {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const addToCartButtons = document.querySelectorAll('.add-to-cart');

//     addToCartButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             const id = button.getAttribute('data-id');
//             const name = button.getAttribute('data-name');
//             const price = parseFloat(button.getAttribute('data-price'));
//             const image = button.getAttribute('data-image');

//             const product = { id, name, price, image, quantity: 1 };
//             addToCart(product);
//             alert('Added to Cart!');
//         });
//     });

//     function addToCart(product) {
//         const index = cart.findIndex(item => item.id === product.id);
//         if (index === -1) {
//             cart.push(product);
//         } else {
//             cart[index].quantity += 1;
//         }
//         localStorage.setItem('cart', JSON.stringify(cart));
//         updateCartUI();
//     }

//     function updateCartUI() {
//         const cartTable = document.querySelector('#cart tbody');
//         if (!cartTable) return;
//         cartTable.innerHTML = '';
//         let subtotal = 0;
//         cart.forEach(item => {
//             const row = document.createElement('tr');
//             row.innerHTML = `
//                 <td><i class="far fa-times-circle"></i><a href="#" data-id="${item.id}" class="remove"></a></td>
//                 <td><img src="${item.image}" alt="${item.name}"></td>
//                 <td>${item.name}</td>
//                 <td>P${item.price}</td>
//                 <td><input type="number" value="${item.quantity}" data-id="${item.id}" class="quantity"></td>
//                 <td>P${item.price * item.quantity}</td>
//             `;
//             cartTable.appendChild(row);
//             subtotal += item.price * item.quantity;
//         });

//         document.querySelector('#subtotal td:nth-child(2)').textContent = `P${subtotal}`;
//         document.querySelector('#subtotal strong:nth-child(2)').textContent = `P${subtotal}`;
//     }

//     updateCartUI();

//     document.querySelector('#cart').addEventListener('click', (e) => {
//         if (e.target.classList.contains('remove')) {
//             e.preventDefault();
//             const id = e.target.getAttribute('data-id');
//             removeFromCart(id);
//         }
//     });

//     document.querySelector('#cart').addEventListener('input', (e) => {
//         if (e.target.classList.contains('quantity')) {
//             const id = e.target.getAttribute('data-id');
//             const quantity = parseInt(e.target.value);
//             updateQuantity(id, quantity);
//         }
//     });

//     function removeFromCart(id) {
//         const index = cart.findIndex(item => item.id === id);
//         if (index !== -1) {
//             cart.splice(index, 1);
//             localStorage.setItem('cart', JSON.stringify(cart));
//             updateCartUI();
//         }
//     }

//     function updateQuantity(id, quantity) {
//         const index = cart.findIndex(item => item.id === id);
//         if (index !== -1 && quantity > 0) {
//             cart[index].quantity = quantity;
//             localStorage.setItem('cart', JSON.stringify(cart));
//             updateCartUI();
//         }
//     }
// });

// scripts/script.js

// scripts/script.js

document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const product = {
                id: button.dataset.id,
                name: button.dataset.name,
                price: parseFloat(button.dataset.price),
                image: button.dataset.image,
                quantity: parseInt(button.previousElementSibling.value) || 1
            };
            addToCart(product);
            alert('Added to Cart!');
        });
    });

    function addToCart(product) {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += product.quantity;
        } else {
            cart.push(product);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    }
});








// Get all product sections
var productSections = document.querySelectorAll('.product-details');

// Loop through each product section
productSections.forEach(function(productSection) {
    // Find mainImage and smallImages within the current product section
    var mainImage = productSection.querySelector(".mainImage");
    var smallImages = productSection.querySelectorAll(".small-img");

    // Attach click event to each small image
    smallImages.forEach(function(smallImage) {
        smallImage.onclick = function() {
            mainImage.src = smallImage.src;
        };
    });
});
