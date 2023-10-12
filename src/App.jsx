import { Toaster } from "react-hot-toast";
import { CotizadorProvider } from "./context/CotizadorContext";
import AppSeguro from "./components/AppSeguro";

function App() {
  return (
    <>
      <CotizadorProvider>
        <AppSeguro />
      </CotizadorProvider>
      <Toaster />
    </>
  );
}

export default App;
