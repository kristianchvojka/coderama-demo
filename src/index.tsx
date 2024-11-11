import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/styles/Global.styles";

const theme = {
  colors: {
    surface: "rgb(255, 255, 255)",
    surface1: "rgba(255, 255, 255, 0.38)",
    "on-secondary": "rgba(255, 255, 255, 0.6)",
    "on-surface3": "rgba(18, 18, 18, 0.14)",
    background: "rgba(18, 18, 18, 0.05)",
    subtitle: "rgba(18, 18, 18, 0.6)",
    error: "rgba(206, 47, 39, 0.87)",
    "on-surface4": "rgba(18, 18, 18, 0.02)",
    icon: "rgb(113, 113, 113)",
    "on-surface5": "rgba(18, 18, 18, 0.08)",
    "on-surface6": "rgba(18, 18, 18, 0.04)",
    accent1: "rgb(15, 137, 61)",
    secondary: "rgba(18, 18, 18, 0.87)",
    "on-surface2": "rgba(18, 18, 18, 0.16)",
    "on-primary": "rgba(255, 255, 255, 0.87)",
    "secondary-variant": "rgba(18, 18, 18, 0.38)",
    surface2: "rgba(255, 255, 255, 0.18)",
    "cherry-red": "rgb(232, 11, 38)",
    "on-surface": "rgb(18, 18, 18)",
    "display-black": "rgb(18, 18, 18)",
    primary2: "rgba(0, 122, 255, 0.14)",
  },
  spacing: {
    "spacing-xs4": "0.125rem",
    "spacing-xs3": "0.25rem",
    "spacing-xxs": "0.375rem",
    "spacing-xs": "0.5rem",
    "spacing-s": "0.625rem",
    "spacing-m": "0.75rem",
    "spacing-l": "0.875rem",
    "spacing-xl": "1rem",
    "spacing-xxl": "1.125rem",
    "spacing-xl3": "1.25rem",
    "spacing-xl4": "1.375rem",
    "spacing-xl5": "1.5rem",
    "spacing-xl6": "1.625rem",
    "spacing-xl7": "1.75rem",
    "spacing-xl8": "1.875rem",
    "spacing-xl9": "2rem",
    "spacing-xl10": "2.125rem",
    "spacing-xl11": "2.25rem",
    "spacing-xl12": "2.375rem",
    "spacing-xl13": "2.5rem",
    "spacing-xl14": "2.625rem",
    "spacing-xl15": "2.75rem",
    "spacing-xl16": "2.875rem",
    "spacing-xl17": "3rem",
    "spacing-xl18": "3.125rem",
    "spacing-xl19": "3.25rem",
    "radius-xs": "0.3125rem",
    "radius-m": "0.75rem",
    "radius-l": "1rem",
    "radius-s": "0.5rem",
  },
};

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>,
);
