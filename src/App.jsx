import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AddCard } from "./components/AddCard";
import AddNewCard from "./components/AddNewCard";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<AddCard />} />
          <Route path="/addNewCard" element={<AddNewCard />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
