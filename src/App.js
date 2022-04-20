// import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { About } from "./About/About";
import Homepage from "./Homepage/Homepage";
import Header from "./Header/Header";
function App() {


  // const loading = useSelector((state) => state.loading);
  // const modalData = useSelector((state) => state.modalData);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
