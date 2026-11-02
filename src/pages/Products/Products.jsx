import { useState } from "react";
import { NavLink } from "react-router-dom";
import product from "../../assets/product.png";
import draw from "../../assets/draw.png";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";

const products = [
  { id: 1, image: product, name: "Everyday Hoodie", price: 850, isNew: true },
  { id: 2, image: product, name: "Everyday Hoodie", price: 850, isNew: true },
  { id: 3, image: product, name: "Everyday Hoodie", price: 850, isNew: true },
  { id: 4, image: product, name: "Everyday Hoodie", price: 850 },
  { id: 5, image: product, name: "Everyday Hoodie", price: 850, isNew: true },
  { id: 6, image: product, name: "Everyday Hoodie", price: 850 },
  { id: 7, image: product, name: "Everyday Hoodie", price: 850, isNew: true },
  { id: 8, image: product, name: "Everyday Hoodie", price: 850 },
];

function Products() {
  const [value, setValue] = useState("featured");

  return (
    <>
      <div className="bg-quaternary px-2 xs:px-4 sm:px-10 md:px-16 py-4">
        <div>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-between items-center">
            <div className="self-start">
              <ul className="flex gap-2 items-center">
                <li className="text-slate-500 text-sm md:text-base hover:text-tertiary transition-all duration-300 ease-in-out">
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li className="text-sm md:text-base">/</li>
                <li className="text-sm md:text-base">Shop</li>
              </ul>
            </div>
            <div>
              <div className="origin-bottom -rotate-2">
                <h1 className="text-center text-4xl lg:text-7xl font-bold md:font-extrabold lg:font-black">
                  Find Your Form.
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 300 32"
                  fill="none"
                  aria-hidden="true"
                  className="h-auto w-24 xs:w-44 text-secondary sm:w-60"
                >
                  <g
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  >
                    <path d="M7 26 C52 16 108 9 171 6" />
                    <path d="M136 24 C183 16 239 9 292 8" />
                  </g>
                </svg>
              </div>
              <p className="pt-2 text-sm xs:text-base lg:text-lg text-center font-medium">
                Everyday hoodies. A little more you.
              </p>
            </div>
            <div className="origin-bottom -rotate-6 hidden md:block">
              <h1 className="font-medium text-xl origin-bottom -rotate-6">
                REAL
              </h1>
              <h1 className="font-medium text-xl origin-bottom -rotate-6">
                PEOPLE.
              </h1>
              <h1 className="font-medium text-xl origin-bottom -rotate-6">
                REAL
              </h1>
              <h1 className="font-medium text-xl origin-bottom -rotate-6">
                IDEAS.
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 80 28"
                fill="none"
                aria-hidden="true"
                className="h-auto w-16 text-tertiary"
              >
                <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M5 17 C25 11 49 7 74 5" />
                  <path d="M22 24 C36 19 50 16 63 15" />
                </g>
              </svg>
            </div>
          </div>
          <div>
            <div className="flex flex-col-reverse sm:flex-row gap-2 sm:justify-between items-end sm:items-center mt-4 xs:mt-6 lg:mt-8">
              <p className="text-sm font-medium hidden sm:block">
                <span>{products.length}</span>
                <span> </span>
                <span>{products.length === 1 ? "product" : "products"}</span>
              </p>
              <div className="flex items-center gap-3 text-tertiary">
                <label htmlFor="product-sort" className="shrink-0 text-sm">
                  Sort by
                </label>
                <div className="relative">
                  <select
                    id="product-sort"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    className="
            sm:w-44 cursor-pointer appearance-none
            rounded border border-tertiary/40
            bg-quaternary py-2 pl-3 pr-5 sm:pr-10
            text-sm font-medium
            focus:border-secondary focus:outline-none
            focus:ring-1 focus:ring-secondary
          "
                  >
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to high</option>
                    <option value="price-desc">Price: High to low</option>
                    <option value="newest">Newest</option>
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                    className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2"
                  >
                    <path
                      d="m5 7.5 5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 justify-center items-center mt-4 xs:mt-8 border-b pb-4">
              {products.map((item) => (
                <ProductCard key={item.id} {...item} />
              ))}
            </div>
            <p className="text-lg py-2 text-center">
              {`You've seen all ${products.length} ${products.length === 1 ? "hoodie" : "hoodies"}.`}
            </p>
          </div>
        </div>
        <div className="bg-quaternary py-2 px-2">
          <div
            className="relative isolate"
            style={{
              clipPath: `polygon(
        0% 5%, 4% 2%, 9% 4%, 15% 1%,
        23% 3%, 32% 1%, 41% 3%, 50% 0%,
        60% 3%, 70% 1%, 80% 3%, 90% 1%,
        97% 4%, 100% 2%, 99% 22%, 100% 43%,
        99% 64%, 100% 83%, 98% 97%, 92% 99%,
        83% 97%, 74% 100%, 64% 97%, 54% 99%,
        44% 97%, 34% 100%, 24% 97%, 14% 99%,
        5% 97%, 0% 99%, 1% 78%, 0% 57%,
        1% 35%, 0% 18%
      )`,
            }}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-primary"
            />
            <div
              className="
        flex flex-col items-stretch gap-8
        px-6 py-10 text-tertiary
        sm:px-10 sm:py-12
        lg:flex-row lg:items-center lg:gap-0 lg:px-16
      "
            >
              <div
                className="
          min-w-0 w-full border-b border-tertiary/30 pb-6
          lg:w-1/2 lg:border-b-0 lg:border-r
          lg:pb-0 lg:pr-8
        "
              >
                <div className="mx-auto w-fit origin-bottom -rotate-3">
                  <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl xl:text-6xl">
                    <span className="block">Your idea.</span>
                    <span className="block pl-3 sm:pl-5">
                      deserves a hoodie.
                    </span>
                  </h1>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 300 32"
                    fill="none"
                    aria-hidden="true"
                    className="ml-3 h-auto w-40 text-secondary sm:ml-5 sm:w-60"
                  >
                    <g
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    >
                      <path d="M7 26 C52 16 108 9 171 6" />
                      <path d="M136 24 C183 16 239 9 292 8" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="w-full min-w-0 lg:w-1/2 lg:pl-8 xl:pl-10">
                <div className="flex flex-wrap items-center justify-center xs:justify-between gap-6">
                  <div className="min-w-0">
                    <h3 className="text-lg font-medium xl:text-2xl">
                      Upload your artwork.
                    </h3>
                    <p className="mt-1 text-sm font-medium sm:text-base">
                      We review it before you pay.
                    </p>
                    <NavLink
                      to="/Customize"
                      className="
                mt-4 inline-flex min-h-11 items-center
                justify-center gap-2 rounded-md
                border border-secondary bg-secondary
                px-4 py-2 text-sm text-quaternary
                transition-colors duration-300
                hover:border-tertiary hover:bg-transparent
                hover:text-tertiary
                focus-visible:outline focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-tertiary
                sm:text-base xl:px-6
              "
                    >
                      <span>Customize yours</span>
                      <i
                        className="fa-solid fa-arrow-right-long"
                        aria-hidden="true"
                      />
                    </NavLink>
                  </div>
                  <div className="flex shrink-0 items-start gap-2 hidden xs:block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 28 24"
                      fill="none"
                      aria-hidden="true"
                      className="mt-4 h-auto w-8 shrink-0 sm:w-10"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    >
                      <path d="M13 3 L20 11" />
                      <path d="M4 15 L14 18" />
                    </svg>
                    <img
                      src={draw}
                      alt="Abstract artwork for a custom hoodie"
                      loading="lazy"
                      className="h-28 w-28 object-contain sm:h-32 sm:w-32"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
