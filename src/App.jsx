import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MenuContextProvider } from "./contexts/MenuContext";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Homepage from "./pages/Homepage";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <MenuContextProvider>
        <Navbar />
        <Sidebar />
      </MenuContextProvider>

      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
