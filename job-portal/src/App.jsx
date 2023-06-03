import { useState } from "react";

import Navbar from "./component/Navbar";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main-wrapper min-h-screen w-screen text-center border rounded ">
        <main className=" max-w-screen-lg mx-auto ">
          <Navbar />
          <Home />
        </main>
      </div>
    </>
  );
}

export default App;
