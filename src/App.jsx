import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";

function App() {
  return (
    <>
      <Navbar />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
