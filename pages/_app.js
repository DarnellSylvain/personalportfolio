import { PopupContextProvider } from "../context/ModalContext";
import { ThemeContextProvider } from "../context/ThemeContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <PopupContextProvider>
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </PopupContextProvider>
  );
}

export default MyApp;
