import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="grid grid-cols-1 gap-y-0 min-h-screen">
      <Navbar className="sticky top-0 z-50" />
      <div className="flex-grow top-0">
        <Home />
      </div>
      <Footer className="mt-auto" />
    </div>
  );
}
export default App;
