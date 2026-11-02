import { NavLink } from "react-router-dom";
import hero from "../../assets/hero.png";
import customize from "../../assets/customize.png";
import grid1 from "../../assets/grid-1.png";
import grid2 from "../../assets/grid-2.png";
import grid3 from "../../assets/grid-3.png";
import grid4 from "../../assets/grid-4.png";
import product from "../../assets/product.png";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";

const featuredProducts = [
  { id: 1, image: product, name: "Everyday Hoodie", price: 850, isNew: true },
  { id: 2, image: product, name: "Everyday Hoodie", price: 850, isNew: true },
  { id: 3, image: product, name: "Everyday Hoodie", price: 850, isNew: true },
  { id: 4, image: product, name: "Everyday Hoodie", price: 850, isNew: true },
];

function Home() {
  return (
    <>
      {/* hero */}
      <div className="bg-quaternary px-2 xs:px-4 sm:px-10 md:px-16 py-4 flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/3 mt-0 xs:mt-16 md:mt-0 xl:mt-8 flex md:flex-none flex-col items-center md:items-start">
          <div className="flex flex-col xs:flex-row md:flex-col items-center gap-0 xs:gap-4 sm:gap-16 md:gap-0 md:items-start md:justify-start">
            <div className="origin-bottom -rotate-6">
              <svg
                className="h-10 xs:h-12 w-auto origin-bottom -rotate-12"
                viewBox="0 -9 154 154"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform="rotate(0)"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>

                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g clipPath="url(#clip0)">
                    <path
                      d="M127.902 44.3342C125.623 44.3703 124.281 43.7653 123.466 42.1855C122.69 40.6838 123.198 39.3362 124.022 38.0938C124.455 37.4383 125.018 36.8796 125.678 36.4529C129.18 34.2536 132.67 32.0219 136.285 30.0208C137.482 29.4368 138.822 29.2089 140.145 29.3644C140.758 29.4343 141.346 29.6482 141.86 29.9886C142.375 30.329 142.801 30.7863 143.106 31.3231C143.41 31.8598 143.582 32.4609 143.61 33.0772C143.637 33.6935 143.519 34.3075 143.263 34.8691C142.619 36.2881 141.598 37.503 140.31 38.3813C137.073 40.345 133.647 42.0049 130.25 43.6937C129.497 44.0034 128.708 44.2187 127.902 44.3342Z"
                      fill="#43302e"
                    />

                    <path
                      d="M21.6685 49.0745C20.9465 48.6676 19.311 48.0954 18.1598 47.0071C16.3063 45.218 14.6241 43.2597 13.1348 41.1578C12.3408 40.0882 11.8856 38.8053 11.828 37.4746C11.8549 35.0461 14.4127 33.2943 17.0006 34.16C19.1481 34.8232 21.1433 35.9043 22.8714 37.3414C24.5996 38.7784 26.0265 40.5431 27.0702 42.5336C28.8154 45.9413 26.4105 49.1848 21.6685 49.0745Z"
                      fill="#43302e"
                    />

                    <path
                      d="M114.501 0.366583C117.943 0.34558 120.014 2.92035 119.334 5.62578C119.145 6.50263 118.742 7.31858 118.158 7.99973C115.827 10.4072 113.475 12.8134 110.939 14.997C109.707 16.0563 108.152 16.8478 106.282 16.2177C104.105 15.484 103.055 13.6935 103.761 11.5256C103.943 10.8763 104.25 10.2683 104.663 9.73509C106.852 7.19703 109.013 4.62155 111.374 2.24955C112.345 1.27423 113.795 0.776793 114.501 0.366583Z"
                      fill="#43302e"
                    />

                    <path
                      d="M53.3557 13.062C53.1588 15.0507 52.3273 16.5229 50.5335 17.3886C48.8559 18.1972 47.404 17.6419 46.2384 16.488C43.7066 14.0883 41.8036 11.1029 40.697 7.79478C39.9586 5.45625 40.653 3.50178 42.347 2.45098C44.1486 1.33521 46.1072 1.49196 47.8182 3.3238C50.4285 6.12242 52.618 9.22763 53.3557 13.062Z"
                      fill="#43302e"
                    />

                    <path
                      d="M152.875 64.8372C152.824 63.1477 152.525 61.4751 151.985 59.8733C151.203 57.7487 149.793 56.3054 148.026 55.8204C146.239 55.3275 144.269 55.8604 142.482 57.3103C141.133 58.4031 139.812 59.597 138.537 60.7501C138.012 61.222 137.487 61.7011 136.962 62.1664L129.961 68.391C124.248 73.4697 118.532 78.5484 112.81 83.6265C112.4 83.9698 111.968 84.2855 111.516 84.5703C111.333 84.6918 111.145 84.8132 110.956 84.9484C110.828 85.0357 110.682 85.0928 110.529 85.1151C110.376 85.1381 110.22 85.1263 110.072 85.0797C109.923 85.0337 109.788 84.9536 109.675 84.846C109.563 84.7384 109.477 84.6058 109.424 84.4594C108.15 80.9723 106.909 77.5022 105.668 74.046C102.912 66.3668 100.057 58.4201 97.0702 50.7318C92.9081 40.0335 88.4439 29.6554 84.2493 20.0315C83.1545 17.7057 81.6672 15.5862 79.8518 13.7662C78.2195 12.0597 76.4323 11.9317 74.0649 13.3684C72.1365 14.5282 71.3135 16.5379 70.4432 18.6625L70.3625 18.8594C69.4928 20.9636 68.6324 23.0723 67.7798 25.1857C65.1695 31.5929 62.4719 38.2291 59.6057 44.6632C55.2738 54.3947 50.5883 64.1676 46.1573 73.345C44.6536 76.4606 43.0148 79.4548 41.2814 82.625C40.4938 84.0689 39.6898 85.5384 38.8871 87.0493C38.8227 87.1727 38.7329 87.281 38.6244 87.3677C38.5158 87.4543 38.3905 87.518 38.2563 87.5541C38.1221 87.5902 37.9818 87.598 37.8444 87.5777C37.707 87.5567 37.5752 87.5081 37.4576 87.4339L34.611 85.6461C32.8035 84.5198 31.158 83.4953 29.5192 82.4563C27.2128 80.9999 24.9062 79.5408 22.5994 78.0792C18.0812 75.2129 13.5581 72.3579 9.03026 69.514C8.01503 68.771 6.81172 68.3266 5.55691 68.2328C4.63274 68.2623 3.75076 68.6266 3.0753 69.258C1.08528 70.8896 0.525441 72.9066 1.36883 75.4276C1.90834 77.0526 2.63688 78.6718 3.33785 80.2431L3.37198 80.3087C3.9384 81.584 4.55862 82.8717 5.15195 84.1194C6.27166 86.4731 7.43864 88.9107 8.37589 91.4048C8.97618 92.9826 9.57876 94.5631 10.1834 96.1462C14.048 106.269 18.0405 116.736 20.6507 127.513C21.5342 131.169 23.6449 133.145 27.1045 133.556C28.0555 133.671 29.0079 133.792 29.951 133.914C33.8317 134.498 37.7484 134.812 41.6726 134.851C50.5883 134.737 59.6523 134.406 68.4204 134.089C72.2777 133.947 76.133 133.813 79.9864 133.685C86.3128 133.482 92.6392 133.288 98.965 133.105L106.229 132.882C106.815 132.868 107.402 132.848 107.996 132.835C108.636 132.821 109.284 132.801 109.931 132.781C112.177 132.715 114.423 132.625 116.668 132.545C122.182 132.343 127.871 132.133 133.482 132.1C136.072 132.086 137.9 131.181 139.242 129.26C140.167 127.85 140.87 126.306 141.326 124.681L142.054 122.293C145.028 112.555 148.097 102.479 149.904 92.2817C150.08 91.2899 150.262 90.3054 150.437 89.3137C151.877 81.3471 153.374 73.0916 152.875 64.8372ZM130.396 120.403C130.332 120.581 130.219 120.737 130.07 120.853C129.921 120.969 129.741 121.04 129.554 121.059C128.744 121.147 127.908 121.248 127.065 121.35C125.136 121.586 123.133 121.829 121.11 121.916C117.791 122.058 114.42 122.159 111.162 122.244C106.819 122.375 102.327 122.5 97.9228 122.743C92.7908 123.033 87.5703 123.458 82.5257 123.869C79.626 124.106 76.7257 124.342 73.826 124.55C69.5906 124.861 66.0562 125.11 62.3741 125.225C53.3029 125.515 44.0833 125.75 35.1676 125.981L30.7504 126.095H30.6487C30.2384 126.086 29.8299 126.038 29.4286 125.953C29.2934 125.926 29.1588 125.899 29.0302 125.887C28.8387 125.861 28.6589 125.78 28.5119 125.655C28.3649 125.529 28.2569 125.364 28.2006 125.179L16.4863 87.0743C16.424 86.878 16.4238 86.6667 16.4855 86.4698C16.5472 86.2729 16.668 86.1003 16.8314 85.9743C16.9947 85.8482 17.1929 85.7754 17.399 85.7662C17.605 85.7563 17.809 85.8102 17.9834 85.9204L19.5008 86.8583C20.5056 87.4786 21.4298 88.045 22.3401 88.6252C23.6348 89.4482 24.9298 90.2667 26.225 91.0799C29.4351 93.1099 32.7602 95.201 35.9637 97.3722C38.0135 98.7617 39.8079 99.2946 41.2847 98.9573C42.7286 98.6291 44.0026 97.4871 45.1695 95.4708L46.2197 93.6698C48.2025 90.2706 50.2529 86.75 51.9587 83.1684C57.6032 71.2716 63.2621 59.1323 68.7321 47.3904C70.8902 42.757 73.0528 38.1237 75.22 33.4905C75.4018 33.0966 75.5909 32.7145 75.8606 32.1822L76.3798 31.1367C76.4631 30.9612 76.597 30.8144 76.7637 30.7148C76.9311 30.6152 77.1234 30.5673 77.3177 30.577C77.5113 30.5817 77.6997 30.642 77.8598 30.7508C78.02 30.8597 78.145 31.0123 78.2208 31.1905C79.0169 33.0657 79.8196 34.8798 80.6086 36.6604C82.3216 40.5328 83.9401 44.1868 85.323 47.9837C88.4859 56.6907 91.5812 65.5735 94.5826 74.1713C96.3022 79.0952 98.0291 84.021 99.7625 88.9481C100.619 91.4606 101.619 93.9218 102.757 96.3194C103.131 97.1943 103.705 97.9688 104.434 98.5805C105.163 99.1922 106.025 99.6234 106.952 99.84C108.766 100.198 110.681 99.5703 112.354 98.0797C114.896 95.8141 117.426 93.5274 119.955 91.2479C122.174 89.2448 124.392 87.2462 126.611 85.2523C129.437 82.7306 132.272 80.2142 135.115 77.7044L138.922 74.3387C139.063 74.2146 139.234 74.1313 139.418 74.0985C139.603 74.065 139.793 74.0834 139.968 74.1503L140.669 74.4266C140.883 74.5106 141.064 74.6649 141.179 74.8651C141.294 75.0653 141.338 75.2983 141.303 75.526C139.231 88.7453 136.318 104.419 130.396 120.403Z"
                      fill="#43302e"
                    />
                  </g>

                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="152.927"
                        height="135.206"
                        fill="white"
                        transform="translate(0.682373 0.0187988)"
                      />
                    </clipPath>
                  </defs>
                </g>
              </svg>
              <h1 className="text-3xl xs:text-6xl md:text-4xl lg:text-6xl xl:text-7xl leading-tight pl-1 sm:pl-2 md:pl-3">
                <span className="sm:block">MAKE YOUR </span>
                <span className="sm:block">OWN FORM.</span>
              </h1>
            </div>
            <div className="w-full sm:w-auto md:w-full flex gap-4 xs:gap-12 justify-between mt-4 sm:mt-8 pl-1 sm:pl-2 md:pl-3">
              <ul>
                <li className="text-lg xs:text-xl xl:text-4xl font-semibold">
                  Your ideas.
                </li>
                <li className="text-lg xs:text-xl xl:text-4xl font-semibold">
                  Your art.
                </li>
                <li className="text-lg xs:text-xl xl:text-4xl font-semibold">
                  Your hoodie.
                </li>
              </ul>
              <div className="origin-bottom -rotate-12">
                <h1 className="text-base xl:text-2xl">
                  <span className="block text-center">Different</span>
                  <span className="block text-center">is</span>
                  <span className="block text-center">better.</span>
                </h1>
                <svg
                  viewBox="0 0 303 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 xl:w-24 h-auto"
                >
                  <path
                    d="M25 55 C90 42 145 45 215 55"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M215 55 L198 45"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M215 55 L202 68"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:gap-3 mt-4 xs:mt-8 pl-1 sm:pl-2 md:pl-3 w-full md:w-auto items-center md:items-start">
            <NavLink
              to="/Customize"
              className="flex items-center justify-center md:staify-start gap-2 w-full md:w-fit text-quaternary bg-secondary text-sm xs:text-base xl:text-lg px-1 xs:px-3 md:px-4 xl:px-6 py-2 rounded-md border border-secondary hover:bg-transparent hover:text-tertiary hover:border-tertiary transition-all duration-300 ease-in-out"
            >
              <span>Start creating</span>
              <i className="fa-solid fa-arrow-right-long"></i>
            </NavLink>
            <NavLink
              to="/Products"
              className="flex items-center gap-2 text-sm xs:text-base text-tertiary"
            >
              <span className="px-0 md:px-1 underline hover:no-underline transition-all duration-300 ease-in-out">
                Shop the drop
              </span>
              <i className="fa-solid fa-arrow-right-long"></i>
            </NavLink>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <div className="xs:h-96 md:h-fit w-full">
            <img src={hero} alt="Hero" className="block w-full h-auto" />
          </div>
        </div>
      </div>
      {/* end-hero */}
      <div className="bg-secondary px-2 sm:px-3 md:px-6 py-1 xs:py-2">
        <div className="flex items-center gap-3 sm:gap-6 md:gap-10 flex-nowrap overflow-hidden">
          <h1 className="text-quaternary text-xs xs:text-sm sm:text-base md:text-lg text-nowrap">
            WEAR YOUR IDEAS
          </h1>
          <i className="fa-solid fa-burst text-quaternary text-xs xs:text-sm"></i>
          <h1 className="text-quaternary text-xs xs:text-sm sm:text-base md:text-lg text-nowrap">
            NO FIXED FORM
          </h1>
          <i className="fa-solid fa-burst text-quaternary text-xs xs:text-sm"></i>
          <h1 className="text-quaternary text-xs xs:text-sm sm:text-base md:text-lg text-nowrap">
            MADE FOR YOU
          </h1>
          <i className="fa-solid fa-burst text-quaternary text-xs xs:text-sm"></i>
          <h1 className="text-quaternary text-xs xs:text-sm sm:text-base md:text-lg text-nowrap">
            WEAR YOUR IDEAS
          </h1>
          <i className="fa-solid fa-burst text-quaternary text-xs xs:text-sm"></i>
          <h1 className="text-quaternary text-xs xs:text-sm sm:text-base md:text-lg text-nowrap">
            NO FIXED FORM
          </h1>
          <i className="fa-solid fa-burst text-quaternary text-xs xs:text-sm"></i>
          <h1 className="text-quaternary text-xs xs:text-sm sm:text-base md:text-lg text-nowrap">
            MADE FOR YOU
          </h1>
          <h1 className="text-quaternary text-xs xs:text-sm sm:text-base md:text-lg text-nowrap">
            WEAR YOUR IDEAS
          </h1>
          <i className="fa-solid fa-burst text-quaternary text-xs xs:text-sm"></i>
          <h1 className="text-quaternary text-xs xs:text-sm sm:text-base md:text-lg text-nowrap">
            NO FIXED FORM
          </h1>
        </div>
      </div>
      {/* products */}
      <div className="bg-quaternary">
        <div className="px-2 xs:px-4 sm:px-10 md:px-16 py-4 xs:py-8 sm:py-12">
          <div>
            <div className="flex flex-col md:flex-row justify-between items-center mt-1 xs:mt-2">
              <div className="w-fit mx-auto md:mx-0 mt-4 md:mt-0 lg:mt-8">
                <h2 className="text-xl xs:text-3xl sm:text-5xl font-bold sm:font-black">
                  Find your everyday form.
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 260 30"
                  fill="none"
                  aria-hidden="true"
                  className="h-auto w-40 text-secondary sm:w-52"
                >
                  <path
                    d="M5 22 C75 10 164 5 253 6
       C187 10 128 16 94 24"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="self-end md:self-auto">
                <NavLink
                  to="/products"
                  className="relative inline-flex items-center gap-2 pb-1 text-sm md:text-base after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-secondary after:content-[''] hover:gap-3 hover:after:h-0 transition-all duration-300 ease-in-out"
                >
                  <span className="font-medium">Shop all</span>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 xs:mt-6">
            {featuredProducts.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
      {/* end-products */}
      {/* customize */}
      <div className="bg-quaternary py-2 xs:py-4 sm:py-8">
        <div className="px-2 xs:px-4 sm:px-10 md:px-16 flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2">
            <div className="w-fit mx-auto md:mx-0 mt-4 md:mt-0 lg:mt-8">
              <h1 className="text-center md:text-left text-3xl xs:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-bold origin-bottom -rotate-2">
                <span className="block">From a sketch.</span>
                <span className="block">To your next favourite.</span>
              </h1>
              <svg
                viewBox="0 0 420 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                aria-hidden="true"
                className="h-auto w-4/6 mx-auto text-secondary"
              >
                <path
                  d="M5 19 C95 12 205 4 307 7 C353 8 389 9 414 12"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p className="text-center md:text-left text-sm xs:text-base sm:text-lg md:text-xl mt-2 font-semibold">
              <span className="block">Upload your art work. We review it.</span>
              <span className="block">You make it yours.</span>
            </p>
            <div className="mt-8 md:mt-3 lg:mt-8 flex flex-col md:flex-row items-center md:items-start xs:flex-nowrap gap-8 md:gap-6">
              <div className="px-4 md:px-0 flex flex-col items-center md:items-start w-full md:w-1/3">
                <p className="text-secondary text-3xl md:text-2xl lg:text-3xl font-bold">
                  01
                </p>
                <div className="flex justify-between mt-4 md:mt-0">
                  <svg
                    className="w-16 h-auto"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.625 15C5.625 14.5858 5.28921 14.25 4.875 14.25C4.46079 14.25 4.125 14.5858 4.125 15H5.625ZM4.875 16H4.125H4.875ZM19.275 15C19.275 14.5858 18.9392 14.25 18.525 14.25C18.1108 14.25 17.775 14.5858 17.775 15H19.275ZM12.2914 5.46127C12.5461 5.13467 12.4879 4.66338 12.1613 4.40862C11.8347 4.15387 11.3634 4.21212 11.1086 4.53873L12.2914 5.46127ZM7.20862 9.53873C6.95387 9.86533 7.01212 10.3366 7.33873 10.5914C7.66533 10.8461 8.13662 10.7879 8.39138 10.4613L7.20862 9.53873ZM12.2914 4.53873C12.0366 4.21212 11.5653 4.15387 11.2387 4.40862C10.9121 4.66338 10.8539 5.13467 11.1086 5.46127L12.2914 4.53873ZM15.0086 10.4613C15.2634 10.7879 15.7347 10.8461 16.0613 10.5914C16.3879 10.3366 16.4461 9.86533 16.1914 9.53873L15.0086 10.4613ZM12.45 5C12.45 4.58579 12.1142 4.25 11.7 4.25C11.2858 4.25 10.95 4.58579 10.95 5H12.45ZM10.95 16C10.95 16.4142 11.2858 16.75 11.7 16.75C12.1142 16.75 12.45 16.4142 12.45 16H10.95ZM4.125 15V16H5.625V15H4.125ZM4.125 16C4.125 18.0531 5.75257 19.75 7.8 19.75V18.25C6.61657 18.25 5.625 17.2607 5.625 16H4.125ZM7.8 19.75H15.6V18.25H7.8V19.75ZM15.6 19.75C17.6474 19.75 19.275 18.0531 19.275 16H17.775C17.775 17.2607 16.7834 18.25 15.6 18.25V19.75ZM19.275 16V15H17.775V16H19.275ZM11.1086 4.53873L7.20862 9.53873L8.39138 10.4613L12.2914 5.46127L11.1086 4.53873ZM11.1086 5.46127L15.0086 10.4613L16.1914 9.53873L12.2914 4.53873L11.1086 5.46127ZM10.95 5V16H12.45V5H10.95Z"
                      fill="#43302e"
                    />
                  </svg>
                  <svg
                    className="w-12 xs:w-14 h-auto hidden md:block"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.2328 16.4569C12.9328 16.7426 12.9212 17.2173 13.2069 17.5172C13.4926 17.8172 13.9673 17.8288 14.2672 17.5431L19.5172 12.5431C19.8172 12.2574 19.8288 11.7827 19.5431 11.4828C19.2574 11.1828 18.7827 11.1712 18.4828 11.4569L13.2328 16.4569ZM18.4828 12.5431C18.7827 12.8288 19.2574 12.8172 19.5431 12.5172C19.8288 12.2173 19.8172 11.7426 19.5172 11.4569L14.2672 6.4569C13.9673 6.17123 13.4926 6.18281 13.2069 6.48276C12.9212 6.78271 12.9328 7.25744 13.2328 7.5431L18.4828 12.5431ZM19 12.75C19.4142 12.75 19.75 12.4142 19.75 12C19.75 11.5858 19.4142 11.25 19 11.25V12.75ZM5 11.25C4.58579 11.25 4.25 11.5858 4.25 12C4.25 12.4142 4.58579 12.75 5 12.75V11.25ZM19 11.25H5V12.75H19V11.25Z"
                      fill="#43302e"
                    />
                  </svg>
                </div>
                <p className="mt-4 md:mt-0 text-2xl md:text-xl lg:text-2xl font-semibold md:font-bold text-center md:text-left">
                  <span className="md:block">Upload</span>{" "}
                  <span className="md:block">your design.</span>
                </p>
                <p className="text-base md:text-xs lg:text-base text-slate-500 pt-1">
                  Share your art work, sketch or idea.
                </p>
              </div>
              <div className="px-4 md:px-0 flex flex-col items-center md:items-start w-full md:w-1/3">
                <p className="text-secondary text-3xl md:text-2xl lg:text-3xl font-bold">
                  02
                </p>
                <div className="flex justify-between mt-4 md:mt-0">
                  <svg
                    viewBox="0 0 128 128"
                    fill="#43302e"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 h-auto"
                  >
                    <g transform="translate(8 8) scale(0.88)">
                      <path d="M109,55c0-29.8-24.2-54-54-54C25.2,1,1,25.2,1,55s24.2,54,54,54c13.5,0,25.8-5,35.2-13.1l25.4,25.4l5.7-5.7L95.9,90.2 C104,80.8,109,68.5,109,55z M55,101C29.6,101,9,80.4,9,55S29.6,9,55,9s46,20.6,46,46S80.4,101,55,101z" />
                      <path d="M25.6,30.9l6.2,5.1C37.5,29,46,25,55,25v-8C43.6,17,32.9,22.1,25.6,30.9z" />
                      <path d="M17,55h8c0-2.1,0.2-4.1,0.6-6.1l-7.8-1.6C17.3,49.8,17,52.4,17,55z" />
                    </g>
                  </svg>
                  <svg
                    className="w-12 xs:w-14 h-auto hidden md:block"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.2328 16.4569C12.9328 16.7426 12.9212 17.2173 13.2069 17.5172C13.4926 17.8172 13.9673 17.8288 14.2672 17.5431L19.5172 12.5431C19.8172 12.2574 19.8288 11.7827 19.5431 11.4828C19.2574 11.1828 18.7827 11.1712 18.4828 11.4569L13.2328 16.4569ZM18.4828 12.5431C18.7827 12.8288 19.2574 12.8172 19.5431 12.5172C19.8288 12.2173 19.8172 11.7426 19.5172 11.4569L14.2672 6.4569C13.9673 6.17123 13.4926 6.18281 13.2069 6.48276C12.9212 6.78271 12.9328 7.25744 13.2328 7.5431L18.4828 12.5431ZM19 12.75C19.4142 12.75 19.75 12.4142 19.75 12C19.75 11.5858 19.4142 11.25 19 11.25V12.75ZM5 11.25C4.58579 11.25 4.25 11.5858 4.25 12C4.25 12.4142 4.58579 12.75 5 12.75V11.25ZM19 11.25H5V12.75H19V11.25Z"
                      fill="#43302e"
                    />
                  </svg>
                </div>
                <p className="mt-4 md:mt-0 text-2xl md:text-xl lg:text-2xl font-semibold md:font-bold">
                  <span className="md:block">Get our</span>{" "}
                  <span className="md:block">approval.</span>
                </p>
                <p className="text-base md:text-xs lg:text-base text-slate-500 pt-1 text-center md:text-left">
                  We review it to make sure it looks great on a hoodie.
                </p>
              </div>
              <div className="px-4 md:px-0 flex flex-col items-center md:items-start w-full md:w-1/3">
                <p className="text-secondary text-3xl md:text-2xl lg:text-3xl font-bold">
                  03
                </p>
                <div className="flex justify-between mt-4 md:mt-0">
                  <svg
                    className="w-16 h-auto"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.73 16.52C20.73 16.52 20.73 16.45 20.73 16.41V7.58999C20.7297 7.47524 20.7022 7.36218 20.65 7.25999C20.5764 7.10119 20.4488 6.97364 20.29 6.89999L12.29 3.31999C12.1926 3.2758 12.0869 3.25293 11.98 3.25293C11.8731 3.25293 11.7674 3.2758 11.67 3.31999L3.67001 6.89999C3.54135 6.96474 3.43255 7.06303 3.35511 7.18448C3.27766 7.30592 3.23444 7.44603 3.23001 7.58999V16.41C3.23749 16.5532 3.28195 16.6921 3.35906 16.813C3.43617 16.9339 3.54331 17.0328 3.67001 17.1L11.67 20.68C11.7668 20.7262 11.8727 20.7501 11.98 20.7501C12.0873 20.7501 12.1932 20.7262 12.29 20.68L20.29 17.1C20.4055 17.0471 20.5061 16.9665 20.5829 16.8653C20.6597 16.7641 20.7102 16.6455 20.73 16.52ZM4.73001 8.73999L11.23 11.66V18.84L4.73001 15.93V8.73999ZM12.73 11.66L19.23 8.73999V15.93L12.73 18.84V11.66ZM12 4.81999L18.17 7.58999L12 10.35L5.83001 7.58999L12 4.81999Z"
                      fill="#43302e"
                    />
                  </svg>
                </div>
                <p className="mt-4 md:mt-0 text-2xl md:text-xl lg:text-2xl font-semibold md:font-bold">
                  <span className="md:block">pay &</span>{" "}
                  <span className="md:block text-nowrap">we create.</span>
                </p>
                <p className="text-base md:text-xs lg:text-base text-slate-500 pt-1 text-center md:text-left">
                  Once approved, you complete your order and we bring it to
                  life.
                </p>
              </div>
            </div>
            <NavLink
              to="/Customize"
              className="mt-4 md:mt-2 lg:mt-4 flex items-center justify-center md:justify-start gap-2 w-full md:w-fit text-quaternary bg-secondary text-sm xs:text-base xl:text-lg px-1 xs:px-3 md:px-6 xl:px-8 py-2 rounded-md border border-secondary hover:bg-transparent hover:text-tertiary hover:border-tertiary transition-all duration-300 ease-in-out"
            >
              <span>Create your hoodie</span>
              <i className="fa-solid fa-arrow-right-long"></i>
            </NavLink>
          </div>
          <div className="w-full md:w-1/2">
            <div className="md:h-fit w-full">
              <img
                src={customize}
                alt="Hero"
                className="md:block w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      {/* end-customize */}
      {/* story */}
      <div className="bg-quaternary py-2 xs:py-4 sm:py-8">
        <div className="px-2 xs:px-4 sm:px-10 md:px-16 flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-2/3">
            <div className="grid-container">
              <div className="col-1 hidden sm:block">
                <img
                  src={grid1}
                  alt="Grid1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-2">
                <img
                  src={grid2}
                  alt="Grid2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-3">
                <img
                  src={grid3}
                  alt="Grid3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-4">
                <img
                  src={grid4}
                  alt="Grid4"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-5">
                <div className="flex justify-between items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 80 80"
                    fill="none"
                    aria-hidden="true"
                    className="h-10 w-10 self-start"
                  >
                    <g
                      stroke="#FE682B"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M43 8 C41 27 37 49 34 71" />
                      <path d="M17 18 C31 29 47 43 64 58" />
                      <path d="M10 43 C29 39 50 34 71 29" />
                      <path d="M24 60 C35 44 47 28 57 15" />
                    </g>
                  </svg>
                  <div className="flex flex-col items-center justify-center">
                    <h1 className="origin-bottom -rotate-6 text-lg font-medium pl-8">
                      Diffrent is better.
                    </h1>
                    <svg
                      viewBox="0 0 303 120"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-24 h-auto origin-bottom -rotate-6 hidden sm:block"
                    >
                      <path
                        d="M25 55 C90 42 145 45 215 55"
                        stroke="currentColor"
                        strokeWidth="6"
                        strokeLinecap="round"
                        fill="none"
                      />
                      <path
                        d="M215 55 L198 45"
                        stroke="currentColor"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M215 55 L202 68"
                        stroke="currentColor"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 80 80"
                    fill="none"
                    aria-hidden="true"
                    className="h-12 w-12 self-end"
                  >
                    <g
                      stroke="#789CE3"
                      strokeWidth="9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M49 8 C45 26 35 49 27 70" />
                      <path d="M14 20 C29 32 48 48 64 63" />
                      <path d="M8 49 C27 44 49 38 72 33" />
                    </g>

                    <path
                      d="M50 9 L29 69 M15 21 L63 62 M9 50 L71 34"
                      stroke="#A6BDF0"
                      strokeWidth="2"
                      strokeLinecap="round"
                      opacity="0.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <div className="p-4">
              <div>
                <svg
                  className="h-10 lg:h-12 w-auto origin-bottom -rotate-6 hidden md:block"
                  viewBox="0 -9 154 154"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(0)"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>

                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g clipPath="url(#clip0)">
                      <path
                        d="M127.902 44.3342C125.623 44.3703 124.281 43.7653 123.466 42.1855C122.69 40.6838 123.198 39.3362 124.022 38.0938C124.455 37.4383 125.018 36.8796 125.678 36.4529C129.18 34.2536 132.67 32.0219 136.285 30.0208C137.482 29.4368 138.822 29.2089 140.145 29.3644C140.758 29.4343 141.346 29.6482 141.86 29.9886C142.375 30.329 142.801 30.7863 143.106 31.3231C143.41 31.8598 143.582 32.4609 143.61 33.0772C143.637 33.6935 143.519 34.3075 143.263 34.8691C142.619 36.2881 141.598 37.503 140.31 38.3813C137.073 40.345 133.647 42.0049 130.25 43.6937C129.497 44.0034 128.708 44.2187 127.902 44.3342Z"
                        fill="#43302e"
                      />

                      <path
                        d="M21.6685 49.0745C20.9465 48.6676 19.311 48.0954 18.1598 47.0071C16.3063 45.218 14.6241 43.2597 13.1348 41.1578C12.3408 40.0882 11.8856 38.8053 11.828 37.4746C11.8549 35.0461 14.4127 33.2943 17.0006 34.16C19.1481 34.8232 21.1433 35.9043 22.8714 37.3414C24.5996 38.7784 26.0265 40.5431 27.0702 42.5336C28.8154 45.9413 26.4105 49.1848 21.6685 49.0745Z"
                        fill="#43302e"
                      />

                      <path
                        d="M114.501 0.366583C117.943 0.34558 120.014 2.92035 119.334 5.62578C119.145 6.50263 118.742 7.31858 118.158 7.99973C115.827 10.4072 113.475 12.8134 110.939 14.997C109.707 16.0563 108.152 16.8478 106.282 16.2177C104.105 15.484 103.055 13.6935 103.761 11.5256C103.943 10.8763 104.25 10.2683 104.663 9.73509C106.852 7.19703 109.013 4.62155 111.374 2.24955C112.345 1.27423 113.795 0.776793 114.501 0.366583Z"
                        fill="#43302e"
                      />

                      <path
                        d="M53.3557 13.062C53.1588 15.0507 52.3273 16.5229 50.5335 17.3886C48.8559 18.1972 47.404 17.6419 46.2384 16.488C43.7066 14.0883 41.8036 11.1029 40.697 7.79478C39.9586 5.45625 40.653 3.50178 42.347 2.45098C44.1486 1.33521 46.1072 1.49196 47.8182 3.3238C50.4285 6.12242 52.618 9.22763 53.3557 13.062Z"
                        fill="#43302e"
                      />

                      <path
                        d="M152.875 64.8372C152.824 63.1477 152.525 61.4751 151.985 59.8733C151.203 57.7487 149.793 56.3054 148.026 55.8204C146.239 55.3275 144.269 55.8604 142.482 57.3103C141.133 58.4031 139.812 59.597 138.537 60.7501C138.012 61.222 137.487 61.7011 136.962 62.1664L129.961 68.391C124.248 73.4697 118.532 78.5484 112.81 83.6265C112.4 83.9698 111.968 84.2855 111.516 84.5703C111.333 84.6918 111.145 84.8132 110.956 84.9484C110.828 85.0357 110.682 85.0928 110.529 85.1151C110.376 85.1381 110.22 85.1263 110.072 85.0797C109.923 85.0337 109.788 84.9536 109.675 84.846C109.563 84.7384 109.477 84.6058 109.424 84.4594C108.15 80.9723 106.909 77.5022 105.668 74.046C102.912 66.3668 100.057 58.4201 97.0702 50.7318C92.9081 40.0335 88.4439 29.6554 84.2493 20.0315C83.1545 17.7057 81.6672 15.5862 79.8518 13.7662C78.2195 12.0597 76.4323 11.9317 74.0649 13.3684C72.1365 14.5282 71.3135 16.5379 70.4432 18.6625L70.3625 18.8594C69.4928 20.9636 68.6324 23.0723 67.7798 25.1857C65.1695 31.5929 62.4719 38.2291 59.6057 44.6632C55.2738 54.3947 50.5883 64.1676 46.1573 73.345C44.6536 76.4606 43.0148 79.4548 41.2814 82.625C40.4938 84.0689 39.6898 85.5384 38.8871 87.0493C38.8227 87.1727 38.7329 87.281 38.6244 87.3677C38.5158 87.4543 38.3905 87.518 38.2563 87.5541C38.1221 87.5902 37.9818 87.598 37.8444 87.5777C37.707 87.5567 37.5752 87.5081 37.4576 87.4339L34.611 85.6461C32.8035 84.5198 31.158 83.4953 29.5192 82.4563C27.2128 80.9999 24.9062 79.5408 22.5994 78.0792C18.0812 75.2129 13.5581 72.3579 9.03026 69.514C8.01503 68.771 6.81172 68.3266 5.55691 68.2328C4.63274 68.2623 3.75076 68.6266 3.0753 69.258C1.08528 70.8896 0.525441 72.9066 1.36883 75.4276C1.90834 77.0526 2.63688 78.6718 3.33785 80.2431L3.37198 80.3087C3.9384 81.584 4.55862 82.8717 5.15195 84.1194C6.27166 86.4731 7.43864 88.9107 8.37589 91.4048C8.97618 92.9826 9.57876 94.5631 10.1834 96.1462C14.048 106.269 18.0405 116.736 20.6507 127.513C21.5342 131.169 23.6449 133.145 27.1045 133.556C28.0555 133.671 29.0079 133.792 29.951 133.914C33.8317 134.498 37.7484 134.812 41.6726 134.851C50.5883 134.737 59.6523 134.406 68.4204 134.089C72.2777 133.947 76.133 133.813 79.9864 133.685C86.3128 133.482 92.6392 133.288 98.965 133.105L106.229 132.882C106.815 132.868 107.402 132.848 107.996 132.835C108.636 132.821 109.284 132.801 109.931 132.781C112.177 132.715 114.423 132.625 116.668 132.545C122.182 132.343 127.871 132.133 133.482 132.1C136.072 132.086 137.9 131.181 139.242 129.26C140.167 127.85 140.87 126.306 141.326 124.681L142.054 122.293C145.028 112.555 148.097 102.479 149.904 92.2817C150.08 91.2899 150.262 90.3054 150.437 89.3137C151.877 81.3471 153.374 73.0916 152.875 64.8372ZM130.396 120.403C130.332 120.581 130.219 120.737 130.07 120.853C129.921 120.969 129.741 121.04 129.554 121.059C128.744 121.147 127.908 121.248 127.065 121.35C125.136 121.586 123.133 121.829 121.11 121.916C117.791 122.058 114.42 122.159 111.162 122.244C106.819 122.375 102.327 122.5 97.9228 122.743C92.7908 123.033 87.5703 123.458 82.5257 123.869C79.626 124.106 76.7257 124.342 73.826 124.55C69.5906 124.861 66.0562 125.11 62.3741 125.225C53.3029 125.515 44.0833 125.75 35.1676 125.981L30.7504 126.095H30.6487C30.2384 126.086 29.8299 126.038 29.4286 125.953C29.2934 125.926 29.1588 125.899 29.0302 125.887C28.8387 125.861 28.6589 125.78 28.5119 125.655C28.3649 125.529 28.2569 125.364 28.2006 125.179L16.4863 87.0743C16.424 86.878 16.4238 86.6667 16.4855 86.4698C16.5472 86.2729 16.668 86.1003 16.8314 85.9743C16.9947 85.8482 17.1929 85.7754 17.399 85.7662C17.605 85.7563 17.809 85.8102 17.9834 85.9204L19.5008 86.8583C20.5056 87.4786 21.4298 88.045 22.3401 88.6252C23.6348 89.4482 24.9298 90.2667 26.225 91.0799C29.4351 93.1099 32.7602 95.201 35.9637 97.3722C38.0135 98.7617 39.8079 99.2946 41.2847 98.9573C42.7286 98.6291 44.0026 97.4871 45.1695 95.4708L46.2197 93.6698C48.2025 90.2706 50.2529 86.75 51.9587 83.1684C57.6032 71.2716 63.2621 59.1323 68.7321 47.3904C70.8902 42.757 73.0528 38.1237 75.22 33.4905C75.4018 33.0966 75.5909 32.7145 75.8606 32.1822L76.3798 31.1367C76.4631 30.9612 76.597 30.8144 76.7637 30.7148C76.9311 30.6152 77.1234 30.5673 77.3177 30.577C77.5113 30.5817 77.6997 30.642 77.8598 30.7508C78.02 30.8597 78.145 31.0123 78.2208 31.1905C79.0169 33.0657 79.8196 34.8798 80.6086 36.6604C82.3216 40.5328 83.9401 44.1868 85.323 47.9837C88.4859 56.6907 91.5812 65.5735 94.5826 74.1713C96.3022 79.0952 98.0291 84.021 99.7625 88.9481C100.619 91.4606 101.619 93.9218 102.757 96.3194C103.131 97.1943 103.705 97.9688 104.434 98.5805C105.163 99.1922 106.025 99.6234 106.952 99.84C108.766 100.198 110.681 99.5703 112.354 98.0797C114.896 95.8141 117.426 93.5274 119.955 91.2479C122.174 89.2448 124.392 87.2462 126.611 85.2523C129.437 82.7306 132.272 80.2142 135.115 77.7044L138.922 74.3387C139.063 74.2146 139.234 74.1313 139.418 74.0985C139.603 74.065 139.793 74.0834 139.968 74.1503L140.669 74.4266C140.883 74.5106 141.064 74.6649 141.179 74.8651C141.294 75.0653 141.338 75.2983 141.303 75.526C139.231 88.7453 136.318 104.419 130.396 120.403Z"
                        fill="#43302e"
                      />
                    </g>

                    <defs>
                      <clipPath id="clip0">
                        <rect
                          width="152.927"
                          height="135.206"
                          fill="white"
                          transform="translate(0.682373 0.0187988)"
                        />
                      </clipPath>
                    </defs>
                  </g>
                </svg>
                <div className="w-fit block md:hidden">
                  <h2 className="text-lg xs:text-3xl mt-4 font-bold sm:font-black">
                    Different looks good on you.
                  </h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 260 30"
                    fill="none"
                    aria-hidden="true"
                    className="h-auto w-40 text-secondary sm:w-52"
                  >
                    <path
                      d="M5 22 C75 10 164 5 253 6
                    C187 10 128 16 94 24"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h1 className="hidden md:block md:pl-6 text-2xl md:text-3xl lg:text-5xl font-bold origin-bottom md:-rotate-6">
                  <span className="inline pl-4">Different</span>
                  <span className="inline pl-2">looks good</span>
                  <span className="pl-2 md:pl-0 md:flex gap-2 lg:gap-6 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64 36"
                      fill="none"
                      aria-hidden="true"
                      className="h-7 lg:h-12 w-12 lg:w-20 shrink-0 text-secondary"
                    >
                      <path
                        d="M5 29 L27 8 L19 26 L56 7"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    on you.
                  </span>
                </h1>
                <p className="md:pl-6 pb-3 pt-2 md:pt-8 text-xs sm:text-base">
                  Formless is for the creators ,dreamers and the in-between . A
                  space for self-expression through wearable art.
                </p>
                <p className="md:pl-6 text-xs sm:text-base">
                  No fixed form. Just real people, real ideas, and hoodies made
                  for you.
                </p>
                <div className="md:pl-6">
                  <NavLink
                    to="/Customize"
                    className="mt-4 md:mt-2 lg:mt-4 flex items-center justify-center gap-2 w-full text-quaternary bg-secondary text-sm xs:text-base xl:text-lg px-1 xs:px-3 md:px-6 xl:px-8 py-2 rounded-md border border-secondary hover:bg-transparent hover:text-tertiary hover:border-tertiary transition-all duration-300 ease-in-out"
                  >
                    <span>Our Story</span>
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end-story */}
    </>
  );
}

export default Home;
