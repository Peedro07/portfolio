import React, { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import AllRoutes from "./router/AllRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedCursor from "react-animated-cursor";
import { ToastContainer } from "react-toastify";
import ReactGA from 'react-ga';

ReactGA.initialize('G-XWMVRXF36H');

const App = () => {
  // this for animation
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="251, 251, 251"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      />
      <ScrollToTop />
      <AllRoutes />
      {/* End contact */}
      <ToastContainer />
      {/* Same as */}
    </>
  );
};

export default App;
