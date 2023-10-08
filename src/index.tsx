import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import AuthProvider from "./containers/auth";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store/store";
import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./themes/darkTheme/theme";
import { CssBaseline, createTheme } from "@mui/material";
import WebFontLoader from "webfontloader";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = createTheme(darkTheme);

//fonts
WebFontLoader.load({ 
  google: { 
    families: ['Muli:300,400,500,600,700,800,900', 'Material Icons'], 
  }, 
});

//provider store permet a toute l'app d'acceder aux states / slices du store
root.render(
  <Provider store={store}>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </AuthProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
