// Product Filtering Logic
const productCards = document.querySelectorAll(".product-card");
const filterButtons = document.querySelectorAll(".btn-filter");
const dropdownBtn = document.getElementById("filterDropdownBtn");
const dropdownContent = document.getElementById("filterDropdownContent");
const dropdownOptions = document.querySelectorAll(".dropdown-option");
const currentFilterText = document.getElementById("currentFilter");

// Filter Products Function
function filterProducts(category) {
    productCards.forEach(card => {
        const shouldShow = 
            category === 'all' ||
            (category === 'stock' && !card.classList.contains('out-of-stock')) ||
            card.classList.contains(category);
        
        card.classList.toggle('d-none', !shouldShow);
    });
}

// Desktop Filter Buttons
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        // Filter products
        const filter = button.dataset.filter;
        filterProducts(filter);
    });
});

// Mobile Dropdown Toggle
if (dropdownBtn) {
    dropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownBtn.classList.toggle('active');
        dropdownContent.classList.toggle('show');
    });
}

// Mobile Dropdown Options
dropdownOptions.forEach(option => {
    option.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = option.dataset.filter;
        const label = option.dataset.label;
        
        // Update current filter text
        if (currentFilterText) {
            currentFilterText.textContent = label;
        }
        
        // Filter products
        filterProducts(filter);
        
        // Close dropdown
        dropdownBtn.classList.remove('active');
        dropdownContent.classList.remove('show');
    });
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (dropdownBtn && !dropdownBtn.contains(e.target) && !dropdownContent.contains(e.target)) {
        dropdownBtn.classList.remove('active');
        dropdownContent.classList.remove('show');
    }
});
    




