import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import frontHoodie from "../../assets/front-hoodie.png";
import backHoodie from "../../assets/back-hoodie.png";
import sleeveHoodie from "../../assets/sleeve-hoodie.png";
import fitHoodie from "../../assets/fit-hoodie.png";
import product from "../../assets/product.png";

const item = {
  collection: "Everyday essentials",
  name: "Everyday Hoodie",
  price: 850,
  description: "An easy oversized fit. A blank canvas for your everyday.",
  sizes: ["S", "M", "L", "XL", "XXL"],
  soldOut: ["XXL"],
};

const gallery = [
  { src: frontHoodie, alt: "Everyday Hoodie, front" },
  { src: backHoodie, alt: "Everyday Hoodie, back" },
  { src: sleeveHoodie, alt: "Everyday Hoodie, sleeve and cuff detail" },
  { src: fitHoodie, alt: "Model wearing the Everyday Hoodie" },
];

const details = [
  {
    id: "fit",
    title: "Details & fit",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Oversized silhouette</li>
        <li>Dropped shoulders</li>
        <li>Front kangaroo pocket</li>
      </ul>
    ),
  },
  {
    id: "care",
    title: "Care guide",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Machine wash cold, inside out</li>
        <li>Do not tumble dry</li>
        <li>Iron on low heat, avoiding any print</li>
      </ul>
    ),
  },
  {
    id: "delivery",
    title: "Delivery & payment",
    content: (
      <p>
        Delivery fees are calculated at checkout. Pay with InstaPay after
        checkout — your order is confirmed once our team verifies the payment.
      </p>
    ),
  },
];

const recommendations = [
  { slug: "studio-hoodie", name: "Studio Hoodie", price: 950 },
  { slug: "after-hours-hoodie", name: "After Hours Hoodie", price: 900 },
  { slug: "canvas-hoodie", name: "Canvas Hoodie", price: 850 },
];

const MAX_QUANTITY = 10;

const formatPrice = (value) => `EGP ${value.toLocaleString("en-US")}`;

const underline = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 260 30"
    fill="none"
    aria-hidden="true"
    className="absolute left-0 -bottom-2 sm:-bottom-3 w-full h-auto text-secondary"
  >
    <path
      d="M5 22 C75 10 164 5 253 6 C187 10 128 16 94 24"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function Productdetails() {
  const [activeImage, setActiveImage] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [openPanel, setOpenPanel] = useState("fit");

  const inStock = !item.soldOut.includes(size);

  useEffect(() => {
    if (!zoomed) return;
    const closeOnEscape = (event) => event.key === "Escape" && setZoomed(false);
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [zoomed]);

  useEffect(() => {
    if (!added) return;
    const timer = setTimeout(() => setAdded(false), 2500);
    return () => clearTimeout(timer);
  }, [added]);

  const choose = (setter) => (value) => {
    setter(value);
    setAdded(false);
  };

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
            to="/products"
            end
            className="hover:text-secondary transition-colors duration-300"
          >
            Shop
          </NavLink>
          <span>/</span>
          <span className="text-tertiary">{item.name}</span>
        </nav>
        {/* end-breadcrumb */}

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.15fr_1fr] gap-6 lg:gap-8">
          {/* gallery */}
          <div>
            <div className="relative overflow-hidden rounded-sm bg-[#e9e1d6]">
              <img
                src={gallery[activeImage].src}
                alt={gallery[activeImage].alt}
                className="block w-full aspect-[9/10] object-cover"
              />
              <button
                type="button"
                onClick={() => setZoomed(true)}
                aria-label="Zoom image"
                className="absolute top-3 right-3 flex items-center justify-center w-9 h-9 rounded-full bg-quaternary/90 shadow-sm hover:text-secondary transition-colors duration-300"
              >
                <i className="fa-solid fa-magnifying-glass-plus"></i>
              </button>
            </div>
            <div className="mt-2 sm:mt-3 grid grid-cols-4 gap-2 sm:gap-3">
              {gallery.map((image, index) => (
                <button
                  key={image.alt}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  aria-label={`Show ${image.alt}`}
                  aria-pressed={index === activeImage}
                  className={`overflow-hidden rounded-sm border-2 transition-colors duration-300 ${
                    index === activeImage
                      ? "border-secondary"
                      : "border-transparent hover:border-tertiary/30"
                  }`}
                >
                  <img
                    src={image.src}
                    alt=""
                    className="block w-full aspect-[4/5] object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          {/* end-gallery */}

          {/* info */}
          <div>
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wide text-secondary">
              {item.collection}
            </p>
            <h1 className="mt-1 text-5xl sm:text-6xl xl:text-7xl leading-[0.95]">
              <span className="block">EVERYDAY</span>
              <span className="relative inline-block">
                HOODIE
                {underline}
              </span>
              .
            </h1>
            <p className="mt-5 text-xl sm:text-2xl font-semibold">
              {formatPrice(item.price)}
            </p>
            <p className="mt-2 text-sm">{item.description}</p>

            {/* size */}
            <div className="mt-5 flex items-center justify-between">
              <p className="text-xs sm:text-sm">Size:</p>
              <NavLink
                to="/size-guide"
                className="text-xs underline hover:text-secondary transition-colors duration-300"
              >
                Size guide
              </NavLink>
            </div>
            <div className="mt-2 grid grid-cols-5 gap-2">
              {item.sizes.map((name) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => choose(setSize)(name)}
                  aria-pressed={name === size}
                  className={`rounded border py-2 text-xs transition-colors duration-300 ${
                    name === size
                      ? "bg-secondary border-secondary text-quaternary"
                      : "border-tertiary/30 hover:border-secondary"
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
            <p className="mt-3 flex items-center gap-2 text-xs text-tertiary/70">
              <span
                className={`w-2 h-2 rounded-full ${inStock ? "bg-green-600" : "bg-red-600"}`}
              ></span>
              {inStock ? "In stock" : "Sold out"} · Size {size}
            </p>

            {/* quantity */}
            <div className="mt-4 flex items-center gap-3">
              <p className="text-xs sm:text-sm">Quantity:</p>
              <div className="flex items-center rounded border border-tertiary/30">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                  className="w-9 h-8 hover:text-secondary disabled:opacity-40 transition-colors duration-300"
                >
                  <i className="fa-solid fa-minus text-xs"></i>
                </button>
                <span className="w-10 text-center text-sm border-x border-tertiary/30 leading-8">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setQuantity((q) => Math.min(MAX_QUANTITY, q + 1))
                  }
                  disabled={quantity >= MAX_QUANTITY}
                  aria-label="Increase quantity"
                  className="w-9 h-8 hover:text-secondary disabled:opacity-40 transition-colors duration-300"
                >
                  <i className="fa-solid fa-plus text-xs"></i>
                </button>
              </div>
            </div>

            {/* actions */}
            <button
              type="button"
              onClick={() => setAdded(true)}
              disabled={!inStock}
              className="mt-4 w-full flex items-center justify-center gap-2 text-quaternary bg-secondary text-sm xs:text-base px-4 py-3 rounded-md border border-secondary hover:bg-transparent hover:text-tertiary hover:border-tertiary transition-all duration-300 ease-in-out disabled:opacity-50 disabled:pointer-events-none"
            >
              {added ? (
                <>
                  <i className="fa-solid fa-check"></i>
                  <span className="font-semibold">Added to cart</span>
                </>
              ) : (
                <>
                  <span className="font-semibold">
                    {inStock ? "Add to cart" : "Sold out"}
                  </span>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </>
              )}
            </button>
            {added && (
              <p className="mt-2 text-center text-xs">
                {quantity} × {item.name} (Size {size}) added.{" "}
                <NavLink
                  to="/cart"
                  className="text-secondary underline hover:no-underline"
                >
                  View cart
                </NavLink>
              </p>
            )}
            <NavLink
              to="/customize"
              className="mt-3 w-full flex items-center justify-center gap-2 text-sm xs:text-base font-semibold px-4 py-3 rounded-md border border-tertiary hover:bg-tertiary hover:text-quaternary transition-all duration-300 ease-in-out"
            >
              <i className="fa-solid fa-pencil text-sm"></i>
              Make it yours — Customize
            </NavLink>
            <p className="mt-2 text-center text-xs text-tertiary/70">
              Custom designs are reviewed before payment.
            </p>

            <p className="mt-4 text-xs sm:text-sm">
              Delivery calculated at checkout.
            </p>
            <div className="mt-3 flex items-start gap-3 rounded-md bg-primary px-4 py-3 text-xs sm:text-sm">
              <i className="fa-regular fa-credit-card text-lg"></i>
              <p>
                Pay with InstaPay after checkout.
                <span className="block">
                  Orders are confirmed after payment review.
                </span>
              </p>
            </div>

            {/* details */}
            <div className="mt-4 border-t border-tertiary/20">
              {details.map((panel) => {
                const open = openPanel === panel.id;
                return (
                  <div key={panel.id} className="border-b border-tertiary/20">
                    <button
                      type="button"
                      onClick={() => setOpenPanel(open ? null : panel.id)}
                      aria-expanded={open}
                      aria-controls={`panel-${panel.id}`}
                      className="w-full flex items-center justify-between py-3 text-sm font-semibold hover:text-secondary transition-colors duration-300"
                    >
                      {panel.title}
                      <i
                        className={`fa-solid fa-chevron-down text-xs transition-transform duration-300 ${
                          open ? "rotate-180" : ""
                        }`}
                      ></i>
                    </button>
                    {open && (
                      <div
                        id={`panel-${panel.id}`}
                        className="pb-3 text-xs sm:text-sm"
                      >
                        {panel.content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          {/* end-info */}
        </div>

        {/* recommendations */}
        <section className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-tertiary/20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <h2 className="font-['Caveat_Brush'] text-4xl xs:text-5xl lg:text-6xl leading-tight text-tertiary">
              FIND{" "}
              <span className="relative inline-block">
                YOUR NEXT
                {underline}
              </span>{" "}
              FAVOURITE.
            </h2>
            <NavLink
              to="/products"
              end
              className="self-end sm:self-auto inline-flex items-center gap-2 text-sm text-secondary underline hover:gap-3 transition-all duration-300 ease-in-out"
            >
              Shop all
              <i className="fa-solid fa-arrow-right-long"></i>
            </NavLink>
          </div>
          <ul className="mt-5 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {recommendations.map((card) => (
              <li key={card.slug}>
                <NavLink
                  to="/productdetails"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="group block"
                >
                  <div className="overflow-hidden rounded-sm bg-[#e9e1d6]">
                    <img
                      src={product}
                      alt={card.name}
                      className="block w-full aspect-[6/5] object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="mt-2 text-sm sm:text-base font-semibold group-hover:text-secondary transition-colors duration-300">
                    {card.name}
                  </p>
                  <p className="text-sm">{formatPrice(card.price)}</p>
                </NavLink>
              </li>
            ))}
          </ul>
        </section>
        {/* end-recommendations */}
      </div>

      {zoomed && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={gallery[activeImage].alt}
          onClick={() => setZoomed(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-tertiary/80 p-4"
        >
          <img
            src={gallery[activeImage].src}
            alt={gallery[activeImage].alt}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[90vh] max-w-full rounded-sm object-contain"
          />
          <button
            type="button"
            onClick={() => setZoomed(false)}
            aria-label="Close"
            className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-quaternary hover:text-secondary transition-colors duration-300"
          >
            <i className="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>
      )}
    </div>
  );
}

export default Productdetails;
