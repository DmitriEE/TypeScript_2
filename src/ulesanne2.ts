
const productName = document.getElementById('productName') as HTMLInputElement;
const productCategory = document.getElementById('productCategory') as HTMLInputElement;
const productPrice = document.getElementById('productPrice') as HTMLInputElement;
const productQuantities = document.getElementById('productQuantities') as HTMLInputElement;
const productSpecs = document.getElementById('productSpecs') as HTMLInputElement;
const button = document.getElementById('addProductBtn');
const container = document.getElementById('productsContainer') as HTMLElement;
let Name = productName.value;
let Category = productCategory.value;
let Price = parseFloat(productPrice.value);
let Quantities = parseFloat(productQuantities.value);
let Specs = productSpecs.value.split(';').map(spec => spec.trim());
button?.addEventListener("click", function (event) {
    event.preventDefault(); // stops page reload
    const Name = productName.value;
    const Category = productCategory.value;
    const Price = parseFloat(productPrice.value);
    const Quantities = parseFloat(productQuantities.value);
    let Avl;
    if (Quantities === 0) {
        Avl = "Out of Stock";
    } else if (Quantities > 0 && Quantities <= 5) {
        Avl = "Low Stock";
    } else {
        Avl = "In Stock";
    }
    const Specs = productSpecs.value.split(';').map(spec => spec.trim());

    if (!Name || !Category || isNaN(Price) || isNaN(Quantities)) {
        alert("Please fill in all fields with valid values.");
        return;
    } else if (Price < 0 || Quantities < 0) {
        alert("Price and Quantities must be non-negative.");
        return;
    } 

    const card = document.createElement('div');
    card.className = 'productscard';

    // Создаём innerHTML карточку
    card.innerHTML = `
      <div class="product-title">${Name}</div>
      <div class="product-info category">Category: ${Category}</div>
      <div class="product-info price">Price: $${Price}</div>
      <div class="product-info available">Available: ${Quantities}</div>
      <div class="status-badge">Status: ${Avl} </div>
      <div style="font-size: 12px; color: #999; margin-top: 10px;">
        Specs: ${Specs.join(', ')}
      </div>
    `;

    container.appendChild(card);
});
