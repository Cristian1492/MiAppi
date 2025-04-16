import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Estadisticas from "./pages/Estadisticas";
import configuracion from "./pages/configuracion";
import Layout from "./components/Layout";

function AppRoutes () {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="estadisticas" element={<Estadisticas />} />
                    <Route path="configuracion" element={<configuracion />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default AppRoutes;