import "./App.css";
import { Header } from "./components/header/Header";
import { UserDetails } from "./components/userDetails/index/UserDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <UserDetails />
    </div>
  );
}

export default App;
