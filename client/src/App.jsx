import { EthProvider } from "./contexts/EthContext";
import Intro from "./components/Intro/";
import Setup from "./components/Setup";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <EthProvider>
         <button class="button-3">Connect wallet</button>
         <br />
         <br />
         <button class="button-3">Make transaction</button>
    </EthProvider>
  );
}

export default App;



