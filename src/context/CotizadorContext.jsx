import { createContext, useState } from "react";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
  const [marca, setMarca] = useState("");
  const [year, setYear] = useState(0);
  const [plan, setPlan] = useState("");
  return (
    <CotizadorContext.Provider value={{ setMarca, setYear, setPlan }}>
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProvider };
export default CotizadorContext;
