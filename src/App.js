import "./App.css";
import { Header } from "./components/header/Header";
import { Transactions } from "./components/transactions/Transactions";
import { UserDetails } from "./components/userDetails/index/UserDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <UserDetails />
      <Transactions />
    </div>
  );
}

export default App;
