let products = document.querySelectorAll(`#Add`);
let cart = document.querySelector(`.cart`);

if (localStorage.getItem("counter") == null) {
    localStorage.setItem("counter", 0);
}

// Update cart count badge
function updateCartCount() {
    const cartBadge = document.getElementById('cartCount');
    if (cartBadge) {
        let count = 0;
        for (const key in localStorage) {
            if (!isNaN(key)) count++;
        }
        cartBadge.textContent = count;
    }
}


updateCartCount();

// add to localStorage
products.forEach(product => {
    product.addEventListener("click", (e) => {
        e.preventDefault();

        let cardBody = product.closest(".card-body");
        let stockBadge = cardBody.querySelector(".badge");
        
       
        if (stockBadge && stockBadge.textContent.trim().toLowerCase() === "out of stock") {
            Swal.fire({
                icon: 'error',
                title: 'Out of Stock',
                text: 'Sorry, this item is out of stock and cannot be added.',
                confirmButtonColor: '#c27e26'
            });
            return;
        }

        let name = product.parentElement.innerText.split("\n")[0];
        let price = product.parentElement.parentElement.firstElementChild.innerText;

        let obj = {
            "name": name,
            "price": price
        }

        let index = localStorage.getItem("counter");

        localStorage.setItem(index, JSON.stringify(obj));

        +index++;
        localStorage["counter"] = index;

        
        Swal.fire({
            icon: 'success',
            title: 'Added to Cart!',
            text: `${name} has been added to your cart!`,
            confirmButtonColor: '#c27e26',
            timer: 2000,
            showConfirmButton: false
        });
        
        updateCartCount();
    });
});
