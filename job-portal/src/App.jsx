import { useState } from "react";

import Navbar from "./layout/Navbar";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main-wrapper min-h-screen w-screen text-center border rounded ">
        <main className=" max-w-screen-2xl mx-auto ">
          <Navbar />
          <Home />
        </main>
      </div>
    </>
  );
}

export default App;
