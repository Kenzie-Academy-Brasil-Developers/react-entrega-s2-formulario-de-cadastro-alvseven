import { Link } from "react-router-dom";
import { HeaderContainer } from "./styles";

export default function Header() {
  const clearLocalStorage = () => {
    localStorage.removeItem("@kenzie-hub:token");
    localStorage.removeItem("@kenzie-hub:userId");
  };

  return (
    <header>
      <HeaderContainer>
        <img src="./logo.svg" alt="logo kenzie hub" />
        <Link to="/" onClick={() => clearLocalStorage()}>
          Sair
        </Link>
      </HeaderContainer>
    </header>
  );
}
