import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Entrar from "./pages/Entrar";
import Cadastro from "./pages/Cadastro";
import Principal from "./pages/Principal";

function App() {
  return (
    <Routes>
      {/* Rota 1: Tela de Boas-vindas/Saudação (Primeira tela do site) */}
      <Route path="/" element={<Index />} />

      {/* Rota 2: Tela de Entrar (Login) */}
      <Route path="/entrar" element={<Entrar />} />

      {/* Rota 3: Tela de Cadastro */}
      <Route path="/cadastro" element={<Cadastro />} />

      {/* Rota 4: Página Principal (Landing Page) */}
      <Route path="/principal" element={<Principal />} />
    </Routes>
  );
}

export default App;
