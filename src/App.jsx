import Layout from "./components/Layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./pages/Products/Products.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";
import Confirm from "./pages/Confirm/Confirm.jsx";
import Customize from "./pages/Customize/Customize.jsx";
import Instapay from "./pages/Instapay/Instapay.jsx";
import Signin from "./pages/Signin/Signin.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Productdetails from "./pages/Prdouctdetails/Productdetails.jsx";
import About from "./pages/About/About.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "cart", element: <Cart /> },
        { path: "checkout", element: <Checkout /> },
        { path: "confirm", element: <Confirm /> },
        { path: "customize", element: <Customize /> },
        { path: "payment", element: <Instapay /> },
        { path: "signin", element: <Signin /> },
        { path: "signup", element: <Signup /> },
        { path: "account", element: <Profile /> },
        { path: "profile", element: <Profile /> },
        { path: "products", element: <Products /> },
        { path: "productdetails", element: <Productdetails /> },
        { path: "story", element: <About /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
