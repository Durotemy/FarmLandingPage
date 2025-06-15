import "./App.css";
import Footer from "./components/Footer";
import { NavBar } from "./components/NavBar";
import HomePage from "./Pages";

function App() {
  return (
    <>
      <div className="overflow-y-scroll no-scrollbar">
        <NavBar />
        <HomePage />
        <Footer />
      </div>
    </>
  );
}

export default App;
