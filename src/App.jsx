import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Homepage from "./pages/Homepage";
import { MenuContextProvider } from "./contexts/MenuContext";

function App() {
  return (
    <BrowserRouter>
      <MenuContextProvider>
        <Navbar />
        <Sidebar />
      </MenuContextProvider>

      <Routes>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
