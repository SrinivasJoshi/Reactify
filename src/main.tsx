import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Routing imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Wallet imports
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

// Walet Config
const { chains, publicClient } = configureChains(
  // CHANGE TO REQUIRED NETWORK(OPTIONAL)
  [sepolia],
  [publicProvider()],
);

const { connectors } = getDefaultWallets({
  // ADD YOUR PROJECT ID AND APP NAME FROM CONNECT-WALLET
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

// Routing Config
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: "/lobby",
  //   element: <Lobby />,
  // },
  // {
  //   path: "/room/:roomId",
  //   element: <Room />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <WagmiConfig config={wagmiConfig}>
    <RainbowKitProvider chains={chains}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </RainbowKitProvider>
  </WagmiConfig>,
);
