import { useContext } from "react";
import CotizadorContext from "../context/CotizadorContext";

export default function useCotizadorContext() {
  return useContext(CotizadorContext);
}
