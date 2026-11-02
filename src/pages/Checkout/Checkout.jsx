import { useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import product from "../../assets/product.png";

const user = { name: "Maryam Magdy", email: "maryam@example.com" };

const items = [
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

const deliveryFee = 60;

const steps = ["Cart", "Checkout", "Payment", "Confirmation"];
const currentStep = 1;

const governorates = [
  "Alexandria",
  "Aswan",
  "Asyut",
  "Beheira",
  "Beni Suef",
  "Cairo",
  "Dakahlia",
  "Damietta",
  "Faiyum",
  "Gharbia",
  "Giza",
  "Ismailia",
  "Kafr El Sheikh",
  "Luxor",
  "Matrouh",
  "Minya",
  "Monufia",
  "New Valley",
  "North Sinai",
  "Port Said",
  "Qalyubia",
  "Qena",
  "Red Sea",
  "Sharqia",
  "Sohag",
  "South Sinai",
  "Suez",
];

const formatPrice = (value) => `EGP ${value.toLocaleString("en-US")}`;

const validationSchema = Yup.object({
  fullName: Yup.string().trim().required("Full name is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^01[0125]\d{8}$/, "Enter a valid Egyptian phone number")
    .required("Phone number is required"),
  country: Yup.string().required("Country is required"),
  governorate: Yup.string().required("Governorate is required"),
  city: Yup.string().trim().required("City / Area is required"),
  street: Yup.string().trim().required("Street address is required"),
  building: Yup.string().trim().required("Building is required"),
  apartment: Yup.string(),
  notes: Yup.string(),
  saveAddress: Yup.boolean(),
  delivery: Yup.string().required(),
});

const initialValues = {
  fullName: user.name,
  email: user.email,
  phone: "",
  country: "Egypt",
  governorate: "Cairo",
  city: "Shubra",
  street: "",
  building: "",
  apartment: "",
  notes: "",
  saveAddress: false,
  delivery: "standard",
};

const inputClass =
  "w-full rounded-md border border-tertiary/30 bg-quaternary px-3 py-2 text-sm placeholder:text-tertiary/40 focus:outline-none focus:border-secondary transition-colors duration-300";

const renderLabel = (htmlFor, text, required = false) => (
  <label htmlFor={htmlFor} className="block mb-1 text-xs sm:text-sm">
    {text}
    {required && <span className="text-secondary"> *</span>}
  </label>
);

const renderError = (name) => (
  <ErrorMessage name={name}>
    {(message) => <p className="mt-1 text-xs text-red-600">{message}</p>}
  </ErrorMessage>
);

const renderSelect = (name, options) => (
  <div className="relative">
    <Field
      as="select"
      id={name}
      name={name}
      className={`${inputClass} appearance-none pr-9`}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Field>
    <i className="fa-solid fa-chevron-down pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs"></i>
  </div>
);

function ScrollToFirstError() {
  const { submitCount, errors } = useFormikContext();
  const handledSubmit = useRef(0);

  useEffect(() => {
    if (submitCount === handledSubmit.current) return;
    const field = [...document.querySelectorAll("form [name]")].find(
      (element) => errors[element.name],
    );
    if (!field) return;
    handledSubmit.current = submitCount;
    field.scrollIntoView({ behavior: "smooth", block: "center" });
    field.focus({ preventScroll: true });
  }, [submitCount, errors]);

  return null;
}

function Checkout() {
  const navigate = useNavigate();
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const total = subtotal + deliveryFee;

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
            to="/cart"
            className="hover:text-secondary transition-colors duration-300"
          >
            Cart
          </NavLink>
          <span>/</span>
          <span className="font-bold text-tertiary">Checkout</span>
        </nav>
        {/* end-breadcrumb */}

        {/* hero */}
        <div className="flex flex-col items-center text-center mt-4">
          <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl leading-tight">
            MAKE{" "}
            <span className="relative inline-block">
              IT
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 260 30"
                fill="none"
                aria-hidden="true"
                className="absolute -left-[85%] -bottom-3 sm:-bottom-4 w-[200%] h-auto text-secondary"
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
          <p className="mt-3 text-base sm:text-lg md:text-xl font-medium">
            A few details, then it&apos;s over to InstaPay.
          </p>
        </div>
        {/* end-hero */}

        {/* steps */}
        <ol className="mt-6 grid grid-cols-4 max-w-2xl mx-auto">
          {steps.map((step, index) => {
            const done = index < currentStep;
            const active = index === currentStep;
            return (
              <li key={step} className="relative flex flex-col items-center">
                {index < steps.length - 1 && (
                  <span
                    className={`absolute top-2 sm:top-2.5 left-1/2 w-full h-px ${
                      index < currentStep ? "bg-tertiary" : "bg-tertiary/40"
                    }`}
                  ></span>
                )}
                <span
                  className={`relative z-10 flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 ${
                    done
                      ? "bg-tertiary border-tertiary text-quaternary"
                      : active
                        ? "bg-secondary border-secondary"
                        : "bg-quaternary border-tertiary/60"
                  }`}
                >
                  {done && (
                    <i className="fa-solid fa-check text-[8px] sm:text-[10px]"></i>
                  )}
                </span>
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

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={() => navigate("/payment")}
        >
          {({ isSubmitting }) => (
            <Form
              noValidate
              className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10"
            >
              <ScrollToFirstError />
              {/* details */}
              <div className="lg:col-span-3">
                <p className="text-xs sm:text-sm">
                  Signed in as <span className="font-medium">{user.email}</span>
                </p>

                {/* contact */}
                <section className="mt-5 pb-6 border-b border-tertiary/20">
                  <h2 className="text-lg sm:text-xl font-bold">
                    <span className="text-secondary">01.</span> Contact details
                  </h2>
                  <div className="mt-3 flex flex-col gap-3">
                    <div>
                      {renderLabel("fullName", "Full name", true)}
                      <Field
                        id="fullName"
                        name="fullName"
                        type="text"
                        className={inputClass}
                      />
                      {renderError("fullName")}
                    </div>
                    <div>
                      {renderLabel("email", "Email", true)}
                      <Field
                        id="email"
                        name="email"
                        type="email"
                        className={inputClass}
                      />
                      {renderError("email")}
                    </div>
                    <div>
                      {renderLabel("phone", "Phone number", true)}
                      <Field
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="01XXXXXXXXX"
                        className={inputClass}
                      />
                      {renderError("phone")}
                    </div>
                  </div>
                </section>
                {/* end-contact */}

                {/* address */}
                <section className="mt-6 pb-6 border-b border-tertiary/20">
                  <h2 className="text-lg sm:text-xl font-bold">
                    <span className="text-secondary">02.</span> Delivery address
                  </h2>
                  <div className="mt-3 flex flex-col gap-3">
                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 xs:gap-4">
                      <div>
                        {renderLabel("country", "Country", true)}
                        {renderSelect("country", ["Egypt"])}
                        {renderError("country")}
                      </div>
                      <div>
                        {renderLabel("governorate", "Governorate", true)}
                        {renderSelect("governorate", governorates)}
                        {renderError("governorate")}
                      </div>
                    </div>
                    <div>
                      {renderLabel("city", "City / Area", true)}
                      <Field
                        id="city"
                        name="city"
                        type="text"
                        className={inputClass}
                      />
                      {renderError("city")}
                    </div>
                    <div>
                      {renderLabel("street", "Street address", true)}
                      <Field
                        id="street"
                        name="street"
                        type="text"
                        placeholder="Street name and building number"
                        className={inputClass}
                      />
                      {renderError("street")}
                    </div>
                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 xs:gap-4">
                      <div>
                        {renderLabel("building", "Building", true)}
                        <Field
                          id="building"
                          name="building"
                          type="text"
                          placeholder="Building number / name"
                          className={inputClass}
                        />
                        {renderError("building")}
                      </div>
                      <div>
                        {renderLabel("apartment", "Apartment")}
                        <Field
                          id="apartment"
                          name="apartment"
                          type="text"
                          placeholder="Apartment number (optional)"
                          className={inputClass}
                        />
                      </div>
                    </div>
                    <div>
                      {renderLabel("notes", "Delivery notes (optional)")}
                      <Field
                        as="textarea"
                        id="notes"
                        name="notes"
                        rows="2"
                        placeholder="Anything our courier should know?"
                        className={inputClass}
                      />
                    </div>
                    <label className="mt-1 flex items-center gap-3 text-xs sm:text-sm cursor-pointer w-fit">
                      <Field
                        type="checkbox"
                        name="saveAddress"
                        className="w-5 h-5 accent-secondary cursor-pointer"
                      />
                      Save this address for next time
                    </label>
                  </div>
                </section>
                {/* end-address */}

                {/* delivery */}
                <section className="mt-6">
                  <h2 className="text-lg sm:text-xl font-bold">
                    <span className="text-secondary">03.</span> Delivery
                  </h2>
                  <label className="mt-3 flex items-center justify-between gap-3 rounded-md border border-secondary/60 bg-secondary/5 px-4 py-3 cursor-pointer">
                    <span className="flex items-center gap-3 sm:gap-4 text-sm font-medium">
                      <Field
                        type="radio"
                        name="delivery"
                        value="standard"
                        className="w-5 h-5 accent-secondary cursor-pointer"
                      />
                      Standard delivery
                    </span>
                    <span className="text-sm font-medium">
                      {formatPrice(deliveryFee)}
                    </span>
                  </label>
                  <p className="mt-2 text-xs text-tertiary/70">
                    Delivery timing will be shared after order confirmation.
                  </p>
                </section>
                {/* end-delivery */}

                <NavLink
                  to="/cart"
                  className="mt-6 hidden lg:inline-flex items-center gap-2 text-sm hover:gap-3 transition-all duration-300 ease-in-out"
                >
                  <i className="fa-solid fa-arrow-left-long"></i>
                  <span className="underline">Back to cart</span>
                </NavLink>
              </div>
              {/* end-details */}

              {/* summary */}
              <aside className="lg:col-span-2 lg:self-start rounded-lg border border-tertiary/20 p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg sm:text-xl font-bold">Your order</h2>
                  <NavLink
                    to="/cart"
                    className="text-xs sm:text-sm underline hover:text-secondary transition-colors duration-300"
                  >
                    Edit cart
                  </NavLink>
                </div>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="flex gap-3 sm:gap-4 py-3 border-b border-tertiary/20"
                    >
                      <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-md bg-[#efe6dc] p-2">
                        <img
                          src={product}
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <p className="text-sm sm:text-base font-semibold">
                          {item.name}
                        </p>
                        <p className="mt-1 text-xs text-tertiary/70">
                          {item.color} / {item.size}
                        </p>
                        <p className="text-xs text-tertiary/70">
                          Qty: {item.qty}
                        </p>
                        <p className="mt-auto self-end text-sm">
                          {formatPrice(item.price * item.qty)}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-col gap-3 text-sm pb-4 border-b border-tertiary/20">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery</span>
                    <span>{formatPrice(deliveryFee)}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-base sm:text-lg font-bold">Total</span>
                  <span className="text-base sm:text-lg font-bold">
                    {formatPrice(total)}
                  </span>
                </div>
                <div className="rounded-md bg-primary px-4 py-4">
                  <p className="text-sm sm:text-base font-bold">
                    Pay with InstaPay
                  </p>
                  <p className="mt-1 text-xs sm:text-sm">
                    Next, transfer the total and upload your receipt. Your order
                    is confirmed after our team verifies the payment.
                  </p>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-4 w-full flex items-center justify-center gap-2 text-quaternary bg-secondary text-sm xs:text-base px-4 py-3 rounded-md border border-secondary hover:bg-transparent hover:text-tertiary hover:border-tertiary transition-all duration-300 ease-in-out disabled:opacity-60"
                >
                  <span className="font-semibold">Continue to InstaPay</span>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </button>
                <p className="mt-2 text-center text-xs text-tertiary/70">
                  No payment is collected on this page.
                </p>
              </aside>
              {/* end-summary */}
              <NavLink
                to="/cart"
                className="lg:hidden inline-flex items-center gap-2 text-sm w-fit hover:gap-3 transition-all duration-300 ease-in-out"
              >
                <i className="fa-solid fa-arrow-left-long"></i>
                <span className="underline">Back to cart</span>
              </NavLink>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Checkout;
