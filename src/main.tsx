import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ShopingCartProvider } from "./context/ShopingCartContext.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider>
      <ShopingCartProvider>
        <App />
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            duration: 2500,

            style: {
              borderRadius: "14px",
              background: "#1e293b",
              color: "#fff",
            },
          }}
        />
      </ShopingCartProvider>
    </ThemeProvider>
  </BrowserRouter>,
);
