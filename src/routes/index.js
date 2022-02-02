import { Switch, Route } from "react-router-dom";
import Products from "../components/Products";
import Login from "../pages/Login";
import CartPage from "../pages/CartPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Products />
      </Route>

      <Route path="/cartpage">
        <CartPage />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route>
        <h2>Página não encontrada</h2>
      </Route>
    </Switch>
  );
};

export default Routes;
