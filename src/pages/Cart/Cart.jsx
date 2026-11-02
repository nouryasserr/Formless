import { useState } from "react";
import { NavLink } from "react-router-dom";
import product from "../../assets/product.png";

const initialItems = [
  { id: 1, name: "Everyday Hoodie", color: "Cream", size: "M", qty: 1, price: 850 },
  { id: 2, name: "Studio Hoodie", color: "Brown", size: "L", qty: 1, price: 950 },
];

const steps = ["Cart", "Checkout", "Payment", "Confirmation"];
const currentStep = 0;

const MAX_QUANTITY = 10;

const formatPrice = (value) => `EGP ${value.toLocaleString("en-US")}`;

const features = [
  {
    title: "Choose your fit",
    text: "Find your style and size.",
    icon: (
      <svg
        viewBox="0 0 48 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="w-11 h-auto"
      >
        <path
          d="M20 7a4 4 0 1 1 6 3.5c-1.2.7-2 1.6-2 3V15L44 27a2 2 0 0 1-1 3.7H5a2 2 0 0 1-1-3.7L24 15"
          stroke="#43302e"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Pay with InstaPay",
    text: "After checkout, transfer the total and upload your receipt.",
    icon: <i className="fa-regular fa-credit-card text-3xl"></i>,
  },
  {
    title: "Confirmed by our team",
    text: "We verify your payment and prepare your order.",
    icon: (
      <svg
        viewBox="0 0 48 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="w-11 h-auto"
      >
        <path
          d="M3 4h26v20H3zM29 11h8l7 7v6H29z"
          stroke="#43302e"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle cx="11" cy="26" r="3.5" fill="#fef8f0" stroke="#43302e" strokeWidth="2" />
        <circle cx="36" cy="26" r="3.5" fill="#fef8f0" stroke="#43302e" strokeWidth="2" />
      </svg>
    ),
  },
];

function Cart() {
  const [items, setItems] = useState(initialItems);

  const itemCount = items.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const itemLabel = `${itemCount} ${itemCount === 1 ? "item" : "items"}`;

  const updateQuantity = (id, change) => {
    setItems((current) =>
      current.map((item) =>
        item.id === id
          ? { ...item, qty: Math.min(MAX_QUANTITY, Math.max(1, item.qty + change)) }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setItems((current) => current.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-quaternary">
      <div className="px-2 xs:px-4 sm:px-10 md:px-16 py-4 sm:py-6">
        {/* breadcrumb */}
        <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-tertiary/70">
          <NavLink to="/" className="hover:text-secondary transition-colors duration-300">
            Home
          </NavLink>
          <span>/</span>
          <span className="font-bold text-tertiary">Cart</span>
        </nav>
        {/* end-breadcrumb */}

        {/* hero */}
        <div className="flex flex-col items-center text-center mt-4">
          <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl leading-tight">
            YOUR{" "}
            <span className="relative inline-block">
              NEXT
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 260 30"
                fill="none"
                aria-hidden="true"
                className="absolute left-0 -bottom-3 sm:-bottom-4 w-full h-auto text-secondary"
              >
                <path
                  d="M5 22 C75 10 164 5 253 6 C187 10 128 16 94 24"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>{" "}
            FAVOURITES.
          </h1>
          <p className="mt-3 text-base sm:text-lg md:text-xl font-medium">
            Good choices. Make them yours.
          </p>
        </div>
        {/* end-hero */}

        {/* steps */}
        <ol className="mt-6 grid grid-cols-4 max-w-2xl mx-auto">
          {steps.map((step, index) => {
            const active = index === currentStep;
            return (
              <li key={step} className="relative flex flex-col items-center">
                {index < steps.length - 1 && (
                  <span className="absolute top-2 sm:top-2.5 left-1/2 w-full h-px bg-tertiary/40"></span>
                )}
                <span
                  className={`relative z-10 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 ${
                    active ? "bg-secondary border-secondary" : "bg-quaternary border-tertiary/60"
                  }`}
                ></span>
                <span
                  className={`mt-2 text-[11px] xs:text-xs sm:text-sm ${
                    active ? "text-secondary font-medium" : "text-tertiary"
                  }`}
                >
                  {step}
                </span>
              </li>
            );
          })}
        </ol>
        {/* end-steps */}

        <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-6">
          {/* cart */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-bold">Your cart ({itemLabel})</h2>

            {items.length > 0 ? (
              <>
                <div className="hidden sm:flex gap-6 mt-4 pb-2 border-b border-tertiary/20 text-xs sm:text-sm">
                  <span className="flex-1">Item</span>
                  <span className="w-28 text-center">Quantity</span>
                  <span className="w-24 text-right">Total</span>
                </div>
                <ul>
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="flex gap-3 sm:gap-6 py-4 border-b border-tertiary/20"
                    >
                      <div className="shrink-0 w-24 h-24 xs:w-28 xs:h-28 sm:w-36 sm:h-36 rounded-md bg-[#efe6dc] p-2">
                        <img
                          src={product}
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                        <div className="flex-1">
                          <p className="text-sm sm:text-base font-semibold">{item.name}</p>
                          <p className="mt-1 text-xs sm:text-sm text-tertiary/70">
                            {item.color} / {item.size}
                          </p>
                          <p className="mt-2 text-sm sm:text-base">{formatPrice(item.price)}</p>
                          <div className="mt-3 flex items-center gap-3 text-xs">
                            <NavLink
                              to="/products"
                              className="underline hover:text-secondary transition-colors duration-300"
                            >
                              Edit options
                            </NavLink>
                            <span className="text-tertiary/50">|</span>
                            <button
                              type="button"
                              onClick={() => removeItem(item.id)}
                              className="underline hover:text-secondary transition-colors duration-300"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between sm:contents">
                          <div className="w-28 flex items-center justify-between rounded border border-tertiary/30">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, -1)}
                              disabled={item.qty <= 1}
                              aria-label={`Decrease ${item.name} quantity`}
                              className="w-9 h-9 hover:text-secondary disabled:opacity-40 transition-colors duration-300"
                            >
                              <i className="fa-solid fa-minus text-xs"></i>
                            </button>
                            <span className="text-sm">{item.qty}</span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, 1)}
                              disabled={item.qty >= MAX_QUANTITY}
                              aria-label={`Increase ${item.name} quantity`}
                              className="w-9 h-9 hover:text-secondary disabled:opacity-40 transition-colors duration-300"
                            >
                              <i className="fa-solid fa-plus text-xs"></i>
                            </button>
                          </div>
                          <p className="w-24 text-right text-sm sm:text-base">
                            {formatPrice(item.price * item.qty)}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <div className="mt-4 flex flex-col items-center gap-3 rounded-lg border border-dashed border-tertiary/40 px-4 py-10 text-center">
                <i className="fa-solid fa-cart-shopping text-3xl"></i>
                <p className="text-sm sm:text-base font-semibold">Your cart is empty.</p>
                <p className="text-xs sm:text-sm text-tertiary/70">
                  Find a piece you love, or create your own.
                </p>
              </div>
            )}

            <NavLink
              to="/products"
              className="mt-6 inline-flex items-center gap-2 text-sm hover:gap-3 transition-all duration-300 ease-in-out"
            >
              <i className="fa-solid fa-arrow-left-long"></i>
              <span className="underline">Continue shopping</span>
            </NavLink>
          </div>
          {/* end-cart */}

          {/* summary */}
          <aside className="lg:self-start rounded-lg border border-tertiary/30 p-4 sm:p-5">
            <h2 className="text-xl sm:text-2xl font-bold">Order summary</h2>
            <div className="mt-4 flex flex-col gap-3 text-sm pb-4 border-b border-tertiary/20">
              <div className="flex justify-between gap-4">
                <span>Subtotal ({itemLabel})</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Delivery</span>
                <span className="text-tertiary/70 text-right">Calculated at checkout</span>
              </div>
            </div>
            <div className="flex justify-between items-center pt-4">
              <span className="text-base sm:text-lg font-bold">Subtotal</span>
              <span className="text-base sm:text-lg font-bold">{formatPrice(subtotal)}</span>
            </div>
            <p className="mt-3 text-xs text-tertiary/70">
              Delivery is added after you enter your address.
            </p>
            {items.length > 0 ? (
              <NavLink
                to="/checkout"
                className="mt-4 w-full flex items-center justify-center gap-2 text-quaternary bg-secondary text-sm xs:text-base px-4 py-3 rounded-md border border-secondary hover:bg-transparent hover:text-tertiary hover:border-tertiary transition-all duration-300 ease-in-out"
              >
                <span className="font-semibold">Proceed to checkout</span>
                <i className="fa-solid fa-arrow-right-long"></i>
              </NavLink>
            ) : (
              <button
                type="button"
                disabled
                className="mt-4 w-full flex items-center justify-center gap-2 text-quaternary bg-secondary text-sm xs:text-base px-4 py-3 rounded-md border border-secondary opacity-50 cursor-not-allowed"
              >
                <span className="font-semibold">Proceed to checkout</span>
                <i className="fa-solid fa-arrow-right-long"></i>
              </button>
            )}
            <div className="mt-4 rounded-md bg-primary px-4 py-4">
              <p className="text-base sm:text-lg font-bold">Payment with InstaPay</p>
              <p className="mt-1 text-xs sm:text-sm">
                After checkout, transfer the total and upload your receipt. We confirm your
                order after verifying payment.
              </p>
            </div>
          </aside>
          {/* end-summary */}
        </div>
      </div>

      {/* features */}
      <div className="mt-4 sm:mt-6 bg-primary/20 border-t border-tertiary/10">
        <ul className="px-2 xs:px-4 sm:px-10 md:px-16 py-4 sm:py-6 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-tertiary/15">
          {features.map((feature) => (
            <li
              key={feature.title}
              className="flex items-center sm:items-start md:items-center gap-4 py-4 sm:py-2 sm:px-4 md:px-8 md:justify-center"
            >
              <span className="shrink-0 w-12 flex justify-center">{feature.icon}</span>
              <div>
                <p className="text-sm sm:text-base font-semibold">{feature.title}</p>
                <p className="mt-1 text-xs text-tertiary/70 max-w-[15rem]">{feature.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* end-features */}
    </div>
  );
}

export default Cart;
