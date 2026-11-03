import Header from "../components/Header";
import Hero from "../components/Hero";
import Publico from "../components/Publico";
import Ideia from "../components/Ideia";
import Mudanca from "../components/Mudanca";
import Solucao from "../components/Solucao";
import Contato from "../components/Contato";
import Integrantes from "../components/Integrantes";
import Final from "../components/Final";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Principal() {
  const navigate = useNavigate();

  const user = localStorage.getItem("user");

  useEffect(() => {
    if (!user) {
      alert("Você não pode acessar essa página");
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <>
      <Header />

      <main>
        <Hero />
        <Publico />
        <Ideia />
        <Mudanca />
        <Solucao />
        <Contato />
        <Integrantes />
        <Final />
      </main>

      <Footer />
    </>
  );
}

export default Principal;
