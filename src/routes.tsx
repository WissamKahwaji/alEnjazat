import { Suspense } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import Home from "./pages/home";
import ContactUs from "./pages/contact-us/ContactUs";
import AboutUs from "./pages/about-us";
import PropertyPage from "./pages/property-page/PropertyPage";
import PropertyDetailsPage from "./pages/property-page/PropertyDetailsPage";

const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="properties" element={<PropertyPage />} />
        <Route
          path={"property-details/:id"}
          element={<PropertyDetailsPage />}
        />

        <Route path="about-us" element={<AboutUs />} />
        <Route path="contacts" element={<ContactUs />} />
      </Route>
    )
  );
  return (
    <Suspense fallback={<div>Loading......</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Routes;
