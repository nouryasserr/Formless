import { NavLink } from "react-router-dom";
import product from "../../assets/product.png";

const order = {
  number: "FRM-1024",
  placed: "14 Oct 2026",
  customer: "Maryam",
  email: "maryam@example.com",
  paymentMethod: "InstaPay",
  subtotal: 1800,
  delivery: 60,
};

const pieces = [
  {
    id: 1,
    name: "Everyday Hoodie",
    color: "Cream",
    size: "M",
    qty: 1,
    price: 850,
  },
  {
    id: 2,
    name: "Studio Hoodie",
    color: "Brown",
    size: "L",
    qty: 1,
    price: 950,
  },
];

const steps = ["Confirmed", "Preparing", "Shipped", "Delivered"];
const currentStep = 0;

const formatPrice = (value) => `EGP ${value.toLocaleString("en-US")}`;

function Confirm() {
  const total = order.subtotal + order.delivery;

  return (
    <div className="bg-quaternary">
      <div className="px-2 xs:px-4 sm:px-10 md:px-16 py-4 sm:py-6">
        {/* breadcrumb */}
        <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-tertiary/70">
          <NavLink
            to="/"
            className="hover:text-secondary transition-colors duration-300"
          >
            Home
          </NavLink>
          <span>/</span>
          <NavLink
            to="/account"
            className="hover:text-secondary transition-colors duration-300"
          >
            My account
          </NavLink>
          <span>/</span>
          <NavLink
            to="/orders"
            className="hover:text-secondary transition-colors duration-300"
          >
            Orders
          </NavLink>
          <span>/</span>
          <span className="font-bold text-tertiary">{order.number}</span>
        </nav>
        {/* end-breadcrumb */}

        {/* hero */}
        <div className="flex flex-col items-center text-center mt-6 sm:mt-4">
          <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary">
            <i className="fa-solid fa-check text-2xl sm:text-3xl text-tertiary"></i>
          </div>
          <h1 className="mt-3 text-4xl xs:text-5xl sm:text-6xl lg:text-7xl leading-tight">
            IT&apos;S{" "}
            <span className="relative inline-block">
              OFFICIALLY
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
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>{" "}
            YOURS.
          </h1>
          <p className="mt-3 text-lg sm:text-xl md:text-2xl font-medium">
            Order confirmed. Thanks, {order.customer}!
          </p>
          <p className="mt-2 max-w-md text-xs sm:text-sm text-tertiary/70">
            Your {order.paymentMethod} payment has been verified. A confirmation
            email has been sent to {order.email}.
          </p>
        </div>
        {/* end-hero */}

        {/* order info */}
        <div className="mt-6 sm:mt-8 grid grid-cols-2 md:grid-cols-4 gap-y-4 rounded-lg border border-tertiary/20 px-4 py-4 sm:px-5">
          <div className="pr-3 md:border-r border-tertiary/20">
            <p className="text-xs text-tertiary/70">Order #</p>
            <p className="mt-1 text-base sm:text-lg font-bold">
              {order.number}
            </p>
          </div>
          <div className="pl-3 md:px-5 border-l md:border-l-0 md:border-r border-tertiary/20">
            <p className="text-xs text-tertiary/70">Placed</p>
            <p className="mt-1 text-base sm:text-lg">{order.placed}</p>
          </div>
          <div className="pr-3 md:px-5 md:border-r border-tertiary/20">
            <p className="text-xs text-tertiary/70">Order status</p>
            <span className="mt-1 inline-flex items-center gap-2 rounded-full bg-secondary/15 px-3 py-1 text-xs sm:text-sm text-secondary">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
              Confirmed
            </span>
          </div>
          <div className="pl-3 md:pl-5 border-l md:border-l-0 border-tertiary/20">
            <p className="text-xs text-tertiary/70">Payment status</p>
            <span className="mt-1 inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs sm:text-sm font-semibold">
              <i className="fa-solid fa-check"></i>
              Payment verified
            </span>
          </div>
        </div>
        {/* end-order info */}

        {/* tracking */}
        <div className="mt-3 sm:mt-4 rounded-lg border border-tertiary/20 px-2 sm:px-6 pt-5 pb-4">
          <ol className="grid grid-cols-4">
            {steps.map((step, index) => {
              const done = index <= currentStep;
              return (
                <li key={step} className="relative flex flex-col items-center">
                  {index < steps.length - 1 && (
                    <span
                      className={`absolute top-2.5 sm:top-3 left-1/2 w-full h-px ${
                        index < currentStep ? "bg-secondary" : "bg-tertiary/30"
                      }`}
                    ></span>
                  )}
                  <span
                    className={`relative z-10 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 ${
                      done
                        ? "bg-secondary border-secondary text-quaternary"
                        : "bg-quaternary border-tertiary/50"
                    }`}
                  >
                    {done && (
                      <i className="fa-solid fa-check text-[10px] sm:text-xs"></i>
                    )}
                  </span>
                  <span
                    className={`mt-2 text-[11px] xs:text-xs sm:text-sm ${
                      done ? "text-secondary font-medium" : "text-tertiary"
                    }`}
                  >
                    {step}
                  </span>
                </li>
              );
            })}
          </ol>
          <p className="mt-4 text-center text-xs text-tertiary/70">
            We&apos;ll email you when your order is dispatched.
          </p>
        </div>
        {/* end-tracking */}

        <div className="mt-3 sm:mt-4 grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
          {/* pieces & delivery */}
          <div className="lg:col-span-2 rounded-lg border border-tertiary/20 p-4 sm:p-5">
            <h2 className="text-lg sm:text-xl font-bold">Your pieces</h2>
            <ul className="mt-3">
              {pieces.map((piece) => (
                <li
                  key={piece.id}
                  className="flex items-center gap-3 sm:gap-4 py-3 border-b border-tertiary/20"
                >
                  <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-md bg-[#efe6dc] p-2">
                    <img
                      src={product}
                      alt={piece.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-1 flex-col xs:flex-row xs:items-center justify-between gap-1">
                    <div>
                      <p className="text-sm sm:text-base font-semibold">
                        {piece.name}
                      </p>
                      <p className="mt-1 text-xs text-tertiary/70">
                        Color: {piece.color}
                      </p>
                      <p className="text-xs text-tertiary/70">
                        Size: {piece.size}
                      </p>
                      <p className="text-xs text-tertiary/70">
                        Qty: {piece.qty}
                      </p>
                    </div>
                    <p className="text-sm sm:text-base">
                      {formatPrice(piece.price)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <h2 className="mt-5 text-lg sm:text-xl font-bold">
              Delivery details
            </h2>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-xs text-tertiary/70">Name</p>
                  <p className="mt-1">Maryam Magdy</p>
                </div>
                <div>
                  <p className="text-xs text-tertiary/70">Address</p>
                  <p className="mt-1 leading-relaxed">
                    12 Studio Street
                    <br />
                    Building 12, Apartment 4
                    <br />
                    Shubra, Cairo
                    <br />
                    Egypt
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-xs text-tertiary/70">Phone number</p>
                  <p className="mt-1">010 0000 0000</p>
                </div>
                <div>
                  <p className="text-xs text-tertiary/70">Delivery method</p>
                  <p className="mt-1">Standard delivery</p>
                  <p>{formatPrice(order.delivery)}</p>
                </div>
                <div>
                  <p className="text-xs text-tertiary/70">Contact email</p>
                  <p className="mt-1 break-all">{order.email}</p>
                </div>
              </div>
            </div>
          </div>
          {/* end-pieces & delivery */}

          {/* summary */}
          <div className="rounded-lg border border-tertiary/20 p-4 sm:p-5 flex flex-col">
            <h2 className="text-lg sm:text-xl font-bold">Order summary</h2>
            <div className="mt-4 flex flex-col gap-3 text-sm pb-4 border-b border-tertiary/20">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatPrice(order.subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span>{formatPrice(order.delivery)}</span>
              </div>
            </div>
            <div className="flex justify-between items-center py-4 border-b border-tertiary/20">
              <span className="text-base sm:text-lg font-bold">Total</span>
              <span className="text-base sm:text-lg font-bold">
                {formatPrice(total)}
              </span>
            </div>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <div className="flex justify-between">
                <span>Payment method</span>
                <span>{order.paymentMethod}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Payment status</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs">
                  <i className="fa-solid fa-check"></i>
                  Verified
                </span>
              </div>
              <div className="flex justify-between">
                <span>Amount paid</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3 rounded-md bg-primary px-4 py-4 text-sm font-semibold">
              <i className="fa-solid fa-circle-check text-xl"></i>
              <span>Payment verified by our team.</span>
            </div>
            <div className="mt-6 pt-5 border-t border-tertiary/20">
              <p className="text-base font-bold">Need a hand?</p>
              <NavLink
                to="/contact"
                className="mt-1 inline-flex items-center gap-2 text-sm text-secondary hover:gap-3 transition-all duration-300 ease-in-out"
              >
                <span className="underline">Contact us</span>
                <i className="fa-solid fa-arrow-right-long"></i>
              </NavLink>
              <p className="mt-1 text-xs text-tertiary/70">
                Include your order number when contacting us.
              </p>
            </div>
          </div>
          {/* end-summary */}
        </div>

        {/* actions */}
        <div className="mt-3 sm:mt-4 grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
          <NavLink
            to="/profile"
            className="lg:col-span-2 flex items-center justify-center gap-2 text-quaternary bg-secondary text-sm xs:text-base px-4 py-3 rounded-md border border-secondary hover:bg-transparent hover:text-tertiary hover:border-tertiary transition-all duration-300 ease-in-out"
          >
            <span className="font-semibold">View my orders</span>
            <i className="fa-solid fa-arrow-right-long"></i>
          </NavLink>
          <NavLink
            to="/products"
            className="flex items-center justify-center text-sm xs:text-base font-semibold px-4 py-3 rounded-md border border-tertiary hover:bg-tertiary hover:text-quaternary transition-all duration-300 ease-in-out"
          >
            Continue shopping
          </NavLink>
        </div>
        {/* end-actions */}
      </div>
    </div>
  );
}

export default Confirm;
