import { Routes, Route } from "react-router-dom";
import { About } from "./About/About";
import Homepage from "./Homepage/Homepage";
import Header from "./Header/Header";
import ItemPage from "./ItemList/ItemPage";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/:id" element={<ItemPage />} />
      </Routes>
    </>
  );
}

export default App;
