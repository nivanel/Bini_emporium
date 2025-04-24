/* Switch through different product images*/
var productSections = document.querySelectorAll('.product-details');

productSections.forEach(function(productSection) {
    var mainImage = productSection.querySelector(".mainImage");
    var smallImages = productSection.querySelectorAll(".small-img");

    smallImages.forEach(function(smallImage) {
        smallImage.onclick = function() {
            mainImage.src = smallImage.src;
        };
    });
});



//Hide other products
document.addEventListener('DOMContentLoaded', function() {
    function showProductDetails() { 
        var hash = window.location.hash;

        var productDetails = document.querySelectorAll('.product-details');
        productDetails.forEach(function(detail) { 
            detail.style.display = 'none';
        });

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
        } else if (hash === '#product-details-sixteen') {
            document.getElementById('product-details-sixteen').style.display = 'flex';
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
    showProductDetails();
});


/*Add to cart*/
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