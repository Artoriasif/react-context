import "./App.css";
import CustomerForm from "./components/CustomerForm";
import Hello from "./components/Hello";
import { CustomerProvider } from "./context/customer";

function App() {
  return (
    <div className="App">
      <CustomerProvider>
        <CustomerForm />
        <Hello />
      </CustomerProvider>
    </div>
  );
}

export default App;
