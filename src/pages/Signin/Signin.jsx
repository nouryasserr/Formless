import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import signin from "../../assets/signin.png";

const detailsSchema = Yup.object({
  email: Yup.string().email("Enter a valid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const codeSchema = Yup.object({
  code: Yup.string()
    .matches(/^\d{6}$/, "Enter the 6-digit code")
    .required("Enter the 6-digit code"),
});

const steps = ["Your details", "Email verification"];

const inputClass =
  "w-full rounded-md border border-tertiary/30 bg-quaternary px-3 py-2.5 text-sm placeholder:text-tertiary/40 focus:outline-none focus:border-secondary transition-colors duration-300";

const renderError = (name) => (
  <ErrorMessage name={name}>
    {(message) => <p className="mt-1 text-xs text-red-600">{message}</p>}
  </ErrorMessage>
);

function Signin() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [details, setDetails] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [resent, setResent] = useState(false);

  return (
    <div className="bg-quaternary">
      <div className="px-2 xs:px-4 sm:px-10 md:px-16 py-6 sm:py-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-16">
        {/* image */}
        <div className="w-full max-w-[14rem] xs:max-w-xs sm:max-w-sm md:max-w-none mx-auto">
          <img
            src={signin}
            alt="A woman in a brown Formless hoodie. Your ideas belong here."
            className="block w-full h-auto"
          />
        </div>
        {/* end-image */}

        {/* form */}
        <div className="w-full max-w-xl mx-auto md:mx-0">
          <h1 className="text-5xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-center md:text-left">
            <span className="relative inline-block">
              WELCOME
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 260 30"
                fill="none"
                aria-hidden="true"
                className="absolute left-[15%] -bottom-2 sm:-bottom-3 w-4/5 h-auto text-secondary"
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
            BACK.
          </h1>
          <p className="mt-3 text-base sm:text-lg md:text-xl text-center md:text-left">
            Your next favourite is waiting.
          </p>

          {/* steps */}
          <div className="mt-6">
            <div className="flex items-center">
              {steps.map((label, index) => (
                <div
                  key={label}
                  className={`flex items-center ${index < steps.length - 1 ? "flex-1" : ""}`}
                >
                  <span
                    className={`flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 ${
                      index < step
                        ? "bg-tertiary border-tertiary text-quaternary"
                        : index === step
                          ? "bg-secondary border-secondary"
                          : "bg-quaternary border-tertiary/60"
                    }`}
                  >
                    {index < step && <i className="fa-solid fa-check text-[8px] sm:text-[10px]"></i>}
                  </span>
                  {index < steps.length - 1 && (
                    <span
                      className={`flex-1 h-px ${step > index ? "bg-tertiary" : "bg-tertiary/40"}`}
                    ></span>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-2 flex justify-between text-xs sm:text-sm">
              {steps.map((label, index) => (
                <span key={label} className={index === step ? "" : "text-tertiary/60"}>
                  <span className={index === step ? "text-secondary" : ""}>0{index + 1}</span>{" "}
                  {label}
                </span>
              ))}
            </div>
          </div>
          {/* end-steps */}

          {step === 0 ? (
            <Formik
              initialValues={details}
              validationSchema={detailsSchema}
              onSubmit={(values) => {
                setDetails(values);
                setResent(false);
                setStep(1);
              }}
            >
              <Form noValidate className="mt-6 flex flex-col gap-4">
                <div>
                  <label htmlFor="email" className="block mb-1 text-xs sm:text-sm">
                    Email <span className="text-secondary">*</span>
                  </label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                  {renderError("email")}
                </div>
                <div>
                  <label htmlFor="password" className="block mb-1 text-xs sm:text-sm">
                    Password <span className="text-secondary">*</span>
                  </label>
                  <div className="relative">
                    <Field
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="••••••••••••••"
                      className={`${inputClass} pr-11`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((value) => !value)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      className="absolute right-3 top-1/2 -translate-y-1/2 hover:text-secondary transition-colors duration-300"
                    >
                      <i className={`fa-regular ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                    </button>
                  </div>
                  {renderError("password")}
                  <div className="mt-2 text-right">
                    <NavLink
                      to="/forgot-password"
                      className="text-xs sm:text-sm underline hover:text-secondary transition-colors duration-300"
                    >
                      Forgot password?
                    </NavLink>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 text-quaternary bg-secondary text-sm xs:text-base px-4 py-3 rounded-md border border-secondary hover:bg-transparent hover:text-tertiary hover:border-tertiary transition-all duration-300 ease-in-out"
                >
                  <span className="font-semibold">Continue</span>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </button>
                <p className="text-center text-xs text-tertiary/70">
                  Next, we&apos;ll email you a verification code to finish signing in.
                </p>
              </Form>
            </Formik>
          ) : (
            <Formik
              initialValues={{ code: "" }}
              validationSchema={codeSchema}
              onSubmit={() => navigate("/")}
            >
              <Form noValidate className="mt-6 flex flex-col gap-4">
                <p className="text-sm">
                  We sent a 6-digit code to{" "}
                  <span className="font-semibold">{details.email}</span>.
                </p>
                <div>
                  <label htmlFor="code" className="block mb-1 text-xs sm:text-sm">
                    Verification code <span className="text-secondary">*</span>
                  </label>
                  <Field
                    id="code"
                    name="code"
                    type="text"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    maxLength={6}
                    placeholder="000000"
                    className={`${inputClass} text-center text-lg tracking-[0.5em]`}
                  />
                  {renderError("code")}
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 text-quaternary bg-secondary text-sm xs:text-base px-4 py-3 rounded-md border border-secondary hover:bg-transparent hover:text-tertiary hover:border-tertiary transition-all duration-300 ease-in-out"
                >
                  <span className="font-semibold">Verify &amp; sign in</span>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </button>
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm">
                  <button
                    type="button"
                    onClick={() => setResent(true)}
                    className="underline hover:text-secondary transition-colors duration-300"
                  >
                    {resent ? "Code sent again" : "Resend code"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(0)}
                    className="underline hover:text-secondary transition-colors duration-300"
                  >
                    Use a different email
                  </button>
                </div>
              </Form>
            </Formik>
          )}

          <div className="mt-6 pt-5 border-t border-tertiary/20 text-center text-sm">
            New to Formless?{" "}
            <NavLink
              to="/signup"
              className="text-secondary underline hover:no-underline"
            >
              Create an account
            </NavLink>
          </div>

          <NavLink
            to="/products"
            className="mt-5 inline-flex items-center gap-2 text-sm hover:gap-3 transition-all duration-300 ease-in-out"
          >
            <i className="fa-solid fa-arrow-left-long"></i>
            <span className="underline">Back to shop</span>
          </NavLink>
        </div>
        {/* end-form */}
      </div>
    </div>
  );
}

export default Signin;
