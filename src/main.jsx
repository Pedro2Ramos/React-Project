import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { ThemeProvider, useTheme } from "./components/ThemeContext";

const Main = () => {
  const { darkMode } = useTheme();

  React.useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  return <App />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <Main />
  </ThemeProvider>
);
