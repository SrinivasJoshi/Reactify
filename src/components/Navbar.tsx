import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center p-4 bg-primary sticky">
      <a href="/">
        <img src="/images/logo.png" alt="Logo" className="w-44" />
      </a>
      <ConnectButton showBalance={false} />
    </nav>
  );
}
