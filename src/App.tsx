import { ConnectButton } from "@rainbow-me/rainbowkit";
import "./App.css";
import Profile from "./components/profile/profile";
import Balance from "./components/balance/balance";

function App() {
  return (
    <div className="main">
      <h1>Hello Web3</h1>
      <ConnectButton />
      <Profile />
      <Balance />
    </div>
  );
}

export default App;
