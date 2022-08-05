import { Routes, Route } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";

import "./App.css";

const App = () => (
  <Routes>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/" component={Home} />
    <Route exact path="/products" component={Products} />
    <Route exact path="/cart" component={Cart} />
    <Route component={NotFound} />
  </Routes>
);

export default App;
