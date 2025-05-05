
document.getElementById('app').innerHTML = `
  <header>
    <h1>Mercatus</h1>
    <nav>
      <a href="#men">Men</a>
      <a href="#women">Women</a>
      <a href="#cart">Cart</a>
    </nav>
  </header>
  <main>
    <section id="men">
      <h2>Men's Clothing</h2>
      <div class="product">
        <img src="./src/assets/men1.jpg" alt="Men Product 1" />
        <p>Men's T-Shirt - $20</p>
      </div>
      <div class="product">
        <img src="./src/assets/men2.jpg" alt="Men Product 2" />
        <p>Men's Jacket - $45</p>
      </div>
    </section>
    <section id="women">
      <h2>Women's Clothing</h2>
      <div class="product">
        <img src="./src/assets/women1.jpg" alt="Women Product 1" />
        <p>Women's Dress - $35</p>
      </div>
      <div class="product">
        <img src="./src/assets/women2.jpg" alt="Women Product 2" />
        <p>Women's Blouse - $25</p>
      </div>
    </section>
    <section id="checkout">
      <h2>Checkout</h2>
      <form>
        <input placeholder="Full Name" required />
        <input placeholder="Address Line 1" required />
        <input placeholder="City" required />
        <input placeholder="Country" required />
        <input placeholder="ZIP/Postal Code (Optional)" />
        <button type="submit">Pay with Paysera</button>
      </form>
    </section>
  </main>
`;
