import { AppBar, Toolbar, MenuItem } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "./styles.css";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

  return (
    <AppBar position="static">
      <Toolbar className="toolbar">
        <h2 onClick={() => sendTo("/cart")}>DogShop</h2>
        <div className="cartAndLogin">
          <MenuItem className="menuItem" onClick={() => sendTo("/")}>
            Início
          </MenuItem>

          <MenuItem className="menuItem" onClick={() => sendTo("/cartpage")}>
            <FaShoppingCart size={20} />{" "}
            <p className="cartWordFromMenu">Carrinho</p>
          </MenuItem>
          <MenuItem className="menuItem" onClick={() => sendTo("/login")}>
            Entrar
          </MenuItem>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
