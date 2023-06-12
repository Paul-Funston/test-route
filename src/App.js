import Header from "./components/Header";
import Footer from "./components/Footer";
import Documentation from "./pages/Documentation";
import Tutorials from "./pages/Tutorials";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header title="React"/>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/documentation" element={<Documentation />} />
          <Route exact path="/tutorials" element={<Tutorials />} />
          <Route exact path="/about" element={<AboutUs />} />

        </Routes>
        

      </main>
      <Footer />
      
    </>
  );
}

export default App;
