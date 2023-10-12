import useCotizadorContext from "../hooks/useCotizadorContext";
import Formulario from "./formulario";
import Resumen from "./Resumen";
import Spinner from "./Spinner";

export default function AppSeguro() {
  const { cotizado } = useCotizadorContext();
  return (
    <>
      <header className="mx-auto my-10 text-4xl text-white font-bold w-full text-center">
        <h1>Cotizador de seguros automoviles</h1>
      </header>
      <main className="mx-auto bg-slate-200 max-w-6xl p-3 shadow rounded-lg">
        <Formulario />
        {cotizado ? <Spinner /> : <Resumen />}
      </main>
    </>
  );
}
