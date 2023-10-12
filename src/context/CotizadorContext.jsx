import { createContext, useState } from "react";
import { formatearDinero } from "../helpers";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });
  const [precioFinal, setPrecioFinal] = useState(0);
  const [cotizado, setCotizado] = useState(false);

  function handleChangeDatos(e) {
    setDatos({ ...datos, [e.target.name]: Number(e.target.value) });
  }

  function cotizarSeguro() {
    const precioBase = 2000;
    let precioFinal = precioBase;
    const yearDiff = new Date().getFullYear() - Number(datos.year);

    //Calculamos la depreciacion por año
    precioFinal = precioFinal - yearDiff * (precioBase * 0.03);

    //Calculamos el aumento segun la marca
    if (datos.marca === 1) {
      precioFinal *= 1.3;
    } else if (datos.marca === 2) {
      precioFinal *= 1.15;
    } else {
      precioFinal *= 1.05;
    }

    //Calculamos el aumento segun el plan
    if (datos.plan === 1) {
      precioFinal *= 1.2;
    } else {
      precioFinal *= 1.3;
    }

    //State para saber que se cotizo el seguro -- Spinner
    setCotizado(true);
    setTimeout(() => {
      //Finalizado el calculo lo subimos al state
      setPrecioFinal(formatearDinero(precioFinal));
      setCotizado(false);
    }, 1000);
  }

  return (
    <CotizadorContext.Provider
      value={{ datos, handleChangeDatos, cotizarSeguro, precioFinal, cotizado }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProvider };
export default CotizadorContext;
