import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { ThemeProvider, useTheme } from "./components/ThemeContext";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCUReMVv-PmstHY6I_-A3YHaC4FOI2BQPo",
  authDomain: "pedro-dos-ramos-react.firebaseapp.com",
  projectId: "pedro-dos-ramos-react",
  storageBucket: "pedro-dos-ramos-react.appspot.com",
  messagingSenderId: "207125785665",
  appId: "1:207125785665:web:e12e3b29becb73f3a7eac0",
};

initializeApp(firebaseConfig);

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
