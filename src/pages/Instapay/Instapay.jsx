import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import product from "../../assets/product.png";

const order = {
  number: "FRM-1024",
  recipient: "Formless",
  transferNumber: "01X XXX XXXX",
  delivery: 60,
};

const items = [
  { id: 1, name: "Everyday Hoodie", color: "Cream", size: "M", qty: 1, price: 850 },
  { id: 2, name: "Studio Hoodie", color: "Brown", size: "L", qty: 1, price: 950 },
];

const steps = ["Cart", "Checkout", "Payment", "Confirmation"];
const currentStep = 2;

const MAX_FILE_SIZE = 10 * 1024 * 1024;

const formatPrice = (value) => `EGP ${value.toLocaleString("en-US")}`;

const formatFileSize = (bytes) =>
  bytes >= 1024 * 1024
    ? `${(bytes / (1024 * 1024)).toFixed(1)} MB`
    : `${Math.max(1, Math.round(bytes / 1024))} KB`;

function Instapay() {
  const navigate = useNavigate();
  const fileInput = useRef(null);
  const [copied, setCopied] = useState("");
  const [receipt, setReceipt] = useState({
    name: "transfer-receipt.png",
    size: 1.2 * 1024 * 1024,
    src: null,
  });
  const [receiptError, setReceiptError] = useState("");
  const [reference, setReference] = useState("");

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const total = subtotal + order.delivery;

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(""), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  useEffect(() => {
    return () => {
      if (receipt?.src) URL.revokeObjectURL(receipt.src);
    };
  }, [receipt]);

  const copyToClipboard = async (key, value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
    } catch {
      setCopied("");
    }
  };

  const openFilePicker = () => fileInput.current?.click();

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    if (!["image/png", "image/jpeg"].includes(file.type)) {
      setReceiptError("Please upload a PNG or JPG file.");
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      setReceiptError("Your file is larger than 10 MB.");
      return;
    }
    setReceiptError("");
    setReceipt({ name: file.name, size: file.size, src: URL.createObjectURL(file) });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!receipt) {
      setReceiptError("Upload your receipt before submitting.");
      return;
    }
    navigate("/confirm");
  };

  const transferRows = [
    { key: "recipient", label: "Recipient", value: order.recipient },
    {
      key: "number",
      label: "InstaPay transfer number",
      hint: "Demo transfer details",
      value: order.transferNumber,
      copy: order.transferNumber.replace(/\s/g, ""),
    },
    { key: "reference", label: "Order reference", value: order.number, copy: order.number },
  ];

  const renderCopyButton = (key, value) => (
    <button
      type="button"
      onClick={() => copyToClipboard(key, value)}
      className="shrink-0 inline-flex items-center gap-2 rounded border border-tertiary/40 px-3 py-1.5 text-xs hover:border-secondary hover:text-secondary transition-colors duration-300"
    >
      <i className={copied === key ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
      {copied === key ? "Copied" : "Copy"}
    </button>
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
          <NavLink to="/checkout" className="hover:text-secondary transition-colors duration-300">
            Checkout
          </NavLink>
          <span>/</span>
          <span className="font-bold text-tertiary">Payment</span>
        </nav>
        {/* end-breadcrumb */}

        {/* hero */}
        <div className="flex flex-col items-center text-center mt-4">
          <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl leading-tight">
            ONE{" "}
            <span className="relative inline-block">
              LAST
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
            STEP.
          </h1>
          <p className="mt-3 text-base sm:text-lg md:text-xl font-medium">
            Transfer with InstaPay. Send us your receipt.
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
                  {done && <i className="fa-solid fa-check text-[8px] sm:text-[10px]"></i>}
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

        <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
          {/* payment */}
          <form onSubmit={handleSubmit} noValidate className="lg:col-span-3">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm">
              <span>
                Order <span className="font-medium">#{order.number}</span>
              </span>
              <span className="rounded bg-primary px-2 py-1 text-[11px] sm:text-xs">
                Awaiting payment
              </span>
            </div>

            {/* transfer */}
            <section className="mt-5">
              <h2 className="text-lg sm:text-xl font-bold">
                <span className="text-secondary">01.</span> Transfer your total
              </h2>
              <p className="mt-1 text-xs sm:text-sm">
                Open InstaPay and transfer the exact total to the number above.
              </p>
              <div className="mt-3 rounded-lg border border-tertiary/30 px-3 sm:px-4">
                <div className="flex items-center gap-3 sm:gap-4 py-4 border-b border-tertiary/20">
                  <span className="w-24 xs:w-40 shrink-0 text-xs sm:text-sm">Total amount</span>
                  <span className="flex-1 text-2xl xs:text-3xl font-bold">{formatPrice(total)}</span>
                  {renderCopyButton("total", String(total))}
                </div>
                {transferRows.map((row) => (
                  <div
                    key={row.key}
                    className="flex items-center gap-3 sm:gap-4 py-4 border-b border-tertiary/20"
                  >
                    <span className="w-24 xs:w-40 shrink-0 text-xs sm:text-sm">
                      {row.label}
                      {row.hint && (
                        <span className="block text-[10px] sm:text-xs text-tertiary/60">
                          {row.hint}
                        </span>
                      )}
                    </span>
                    <span className="flex-1 text-sm sm:text-base font-semibold">{row.value}</span>
                    {row.copy && renderCopyButton(row.key, row.copy)}
                  </div>
                ))}
                <p className="py-3 text-xs text-tertiary/70">
                  Add your order number as a note if available.
                </p>
              </div>
            </section>
            {/* end-transfer */}

            {/* receipt */}
            <section className="mt-6">
              <h2 className="text-lg sm:text-xl font-bold">
                <span className="text-secondary">02.</span> Upload your receipt
              </h2>
              <p className="mt-1 text-xs sm:text-sm">
                Include the amount, recipient and transaction reference.
              </p>
              <input
                ref={fileInput}
                type="file"
                accept="image/png, image/jpeg"
                onChange={handleFileChange}
                className="hidden"
              />
              {receipt ? (
                <div className="mt-3 flex items-center gap-3 sm:gap-4 rounded-lg border-2 border-dashed border-tertiary/30 p-3">
                  <div className="shrink-0 flex items-center justify-center w-20 h-24 sm:w-24 sm:h-28 rounded-md bg-[#efe6dc] p-2">
                    {receipt.src ? (
                      <img
                        src={receipt.src}
                        alt="Your receipt"
                        className="w-full h-full object-cover rounded"
                      />
                    ) : (
                      <div className="w-14 h-20 sm:w-16 sm:h-24 bg-white rounded-sm shadow px-2 py-2 flex flex-col gap-1.5">
                        <span className="text-[7px] sm:text-[8px] font-bold text-tertiary/60 text-center">
                          SAMPLE
                        </span>
                        <span className="h-px bg-tertiary/20"></span>
                        {[100, 80, 90, 60, 85, 70].map((width, index) => (
                          <span
                            key={index}
                            className="h-0.5 rounded bg-tertiary/20"
                            style={{ width: `${width}%` }}
                          ></span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold truncate">{receipt.name}</p>
                    <p className="mt-1 text-xs text-tertiary/70">{formatFileSize(receipt.size)}</p>
                    <p className="mt-2 flex items-center gap-2 text-xs text-green-700">
                      <span className="w-2.5 h-2.5 rounded-full bg-green-600"></span>
                      Ready to submit
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-xs">
                      <button
                        type="button"
                        onClick={openFilePicker}
                        className="underline hover:text-secondary transition-colors duration-300"
                      >
                        Replace
                      </button>
                      <span className="text-tertiary/50">/</span>
                      <button
                        type="button"
                        onClick={() => setReceipt(null)}
                        className="underline hover:text-secondary transition-colors duration-300"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={openFilePicker}
                  className="mt-3 w-full flex flex-col items-center gap-2 rounded-lg border-2 border-dashed border-tertiary/30 px-3 py-8 hover:border-secondary transition-colors duration-300"
                >
                  <i className="fa-solid fa-arrow-up-from-bracket text-xl"></i>
                  <span className="text-sm font-semibold">Upload your receipt</span>
                </button>
              )}
              <p className="mt-2 text-[11px] sm:text-xs text-tertiary/70">PNG or JPG · Max 10 MB</p>
              {receiptError && <p className="mt-1 text-xs text-red-600">{receiptError}</p>}

              <label htmlFor="reference" className="block mt-5 mb-1 text-xs sm:text-sm">
                Transaction reference (optional)
              </label>
              <input
                id="reference"
                type="text"
                value={reference}
                onChange={(event) => setReference(event.target.value)}
                placeholder="Enter the reference from your receipt"
                className="w-full rounded-md border border-tertiary/30 bg-quaternary px-3 py-2 text-sm placeholder:text-tertiary/40 focus:outline-none focus:border-secondary transition-colors duration-300"
              />

              <button
                type="submit"
                className="mt-5 w-full flex items-center justify-center gap-2 text-quaternary bg-secondary text-sm xs:text-base px-4 py-3 rounded-md border border-secondary hover:bg-transparent hover:text-tertiary hover:border-tertiary transition-all duration-300 ease-in-out"
              >
                <span className="font-semibold">Submit receipt for review</span>
                <i className="fa-solid fa-arrow-right-long"></i>
              </button>
              <p className="mt-2 text-center text-xs text-tertiary/70">
                Uploading a receipt does not confirm your order.
              </p>
            </section>
            {/* end-receipt */}

            <NavLink
              to="/checkout"
              className="mt-6 hidden lg:inline-flex items-center gap-2 text-sm hover:gap-3 transition-all duration-300 ease-in-out"
            >
              <i className="fa-solid fa-arrow-left-long"></i>
              <span className="underline">Back to checkout</span>
            </NavLink>
          </form>
          {/* end-payment */}

          {/* summary */}
          <aside className="lg:col-span-2 lg:self-start rounded-lg border border-tertiary/30 p-4 sm:p-5">
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
                <li key={item.id} className="flex gap-3 sm:gap-4 py-3 border-b border-tertiary/20">
                  <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-md bg-[#efe6dc] p-2">
                    <img src={product} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <p className="text-sm sm:text-base font-semibold">{item.name}</p>
                    <p className="mt-1 text-xs text-tertiary/70">
                      {item.color} / {item.size}
                    </p>
                    <p className="text-xs text-tertiary/70">Qty: {item.qty}</p>
                    <p className="mt-auto self-end text-sm">{formatPrice(item.price * item.qty)}</p>
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
                <span>{formatPrice(order.delivery)}</span>
              </div>
            </div>
            <div className="flex justify-between items-center py-4">
              <span className="text-base sm:text-lg font-bold">Total</span>
              <span className="text-base sm:text-lg font-bold">{formatPrice(total)}</span>
            </div>
            <div className="rounded-md bg-primary px-4 py-4">
              <p className="flex items-center gap-2 text-sm sm:text-base font-bold">
                <i className="fa-solid fa-circle-dot text-xs"></i>
                What happens next?
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Our team checks the payment. Once verified, we&apos;ll email your order
                confirmation.
              </p>
            </div>
            <p className="mt-4 flex items-center gap-2 text-xs sm:text-sm">
              <i className="fa-regular fa-comment"></i>
              Need help?
              <NavLink
                to="/contact"
                className="underline hover:text-secondary transition-colors duration-300"
              >
                Contact us
              </NavLink>
            </p>
          </aside>
          {/* end-summary */}

          <NavLink
            to="/checkout"
            className="lg:hidden inline-flex items-center gap-2 text-sm w-fit hover:gap-3 transition-all duration-300 ease-in-out"
          >
            <i className="fa-solid fa-arrow-left-long"></i>
            <span className="underline">Back to checkout</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Instapay;
