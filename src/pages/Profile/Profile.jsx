import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import product from "../../assets/product.png";
import custom from "../../assets/custom.png";

const user = {
  firstName: "Maryam",
  name: "Maryam Magdy",
  initials: "MM",
  email: "maryam@example.com",
  address: ["12 Studio Street, Building 12, Apt 4", "Shubra, Cairo, Egypt"],
};

const sections = [
  { id: "overview", label: "Overview", icon: "fa-regular fa-house" },
  { id: "orders", label: "My orders", icon: "fa-regular fa-rectangle-list" },
  { id: "designs", label: "My designs", icon: "fa-regular fa-image" },
  { id: "addresses", label: "Addresses", icon: "fa-regular fa-map" },
  { id: "account", label: "Account details", icon: "fa-regular fa-user" },
];

const orders = [
  {
    number: "FRM-1024",
    date: "14 Oct 2026",
    items: 2,
    total: 1860,
    images: 2,
    status: "confirmed",
  },
  {
    number: "FRM-1021",
    date: "10 Oct 2026",
    items: 1,
    total: 910,
    images: 1,
    status: "delivered",
  },
];

const designs = [
  {
    code: "CR-008",
    name: "Abstract faces",
    specs: "Cream / M · Front",
    status: "approved",
    note: "Ready for payment",
    action: { label: "Continue to payment", to: "/payment" },
  },
  {
    code: "CR-009",
    name: "Midnight sketch",
    specs: "Black / L · Back",
    status: "review",
    note: "We'll email you our decision.",
    action: { label: "View request", to: "/designs/CR-009" },
  },
  {
    code: "CR-007",
    name: "Fine-line artwork",
    specs: "Cream / M · Sleeve",
    status: "rejected",
    note: "Details included in your review.",
    action: { label: "View feedback", to: "/designs/CR-007" },
  },
];

const designStatus = {
  approved: { label: "Approved", icon: "fa-solid fa-check", className: "bg-primary" },
  review: { label: "Under review", icon: "fa-regular fa-clock", className: "bg-tertiary/10" },
  rejected: {
    label: "Not approved",
    icon: "fa-regular fa-circle-xmark text-red-600",
    className: "bg-red-100",
  },
};

const formatPrice = (value) => `EGP ${value.toLocaleString("en-US")}`;

const cardClass = "rounded-lg border border-tertiary/20 p-4 sm:p-5";

const arrowLinkClass =
  "inline-flex items-center gap-2 text-xs sm:text-sm text-secondary underline hover:gap-3 transition-all duration-300 ease-in-out";

function Profile() {
  const navigate = useNavigate();
  const [active, setActive] = useState("overview");

  const renderOrderStatus = (status) =>
    status === "confirmed" ? (
      <span className="inline-flex items-center gap-2 rounded-full bg-secondary/15 px-3 py-1 text-xs text-secondary">
        <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
        Confirmed
      </span>
    ) : (
      <span className="inline-flex items-center gap-2 rounded-full bg-tertiary/10 px-3 py-1 text-xs">
        <i className="fa-solid fa-check"></i>
        Delivered
      </span>
    );

  return (
    <div className="bg-quaternary">
      <div className="px-2 xs:px-4 sm:px-10 md:px-16 py-4 sm:py-6">
        {/* breadcrumb */}
        <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-tertiary/70">
          <NavLink to="/" className="hover:text-secondary transition-colors duration-300">
            Home
          </NavLink>
          <span>/</span>
          <span className="font-bold text-tertiary">My account</span>
        </nav>
        {/* end-breadcrumb */}

        {/* hero */}
        <div id="overview" className="mt-2 scroll-mt-40 text-center md:text-left">
          <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl leading-tight">
            YOUR{" "}
            <span className="relative inline-block">
              LITTLE
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 260 30"
                fill="none"
                aria-hidden="true"
                className="absolute left-[10%] -bottom-3 sm:-bottom-4 w-full h-auto text-secondary"
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
            CORNER.
          </h1>
          <p className="mt-3 text-base sm:text-lg md:text-xl">
            Hey {user.firstName}. Your orders, ideas and details — all here.
          </p>
        </div>
        {/* end-hero */}

        <div className="mt-5 sm:mt-6 grid grid-cols-1 lg:grid-cols-[14rem_1fr] xl:grid-cols-[15rem_1fr] gap-3 sm:gap-4">
          {/* sidebar */}
          <aside className="rounded-lg border border-tertiary/20 p-3 sm:p-4 lg:px-0 lg:pt-4">
            <div className="flex items-center lg:flex-col lg:items-start gap-3 lg:px-4">
              <span className="shrink-0 flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-tertiary/10 text-sm lg:text-base font-semibold">
                {user.initials}
              </span>
              <div className="min-w-0">
                <p className="text-sm sm:text-base font-semibold">{user.name}</p>
                <p className="text-xs sm:text-sm text-tertiary/70 truncate">{user.email}</p>
              </div>
            </div>

            <nav className="mt-3 lg:mt-5 -mx-3 sm:-mx-4 lg:mx-0 px-3 sm:px-4 lg:px-0 overflow-x-auto lg:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden border-t lg:border-t-0 border-tertiary/20 pt-3 lg:pt-0">
              <ul className="flex lg:flex-col gap-2 lg:gap-1 w-max lg:w-auto">
                {sections.map((section) => {
                  const selected = active === section.id;
                  return (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        onClick={() => setActive(section.id)}
                        aria-current={selected ? "page" : undefined}
                        className={`flex items-center gap-3 whitespace-nowrap rounded-full lg:rounded-none px-3 py-2 lg:px-4 lg:py-2.5 text-sm border lg:border-0 lg:border-l-2 transition-colors duration-300 ${
                          selected
                            ? "border-secondary bg-secondary/10 text-secondary"
                            : "border-tertiary/20 lg:border-transparent hover:text-secondary"
                        }`}
                      >
                        <i className={`${section.icon} w-4 text-center`}></i>
                        {section.label}
                      </a>
                    </li>
                  );
                })}
                <li className="lg:mt-4 lg:pt-4 lg:border-t lg:border-tertiary/20 lg:mx-4">
                  <button
                    type="button"
                    onClick={() => navigate("/signin")}
                    className="flex items-center gap-3 whitespace-nowrap rounded-full lg:rounded-none px-3 py-2 lg:px-0 lg:py-2.5 text-sm border lg:border-0 border-tertiary/20 hover:text-secondary transition-colors duration-300"
                  >
                    <i className="fa-solid fa-arrow-right-from-bracket w-4 text-center"></i>
                    Sign out
                  </button>
                </li>
              </ul>
            </nav>
          </aside>
          {/* end-sidebar */}

          <div className="flex flex-col gap-3 sm:gap-4 min-w-0">
            {/* approved */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-lg border border-primary bg-primary px-4 py-4 sm:px-5">
              <div className="flex items-center gap-3 sm:gap-4 flex-1">
                <div className="relative shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="absolute -left-4 top-1/2 -translate-y-1/2 w-4 h-6 text-tertiary"
                  >
                    <path
                      d="M18 4 L12 8 M17 12 L10 12 M18 20 L12 16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#f9d48a]">
                    <i className="fa-solid fa-check text-xl sm:text-2xl"></i>
                  </span>
                </div>
                <div className="pl-1">
                  <p className="text-sm sm:text-base font-bold">Your design is approved.</p>
                  <p className="mt-0.5 text-xs sm:text-sm">
                    Your Art Club request is ready for the payment step.
                  </p>
                </div>
              </div>
              <NavLink
                to="/payment"
                className="shrink-0 flex items-center justify-center gap-2 text-quaternary bg-secondary text-sm px-6 py-2.5 rounded-md border border-secondary hover:bg-transparent hover:text-tertiary hover:border-tertiary transition-all duration-300 ease-in-out"
              >
                <span className="font-semibold">Continue to payment</span>
                <i className="fa-solid fa-arrow-right-long"></i>
              </NavLink>
            </div>
            {/* end-approved */}

            {/* orders */}
            <section id="orders" className={`${cardClass} scroll-mt-40`}>
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-lg sm:text-xl font-bold">Recent orders</h2>
                <NavLink to="/orders" className={arrowLinkClass}>
                  View all
                  <i className="fa-solid fa-arrow-right-long"></i>
                </NavLink>
              </div>
              <ul className="mt-2">
                {orders.map((order) => (
                  <li
                    key={order.number}
                    className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 py-3 border-b last:border-b-0 border-tertiary/20"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                      <div className="shrink-0 flex gap-2 w-[7.5rem] sm:w-[8.5rem]">
                        {Array.from({ length: order.images }, (_, index) => (
                          <div
                            key={index}
                            className="w-14 h-14 sm:w-16 sm:h-16 rounded-md bg-[#efe6dc] p-1.5"
                          >
                            <img
                              src={product}
                              alt={`Order ${order.number} item ${index + 1}`}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm sm:text-base font-semibold">Order #{order.number}</p>
                        <p className="mt-0.5 text-xs text-tertiary/70">{order.date}</p>
                        <p className="mt-1 text-xs text-tertiary/70">
                          {order.items} {order.items === 1 ? "item" : "items"} ·{" "}
                          {formatPrice(order.total)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-3 sm:contents">
                      <div className="flex flex-wrap sm:flex-col items-start gap-1.5 sm:w-36 md:w-40">
                        {renderOrderStatus(order.status)}
                        <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs">
                          <i className="fa-solid fa-check"></i>
                          Payment verified
                        </span>
                      </div>
                      <NavLink
                        to={`/orders/${order.number}`}
                        className={`${arrowLinkClass} shrink-0 sm:w-28 sm:justify-end`}
                      >
                        View details
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </NavLink>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
            {/* end-orders */}

            {/* designs */}
            <section id="designs" className={`${cardClass} scroll-mt-40`}>
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-lg sm:text-xl font-bold">Your custom designs</h2>
                <NavLink to="/designs" className={arrowLinkClass}>
                  View all
                  <i className="fa-solid fa-arrow-right-long"></i>
                </NavLink>
              </div>
              <ul className="mt-2">
                {designs.map((design) => {
                  const status = designStatus[design.status];
                  return (
                    <li
                      key={design.code}
                      className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 py-3 border-b last:border-b-0 border-tertiary/20"
                    >
                      <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                        <img
                          src={custom}
                          alt={design.name}
                          className="shrink-0 w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] rounded-md object-cover"
                        />
                        <div className="min-w-0">
                          <p className="text-xs sm:text-sm">{design.code}</p>
                          <p className="text-sm sm:text-base font-semibold">{design.name}</p>
                          <p className="mt-0.5 text-xs text-tertiary/70">{design.specs}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-3 sm:contents">
                        <div className="sm:w-40 md:w-48">
                          <span
                            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs ${status.className}`}
                          >
                            <i className={status.icon}></i>
                            {status.label}
                          </span>
                          <p className="mt-1.5 text-xs text-tertiary/70">{design.note}</p>
                        </div>
                        <NavLink
                          to={design.action.to}
                          className={`${arrowLinkClass} shrink-0 sm:w-40 sm:justify-end`}
                        >
                          {design.action.label}
                          <i className="fa-solid fa-arrow-right-long"></i>
                        </NavLink>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
            {/* end-designs */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {/* account */}
              <section id="account" className={`${cardClass} scroll-mt-40 flex flex-col`}>
                <h2 className="text-lg sm:text-xl font-bold">Account details</h2>
                <dl className="mt-3 flex flex-col gap-3 text-xs sm:text-sm flex-1">
                  <div className="flex items-center gap-3">
                    <i className="fa-regular fa-user w-5 text-center text-base"></i>
                    <dt className="w-12 shrink-0">Name</dt>
                    <dd>{user.name}</dd>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fa-regular fa-envelope w-5 text-center text-base"></i>
                    <dt className="w-12 shrink-0">Email</dt>
                    <dd className="flex flex-wrap items-center gap-2 min-w-0">
                      <span className="break-all">{user.email}</span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-2.5 py-0.5 text-[11px] sm:text-xs">
                        <i className="fa-solid fa-check"></i>
                        Verified
                      </span>
                    </dd>
                  </div>
                </dl>
                <div className="mt-4 pt-3 border-t border-tertiary/20 flex flex-wrap gap-x-6 gap-y-2">
                  <NavLink to="/account/edit" className={arrowLinkClass}>
                    <i className="fa-regular fa-pen-to-square"></i>
                    Edit details
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </NavLink>
                  <NavLink to="/account/password" className={arrowLinkClass}>
                    <i className="fa-solid fa-lock"></i>
                    Change password
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </NavLink>
                </div>
              </section>
              {/* end-account */}

              {/* address */}
              <section id="addresses" className={`${cardClass} scroll-mt-40 flex flex-col`}>
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-lg sm:text-xl font-bold">Default address</h2>
                  <span className="rounded-full bg-primary px-3 py-1 text-xs">Default</span>
                </div>
                <div className="mt-3 flex gap-3 text-xs sm:text-sm flex-1">
                  <i className="fa-solid fa-location-dot w-5 text-center text-base pt-0.5"></i>
                  <address className="not-italic leading-relaxed">
                    {user.name}
                    {user.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
                <div className="mt-4 pt-3 border-t border-tertiary/20">
                  <NavLink to="/addresses" className={arrowLinkClass}>
                    <i className="fa-regular fa-map"></i>
                    Manage addresses
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </NavLink>
                </div>
              </section>
              {/* end-address */}
            </div>

            {/* help */}
            <div className="flex items-center justify-between gap-3 rounded-lg border border-tertiary/20 px-4 py-3 sm:px-5">
              <p className="flex items-center gap-3 text-xs sm:text-sm font-medium">
                <i className="fa-solid fa-headset text-base"></i>
                Need a hand with an order?
              </p>
              <NavLink to="/contact" className={`${arrowLinkClass} shrink-0`}>
                Contact us
                <i className="fa-solid fa-arrow-right-long"></i>
              </NavLink>
            </div>
            {/* end-help */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
