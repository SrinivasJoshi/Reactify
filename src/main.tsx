import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Routing imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Wallet imports
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  midnightTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import Layout from "./components/Layout";

// Walet Config
const { chains, publicClient } = configureChains(
  // TODO CHANGE TO REQUIRED NETWORK(OPTIONAL)
  [sepolia],
  [publicProvider()],
);

const { connectors } = getDefaultWallets({
  // TODO : ADD YOUR PROJECT ID AND APP NAME FROM CONNECT-WALLET
  appName: "YOUR_PROJECT_NAME",
  projectId: "YOUR_PROJECT_ID",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

// Routing Config - ADD OTHER ROUTES HERE
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <WagmiConfig config={wagmiConfig}>
    <RainbowKitProvider
      chains={chains}
      modalSize="compact"
      theme={midnightTheme({
        //TODO: CHANGE COLOR BELOW(OPTIONAL)
        accentColor: "#E01A4F",
        accentColorForeground: "#0C090D",
        borderRadius: "small",
        fontStack: "system",
        overlayBlur: "small",
      })}
    >
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </RainbowKitProvider>
  </WagmiConfig>,
);
