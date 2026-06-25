let total = 0;

window.onload = function () {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

    savedCart.forEach(item => {
        displayItem(item.name, item.price);
    });
};

function addToCart(item, price) {
    displayItem(item, price);

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name: item, price: price });

    localStorage.setItem("cart", JSON.stringify(cart));
}

function displayItem(item, price) {
    const cartList = document.getElementById("cart");

    const li = document.createElement("li");
    li.textContent = item + " - GH₵" + price;

    cartList.appendChild(li);

    total += price;
    document.getElementById("total").textContent = total;
}

function clearCart() {
    document.getElementById("cart").innerHTML = "";
    total = 0;

    document.getElementById("total").textContent = total;

    localStorage.removeItem("cart");
}
document.getElementById("checkout-form")
.addEventListener("submit", function(e) {

    e.preventDefault();

    let name =
    document.getElementById("customer-name").value;

    let phone =
    document.getElementById("customer-phone").value;

    let address =
    document.getElementById("customer-address").value;

    document.getElementById("order-summary").innerHTML = `
        <h3>Order Confirmed!</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Total:</strong> GH₵${total}</p>
    `;
});
document.getElementById("whatsapp-btn")
.addEventListener("click", function () {

    let name =
    document.getElementById("customer-name").value;

    let phone =
    document.getElementById("customer-phone").value;

    let address =
    document.getElementById("customer-address").value;

    let message =
`NEW ORDER

Name: ${name}

Phone: ${phone}

Address: ${address}

Total: GH₵${total}`;

    let whatsappNumber = "233541929576";

    let url =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
});
function sendOrder() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let message = "🍴 LET THEM SAY PUB ORDER\n\n";

    let total = 0;

    cart.forEach(item => {
        message += `${item.name} - GH₵${item.price}\n`;
        total += item.price;
    });

    message += `\nTotal: GH₵${total}`;

    let whatsappURL =
        `https://wa.me/233541929576?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
}
if(document.getElementById("total-orders")){
    document.getElementById("total-orders").textContent = 15;
    document.getElementById("total-sales").textContent = "GH₵750";
    document.getElementById("customers").textContent = 12;
}