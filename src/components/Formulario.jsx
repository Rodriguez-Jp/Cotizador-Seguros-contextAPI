import { MARCAS, YEARS, PLANES } from "../constants";
import { Fragment } from "react";
import useCotizadorContext from "../hooks/useCotizadorContext";

export default function Formulario() {
  const { setMarca, setYear, setPlan } = useCotizadorContext();
  return (
    <>
      <form className="p-5">
        <div className="flex flex-col">
          <label className="font-semibold uppercase text-lg">Marca</label>
          <select
            name="marca"
            id="marca"
            className="rounded-lg p-2 my-2 text-slate-600"
            onChange={(e) => setMarca(e.target.value)}
          >
            <option value="">Seleccione una marca</option>
            {MARCAS.map((marca) => (
              <option key={marca.id} value={marca.nombre}>
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col my-5">
          <label className="font-semibold uppercase text-lg">Año</label>
          <select
            name="year"
            id="year"
            className="rounded-lg p-2 my-2 text-slate-600"
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="">Seleccione el año</option>
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className=" my-5">
          <label className="font-semibold uppercase text-lg">
            Tipo de plan
          </label>
          <div className="flex gap-3">
            {PLANES.map((plan) => (
              <Fragment key={plan.id}>
                <label>{plan.nombre}</label>
                <input
                  type="radio"
                  name="plan"
                  id="plan"
                  value={plan.nombre}
                  onChange={() => setPlan(plan.nombre)}
                />
              </Fragment>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center">
          <input
            type="submit"
            value="Cotizar"
            className="bg-teal-600 text-white text-xl font-bold w-3/4  p-1 rounded-lg shadow cursor-pointer hover:bg-teal-700 transition-colors"
          />
        </div>
      </form>
    </>
  );
}
