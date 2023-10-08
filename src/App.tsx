import { CartSlider, Footer, Header } from "./Components";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div id="App" className="bg-neutral-200 font-mono">
      <CartSlider />
      <Header />
      <main
        style={{
          minHeight: "100dvh",
          paddingInline: "1.5rem",
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
