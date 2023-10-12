import { useMemo, useRef } from "react";
import useCotizadorContext from "../hooks/useCotizadorContext";
import { MARCAS, PLANES } from "../constants";

export default function Resumen() {
  const { datos, precioFinal } = useCotizadorContext();
  const { marca, year, plan } = datos;
  const yearRef = useRef(year);

  const [nombreMarca] = useMemo(
    () => MARCAS.filter((m) => m.id === Number(marca)),
    [precioFinal]
  );
  const [nombrePlan] = useMemo(
    () => PLANES.filter((m) => m.id === Number(plan)),
    [precioFinal]
  );

  if (precioFinal === 0) return;
  return (
    <>
      <div className="max-w-3xl p-3 mx-auto text-center bg-slate-400 text-slate-50 rounded-lg shadow-xl text-lg">
        <h1 className="text-4xl font-bold">Resumen</h1>
        <p className="mt-3">
          <span className="font-bold">Marca:</span> {nombreMarca.nombre}
        </p>
        <p className="mt-1">
          <span className="font-bold">Año:</span> {yearRef.current}
        </p>
        <p className="mt-1">
          <span className="font-bold">Plan:</span> {nombrePlan.nombre}
        </p>
        <h2 className="mt-3 font-bold text-2xl">Total:</h2>
        <p className="mt-1 font-bold text-4xl">{precioFinal}</p>
      </div>
    </>
  );
}
