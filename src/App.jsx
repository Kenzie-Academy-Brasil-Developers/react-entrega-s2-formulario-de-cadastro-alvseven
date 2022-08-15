import { ToastContainer } from "react-toastify";

import Routes from "./routes";
import Global from "./styles/global";

function App() {
  return (
    <>
      <Global />
      <Routes />
      <ToastContainer />
    </>
  );
}

export default App;
