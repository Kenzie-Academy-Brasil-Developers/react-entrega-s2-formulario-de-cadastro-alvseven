import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

import Header from "../components/Header";
import UserInfo from "../components/UserInfo";
import Techs from "../components/TechsContainer";

export default function Dashboard() {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <h1>Carregando...</h1>;
  }

  return user ? (
    <>
      <Header />
      <UserInfo />
      <Techs />
    </>
  ) : (
    <Navigate to="/" replace />
  );
}
