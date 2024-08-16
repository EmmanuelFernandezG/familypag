import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./Componentes/HeaderComponent";
import CuerpoComponent from "./Componentes/CuerpoComponent";
import ContenidoComponent from "./Componentes/ContenidoComponent";
import FooterComponent from "./Componentes/FooterComponent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <ContenidoComponent />
        <CuerpoComponent />
        <div className="container">
          <Routes>
            <Route exact path="/Cuernos" element={<CuerpoComponent />}></Route>
            <Route exact path="/tienda" element={<CuerpoComponent />}></Route>
            <Route exact path="/galeria" element={<CuerpoComponent />}></Route>
            <Route exact path="/informes" element={<CuerpoComponent />}></Route>
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
