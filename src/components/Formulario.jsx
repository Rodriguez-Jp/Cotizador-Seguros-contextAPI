import { MARCAS, YEARS, PLANES } from "../constants";
import toast from "react-hot-toast";
import { Fragment } from "react";
import useCotizadorContext from "../hooks/useCotizadorContext";

export default function Formulario() {
  const { datos, handleChangeDatos, cotizarSeguro } = useCotizadorContext();

  function enviarFormulario(e) {
    e.preventDefault();

    //Valida los campos y en caso de que alguno este vacio envia el Toast
    const isEmpty = Object.values(datos).some(
      (value) => value === "" || value === null
    );

    if (isEmpty) {
      toast.error("Todos los campos son obligatorios");
      return;
    }

    //En caso de pasar la validacion, cotizamos el seguro
    cotizarSeguro();
  }
  return (
    <>
      <form className="p-5" onSubmit={enviarFormulario}>
        <div className="flex flex-col">
          <label className="font-semibold uppercase text-lg">Marca</label>
          <select
            name="marca"
            id="marca"
            className="rounded-lg p-2 my-2 text-slate-600"
            onChange={(e) => handleChangeDatos(e)}
            value={datos.marca}
          >
            <option value="">Seleccione una marca</option>
            {MARCAS.map((marca) => (
              <option key={marca.id} value={marca.id}>
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
            onChange={(e) => handleChangeDatos(e)}
            value={datos.year}
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
                  value={plan.id}
                  onChange={(e) => handleChangeDatos(e)}
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
