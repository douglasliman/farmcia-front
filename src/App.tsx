import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import GetAllCategorias from "./pages/getAll/GetAllCategorias";
import PostCategoria from "./pages/post/Post";
import PutCategoria from "./pages/put/PutCategorias";
import DeleteCategoria from "./pages/delete/DeleteCategoria";

function App() {
  return (
    <Router>
      <div className="grid grid-cols-1 gap-y-0 min-h-screen">
        <Navbar className="sticky top-0 z-50" onChangePage={() => {}} />
        <div className="flex-grow top-0 h-">
          <Routes>
            {" "}
            <Route path="/" element={<Home />} />{" "}
            <Route path="/getAll" element={<GetAllCategorias />} />
            <Route path="/post" element={<PostCategoria />} />
            <Route path="/put" element={<PutCategoria />} />
            <Route path="/delete" element={<DeleteCategoria />} />
          </Routes>
        </div>
        <Footer className="mt-auto" />
      </div>
    </Router>
  );
}

export default App;
