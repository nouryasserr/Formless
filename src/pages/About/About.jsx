import { NavLink } from "react-router-dom";
import justYou from "../../assets/just-you.png";
import behindFormless from "../../assets/behind-formless.png";
import create from "../../assets/create.png";

const hoodieIcon = (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="w-9 h-9"
  >
    <path
      d="M18 8c0 4 2.7 7 6 7s6-3 6-7M18 8l-8 4-6 18 6 2 3-9v19h22V23l3 9 6-2-6-18-8-4M18 8c1-2 3.5-3 6-3s5 1 6 3M17 34h14v6H17z"
      stroke="#43302e"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const values = [
  {
    title: "Everyday comfort",
    text: "Easy layers for wherever your day takes you.",
    icon: hoodieIcon,
  },
  {
    title: "Your own expression",
    text: "Keep it clean or make your artwork part of it.",
    icon: <i className="fa-solid fa-pencil text-3xl"></i>,
  },
  {
    title: "A human touch",
    text: "Custom designs are reviewed before payment.",
    icon: <i className="fa-regular fa-heart text-3xl"></i>,
  },
];

const steps = [
  { number: "01", title: "Bring your artwork", text: "Upload your design or artwork." },
  {
    number: "02",
    title: "We review your design",
    text: "Our team checks it to make sure it's good to go.",
  },
  {
    number: "03",
    title: "Pay after approval",
    text: "Complete your order after your design is approved.",
  },
];

const displayHeading = "font-['Caveat_Brush'] text-tertiary leading-[0.95]";

const renderUnderline = (className = "") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 260 30"
    fill="none"
    aria-hidden="true"
    className={`absolute left-0 -bottom-2 sm:-bottom-3 w-full h-auto text-secondary ${className}`}
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

const tornEdge = (flip) => (
  <svg
    viewBox="0 0 1200 24"
    preserveAspectRatio="none"
    aria-hidden="true"
    className={`block w-full h-3 sm:h-5 text-primary ${flip ? "rotate-180" : ""}`}
  >
    <path
      d="M0 24 L0 14 L38 9 L70 15 L112 6 L150 12 L196 4 L238 13 L280 8 L330 16 L372 7 L418 12 L460 3 L508 11 L552 6 L600 14 L646 8 L690 15 L736 5 L780 12 L826 7 L870 16 L916 6 L960 13 L1006 4 L1050 11 L1096 7 L1140 14 L1200 8 L1200 24 Z"
      fill="currentColor"
    />
  </svg>
);

function About() {
  return (
    <div className="bg-quaternary overflow-hidden">
      <div className="px-2 xs:px-4 sm:px-10 md:px-16 py-4 sm:py-6">
        {/* breadcrumb */}
        <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-tertiary/70">
          <NavLink to="/" className="hover:text-secondary transition-colors duration-300">
            Home
          </NavLink>
          <span>/</span>
          <span className="text-tertiary">Our Story</span>
        </nav>
        {/* end-breadcrumb */}

        {/* hero */}
        <section className="mt-4 grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-8">
          <div className="text-center md:text-left">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wide text-secondary">
              Our story
            </p>
            <h1 className="mt-2 text-5xl xs:text-6xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.95]">
              <span className="block">NO FIXED FORM.</span>
              <span className="block">JUST</span>
              <span className="relative inline-block">
                YOU.
                {renderUnderline()}
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg md:text-xl">
              For the days you keep it simple.
              <span className="block">And the days you make a statement.</span>
            </p>
            <p className="mt-4 text-sm sm:text-base text-tertiary/80 max-w-md mx-auto md:mx-0">
              Formless is a space for everyday comfort and personal expression. A hoodie can be a
              favourite. A blank canvas. A little more you.
            </p>
          </div>
          <img
            src={justYou}
            alt="Two friends in Formless hoodies laughing over a sketchbook. Different looks good on you."
            className="block w-full max-w-xl mx-auto h-auto"
          />
        </section>
        {/* end-hero */}

        {/* idea */}
        <section className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10">
          <img
            src={behindFormless}
            alt="Hands sketching faces in a notebook next to a cream hoodie"
            className="order-2 md:order-1 block w-full h-auto rounded-sm shadow-md"
          />
          <div className="order-1 md:order-2 text-center md:text-left">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wide text-secondary">
              The idea behind Formless
            </p>
            <h2 className={`${displayHeading} mt-2 text-4xl xs:text-5xl lg:text-6xl`}>
              <span className="block">A LITTLE LESS</span>
              ORDINARY.
            </h2>
            <svg
              viewBox="0 0 120 16"
              fill="none"
              aria-hidden="true"
              className="mt-2 w-20 sm:w-24 h-auto text-secondary mx-auto md:mx-0"
            >
              <path
                d="M3 10 C12 2 20 2 26 9 S40 16 48 8 S64 1 72 9 S88 16 96 8 S110 2 117 8"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            <p className="mt-4 text-sm sm:text-base">
              You do not have to fit one look, one mood, or one version of yourself.
            </p>
            <p className="mt-3 text-sm sm:text-base">
              We bring together easy everyday hoodies and room for your ideas. Wear it as it is,
              or bring your artwork and make it personal.
            </p>
          </div>
        </section>
        {/* end-idea */}
      </div>

      {/* values */}
      <section className="mt-6 sm:mt-10">
        {tornEdge(false)}
        <div className="bg-primary px-2 xs:px-4 sm:px-10 md:px-16 py-8 sm:py-10">
          <h2 className={`${displayHeading} text-center text-4xl xs:text-5xl lg:text-6xl`}>
            ROOM TO BE YOURSELF.
          </h2>
          <ul className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-tertiary/30 max-w-5xl mx-auto">
            {values.map((value) => (
              <li
                key={value.title}
                className="flex flex-col items-center text-center gap-2 py-5 sm:py-2 px-4 md:px-8"
              >
                <span className="h-10 flex items-center">{value.icon}</span>
                <p className="mt-1 text-base sm:text-lg font-semibold">{value.title}</p>
                <p className="text-xs sm:text-sm max-w-[14rem]">{value.text}</p>
              </li>
            ))}
          </ul>
        </div>
        {tornEdge(true)}
      </section>
      {/* end-values */}

      <div className="px-2 xs:px-4 sm:px-10 md:px-16">
        {/* steps */}
        <section className="py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-[2fr_3fr] items-center gap-8 lg:gap-10">
          <div className="text-center lg:text-left">
            <h2 className={`${displayHeading} text-4xl xs:text-5xl lg:text-6xl`}>
              <span className="block">FROM YOUR IDEA</span>
              TO YOUR{" "}
              <span className="relative inline-block">
                HOODIE
                {renderUnderline()}
              </span>
              .
            </h2>
            <p className="mt-5 text-sm sm:text-base">A little imagination. A few simple steps.</p>
          </div>
          <div>
            <ol className="grid grid-cols-1 xs:grid-cols-3 gap-6 xs:gap-4 sm:gap-6">
              {steps.map((step) => (
                <li
                  key={step.number}
                  className="flex xs:flex-col items-start gap-3 xs:gap-0"
                >
                  <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-sm font-bold">
                    {step.number}
                  </span>
                  <div>
                    <p className="xs:mt-3 text-sm sm:text-base font-semibold">{step.title}</p>
                    <p className="mt-1 text-xs sm:text-sm text-tertiary/70">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-6 pt-3 border-t border-tertiary/20 text-xs text-tertiary/70 text-center lg:text-left">
              Your design is reviewed first. Payment is verified separately before your order is
              confirmed.
            </p>
          </div>
        </section>
        {/* end-steps */}
      </div>

      {/* cta */}
      <section className="border-t border-tertiary/10 bg-[#f7efe3]">
        <div className="px-2 xs:px-4 sm:px-10 md:px-16 py-8 sm:py-10 grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-8">
          <div className="text-center md:text-left">
            <h2 className={`${displayHeading} text-4xl xs:text-5xl lg:text-6xl`}>
              <span className="block">YOUR NEXT CHAPTER.</span>
              YOUR NEXT{" "}
              <span className="relative inline-block">
                FAVOURITE
                {renderUnderline()}
              </span>
              .
            </h2>
            <p className="mt-6 text-sm sm:text-base max-w-sm mx-auto md:mx-0">
              Find your everyday form, or create something that feels like you.
            </p>
            <div className="mt-6 flex flex-col xs:flex-row items-center justify-center md:justify-start gap-4 xs:gap-8">
              <NavLink
                to="/products"
                className="w-full xs:w-auto flex items-center justify-center gap-2 text-quaternary bg-secondary text-sm xs:text-base px-8 py-3 rounded-md border border-secondary hover:bg-transparent hover:text-tertiary hover:border-tertiary transition-all duration-300 ease-in-out"
              >
                <span className="font-semibold">Shop hoodies</span>
                <i className="fa-solid fa-arrow-right-long"></i>
              </NavLink>
              <NavLink
                to="/customize"
                className="relative inline-flex items-center gap-2 pb-1 text-sm sm:text-base font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-tertiary after:content-[''] hover:gap-3 hover:after:bg-secondary transition-all duration-300 ease-in-out"
              >
                Customize yours
                <i className="fa-solid fa-arrow-right-long"></i>
              </NavLink>
            </div>
          </div>
          <img
            src={create}
            alt="A folded cream hoodie beside a sketchbook with a hand-drawn face"
            className="block w-full max-w-lg mx-auto md:max-w-none h-auto"
          />
        </div>
      </section>
      {/* end-cta */}
    </div>
  );
}

export default About;
