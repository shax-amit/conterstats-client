const mockWishlist = [
  { name: "Pistol #7", price: 4.2 },
  { name: "Knife #3", price: 5.5 },
  { name: "Rifle #6", price: 16.6 },
];

const container = document.getElementById("items-container");
const totalPriceSpan = document.getElementById("total-price");

function renderWishlist(items) {
  container.innerHTML = "";
  let total = 0;

  for (const item of items) {
    total += item.price;

    const section = document.createElement("section");
    section.className = "item-card";
    section.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.price}$</p>
      <button>Buy now</button>
    `;

    container.appendChild(section);
  }

  totalPriceSpan.textContent = total.toFixed(2);
}

renderWishlist(mockWishlist);
