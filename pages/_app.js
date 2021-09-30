import { PopupContextProvider } from "../context/ModalContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <PopupContextProvider>
      <Component {...pageProps} />
    </PopupContextProvider>
  );
}

export default MyApp;
