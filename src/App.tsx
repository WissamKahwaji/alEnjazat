import { Outlet, useLocation } from "react-router-dom";

import { useEffect } from "react";
import Navbar from "./layout/header";
import BackToTopButton from "./components/ui/BackToTopButton";
import WhatsAppButton from "./components/ui/WhatsAppButton";
import Footer from "./layout/footer";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-seconBackground">
      <Navbar />

      <main className="mt-[79px] md:mt-[110px] lg:mt-[91px] xl:mt-[91px]">
        <Outlet />
        <WhatsAppButton number={"+971508889477"} />
        <BackToTopButton />
      </main>

      <Footer />
    </div>
  );
}

export default App;
