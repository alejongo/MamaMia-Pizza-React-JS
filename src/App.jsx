import "./App.css";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { NavbarMenu } from "./components/NavbarMenu";

function App() {
  return (
    <>
      <NavbarMenu />
      <Home />
      <Footer />
    </>
  );
}

export default App;
