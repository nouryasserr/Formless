import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function ProductCard({ image, name, price, isNew = false, to = "/productdetails" }) {
  return (
    <div>
      <div
        className="relative aspect-[4/5] overflow-hidden grow sm:grow-0 sm:min-w-80 md:min-w-72 2xl:min-w-80"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, #F7F2E9 0%, #E9E0D2 55%, #CFC1AF 100%)",
        }}
      >
        {/* <img
          src={product.images?.[0]?.url}
          alt={product.name}
          className="absolute inset-0 h-full w-full object-contain p-4"
        /> */}
        {isNew && (
          <span className="absolute left-2 top-2 bg-secondary text-quaternary text-sm py-1 px-3 rounded">
            New
          </span>
        )}
        <img
          src={image}
          alt={name}
          className="absolute inset-0 h-full w-full object-contain p-4"
        />
      </div>
      <div className="pt-2">
        <h2 className="font-semibold text-lg truncate">{name}</h2>
        <p className="text-slate-700 text-lg font-medium">
          EGP {price.toLocaleString("en-US")}
        </p>
        <NavLink
          to={to}
          className={
            "pt-2 text-base xs:text-lg text-secondary flex items-center gap-3 transition-all duration-300 ease-in-out"
          }
        >
          <span className="font-semibold">View details</span>
          <i className="fa-solid fa-arrow-right-long"></i>
        </NavLink>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isNew: PropTypes.bool,
  to: PropTypes.string,
};

export default ProductCard;
