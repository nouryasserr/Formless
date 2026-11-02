import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import customizeBox from "../../assets/customize-box.png";
import front from "../../assets/front.png";
import back from "../../assets/back.png";
import left from "../../assets/left.png";
import sleeve from "../../assets/sleeve.png";
import draw from "../../assets/draw.png";

const colors = [
  { name: "Cream", value: "#efe6d6" },
  { name: "Brown", value: "#5a3426" },
  { name: "Orange", value: "#fe682b" },
  { name: "Black", value: "#1c1c1c" },
  { name: "Sky", value: "#a9c4ec" },
];

const sizes = ["S", "M", "L", "XL", "XXL"];

const placements = [
  { id: "front", label: "Front", image: front },
  { id: "back", label: "Back", image: back },
  { id: "left-chest", label: "Left chest", image: left },
  { id: "sleeve", label: "Sleeve", image: sleeve },
];

const steps = [
  {
    number: "01",
    icon: "fa-solid fa-arrow-up-from-bracket",
    title: "Send your artwork.",
    text: "Upload your design, sketch or idea.",
  },
  {
    number: "02",
    icon: "fa-regular fa-envelope",
    title: "We review & email you.",
    text: "We'll review it to make sure it looks great on a hoodie and email you our decision.",
  },
  {
    number: "03",
    icon: null,
    title: "Pay after approval.",
    text: "Once approved, you can complete your order and we bring it to life.",
  },
];

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const MAX_QUANTITY = 10;

function Customize() {
  const [color, setColor] = useState(colors[0].name);
  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [artwork, setArtwork] = useState({ name: "my-artwork.png", src: draw });
  const [artworkError, setArtworkError] = useState("");
  const [placement, setPlacement] = useState("front");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const fileInput = useRef(null);

  useEffect(() => {
    return () => {
      if (artwork?.src.startsWith("blob:")) URL.revokeObjectURL(artwork.src);
    };
  }, [artwork]);

  const openFilePicker = () => fileInput.current?.click();

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    if (!["image/png", "image/jpeg"].includes(file.type)) {
      setArtworkError("Please upload a PNG or JPG file.");
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      setArtworkError("Your file is larger than 10 MB.");
      return;
    }
    setArtworkError("");
    setSubmitted(false);
    setArtwork({ name: file.name, src: URL.createObjectURL(file) });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!artwork) {
      setArtworkError("Add your artwork before submitting.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="bg-quaternary overflow-hidden">
      <div className="px-2 xs:px-4 sm:px-10 md:px-16 py-4 sm:py-6">
        <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-tertiary/70">
          <NavLink
            to="/"
            className="hover:text-secondary transition-colors duration-300"
          >
            Home
          </NavLink>
          <span>/</span>
          <span className="font-bold text-tertiary">Customize</span>
        </nav>
        {/* hero */}
        <div className="mt-2 text-center md:text-left">
          <h1 className="text-4xl xs:text-5xl sm:text-6xl xl:text-7xl leading-tight">
            YOUR HOODIE.{" "}
            <span className="relative inline-block">
              YOUR RULES.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 260 30"
                fill="none"
                aria-hidden="true"
                className="absolute left-0 -bottom-3 sm:-bottom-6 w-full h-auto text-secondary"
              >
                <path
                  d="M5 22 C75 10 164 5 253 6 C187 10 128 16 94 24"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base xs:text-lg sm:text-xl md:text-2xl font-medium">
            Bring your artwork. We&apos;ll help bring it to life.
          </p>
        </div>
        {/* end-hero */}
        <div className="mt-4 sm:mt-6 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-3 items-start">
          <div className="lg:col-span-6 xl:col-span-7">
            <img
              src={customizeBox}
              alt={`Preview of your ${color.toLowerCase()} hoodie with your artwork`}
              className="block w-full max-w-2xl mx-auto h-auto"
            />
          </div>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="lg:col-span-6 xl:col-span-5 rounded-lg border border-tertiary/30 bg-quaternary p-4 sm:p-5"
          >
            <section className="pb-5 border-b border-tertiary/30">
              <h2 className="text-lg sm:text-xl font-bold">
                <span className="text-secondary mr-2">01</span>Make it your fit.
              </h2>
              <div className="mt-4 flex items-start gap-4">
                <p className="w-16 sm:w-20 shrink-0 pt-2 text-xs sm:text-sm font-semibold">
                  Color
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {colors.map((item) => {
                    const selected = item.name === color;
                    return (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => setColor(item.name)}
                        aria-label={item.name}
                        aria-pressed={selected}
                        className="flex flex-col items-center gap-1"
                      >
                        <span
                          className={`block w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-tertiary/20 transition-all duration-300 ${
                            selected
                              ? "ring-2 ring-secondary ring-offset-2 ring-offset-quaternary"
                              : "hover:scale-110"
                          }`}
                          style={{ backgroundColor: item.value }}
                        ></span>
                        <span
                          className={`text-[10px] sm:text-xs ${selected ? "" : "invisible"}`}
                        >
                          {item.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="mt-3 flex items-start gap-4">
                <p className="w-16 sm:w-20 shrink-0 pt-1.5 text-xs sm:text-sm font-semibold">
                  Size
                </p>
                <div className="flex flex-1 flex-wrap items-center gap-2">
                  {sizes.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setSize(item)}
                      aria-pressed={item === size}
                      className={`min-w-9 sm:min-w-10 px-2 py-1.5 rounded border text-xs transition-colors duration-300 ${
                        item === size
                          ? "bg-secondary border-secondary text-quaternary"
                          : "border-tertiary/30 hover:border-secondary"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                  <NavLink
                    to="/Customize"
                    className="ml-auto inline-flex items-center gap-2 text-xs underline hover:text-secondary transition-colors duration-300"
                  >
                    Size guide
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </NavLink>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <p className="w-16 sm:w-20 shrink-0 text-xs sm:text-sm font-semibold">
                  Quantity
                </p>
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
            </section>
            <section className="py-5 border-b border-tertiary/30">
              <h2 className="text-lg sm:text-xl font-bold">
                <span className="text-secondary mr-2">02</span>Add your artwork.
              </h2>
              <input
                ref={fileInput}
                type="file"
                accept="image/png, image/jpeg"
                onChange={handleFileChange}
                className="hidden"
              />
              {artwork ? (
                <div className="mt-3 flex items-center gap-3 sm:gap-4 rounded-lg border-2 border-dashed border-tertiary/40 p-3">
                  <img
                    src={artwork.src}
                    alt="Your artwork"
                    className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded object-cover bg-white"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-semibold truncate">
                      {artwork.name}
                    </p>
                    <p className="mt-1 flex items-center gap-2 text-xs">
                      <i className="fa-solid fa-circle-check text-green-600"></i>
                      Uploaded
                    </p>
                    <p className="mt-1 text-[10px] sm:text-xs text-tertiary/70">
                      PNG or JPG · Max 10 MB
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2 text-xs">
                    <button
                      type="button"
                      onClick={openFilePicker}
                      className="underline hover:text-secondary transition-colors duration-300"
                    >
                      Replace
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setArtwork(null);
                        setSubmitted(false);
                      }}
                      className="text-secondary underline hover:no-underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={openFilePicker}
                  className="mt-3 w-full flex flex-col items-center gap-2 rounded-lg border-2 border-dashed border-tertiary/40 px-3 py-6 hover:border-secondary transition-colors duration-300"
                >
                  <i className="fa-solid fa-arrow-up-from-bracket text-xl"></i>
                  <span className="text-sm font-semibold">
                    Upload your artwork
                  </span>
                  <span className="text-xs text-tertiary/70">
                    PNG or JPG · Max 10 MB
                  </span>
                </button>
              )}
              {artworkError && (
                <p className="mt-2 text-xs text-red-600">{artworkError}</p>
              )}
            </section>
            <section className="pt-5">
              <h2 className="text-lg sm:text-xl font-bold">
                <span className="text-secondary mr-2">03</span>Choose the
                placement.
              </h2>
              <div className="mt-3 grid grid-cols-2 xs:grid-cols-4 gap-2 sm:gap-3">
                {placements.map((item) => {
                  const selected = item.id === placement;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPlacement(item.id)}
                      aria-pressed={selected}
                      className={`flex flex-col items-center gap-1 rounded-md border bg-white/40 p-2 transition-colors duration-300 ${
                        selected
                          ? "border-2 border-secondary"
                          : "border-tertiary/30 hover:border-secondary"
                      }`}
                    >
                      <img
                        src={item.image}
                        alt=""
                        className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                      />
                      <span className="text-[11px] sm:text-xs">
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
              <label
                htmlFor="notes"
                className="block mt-4 mb-1 text-xs sm:text-sm font-semibold"
              >
                Notes for our team{" "}
                <span className="font-normal">(optional)</span>
              </label>
              <textarea
                id="notes"
                rows="2"
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                placeholder="Keep the artwork centered on the front."
                className="w-full rounded-md border border-tertiary/30 bg-quaternary px-3 py-2 text-sm placeholder:text-tertiary/50 focus:outline-none focus:border-secondary transition-colors duration-300"
              />
            </section>
            <div className="relative mt-4 -mx-4 sm:-mx-5 -mb-4 sm:-mb-5 rounded-b-lg bg-primary px-4 sm:px-5 pt-5 pb-5">
              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 80 80"
                  fill="none"
                  aria-hidden="true"
                  className="shrink-0 w-6 h-6 mt-0.5"
                >
                  <g stroke="#FE682B" strokeWidth="7" strokeLinecap="round">
                    <path d="M43 8 C41 27 37 49 34 71" />
                    <path d="M17 18 C31 29 47 43 64 58" />
                    <path d="M10 43 C29 39 50 34 71 29" />
                  </g>
                </svg>
                <div>
                  <p className="text-base sm:text-lg font-bold">
                    A little check before we create.
                  </p>
                  <p className="mt-1 text-xs sm:text-sm">
                    We&apos;ll review your design and email you our decision.
                    <br />
                    If approved, you can continue to payment.
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 text-quaternary bg-secondary text-sm xs:text-base px-4 py-3 rounded-md border border-secondary hover:bg-transparent hover:text-tertiary hover:border-tertiary transition-all duration-300 ease-in-out"
                >
                  <span className="font-semibold">
                    Submit design for review
                  </span>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </button>
              </div>
              {submitted ? (
                <p className="mt-2 text-xs sm:text-sm font-semibold text-green-700">
                  Thanks! Your design is in. We&apos;ll email you once
                  we&apos;ve reviewed it.
                </p>
              ) : (
                <p className="mt-2 text-xs text-tertiary/70">
                  Submitting a design does not confirm an <em>order</em>.
                </p>
              )}
            </div>
          </form>
        </div>
        <div className="mt-8 sm:mt-10 flex flex-col lg:flex-row items-center gap-6 lg:gap-6">
          <div className="relative shrink-0 origin-bottom -rotate-6">
            <h1 className="text-4xl sm:text-5xl leading-none text-center lg:text-left">
              <span className="block">From your idea</span>
              <span className="relative inline-block">
                to your hoodie.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 260 30"
                  fill="none"
                  aria-hidden="true"
                  className="absolute left-0 -bottom-5 w-4/5 h-auto text-secondary"
                >
                  <path
                    d="M5 22 C75 10 164 5 253 6"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </div>
          <ol className="flex-1 w-full grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
            {steps.map((step, index) => (
              <li key={step.number} className="flex gap-3 sm:gap-2">
                <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left">
                  <p className="text-secondary text-sm font-bold">
                    {step.number}
                  </p>
                  {step.icon ? (
                    <i className={`${step.icon} mt-1 text-2xl`}></i>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="mt-1 w-8 h-8"
                    >
                      <path
                        d="M20.73 16.52C20.73 16.52 20.73 16.45 20.73 16.41V7.58999C20.7297 7.47524 20.7022 7.36218 20.65 7.25999C20.5764 7.10119 20.4488 6.97364 20.29 6.89999L12.29 3.31999C12.1926 3.2758 12.0869 3.25293 11.98 3.25293C11.8731 3.25293 11.7674 3.2758 11.67 3.31999L3.67001 6.89999C3.54135 6.96474 3.43255 7.06303 3.35511 7.18448C3.27766 7.30592 3.23444 7.44603 3.23001 7.58999V16.41C3.23749 16.5532 3.28195 16.6921 3.35906 16.813C3.43617 16.9339 3.54331 17.0328 3.67001 17.1L11.67 20.68C11.7668 20.7262 11.8727 20.7501 11.98 20.7501C12.0873 20.7501 12.1932 20.7262 12.29 20.68L20.29 17.1C20.4055 17.0471 20.5061 16.9665 20.5829 16.8653C20.6597 16.7641 20.7102 16.6455 20.73 16.52ZM4.73001 8.73999L11.23 11.66V18.84L4.73001 15.93V8.73999ZM12.73 11.66L19.23 8.73999V15.93L12.73 18.84V11.66ZM12 4.81999L18.17 7.58999L12 10.35L5.83001 7.58999L12 4.81999Z"
                        fill="#43302e"
                      />
                    </svg>
                  )}
                  <p className="mt-2 text-sm font-bold">{step.title}</p>
                  <p className="mt-1 text-xs text-tertiary/70 max-w-[16rem]">
                    {step.text}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <i className="fa-solid fa-arrow-right-long mt-8 hidden sm:block"></i>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Customize;
