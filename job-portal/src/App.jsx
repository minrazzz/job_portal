import { useState } from "react";

import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { Footer } from "./layout/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" dark:bg-[#111827]  main-wrapper min-h-screen w-screen text-center">
        <main className=" max-w-screen-xl mx-auto ">
          <Navbar />

          <Home />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
