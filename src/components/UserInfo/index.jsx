import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserInfoContainer } from "./styles";
import { useNavigate } from "react-router-dom";

export default function UserInfo() {
  const [userName, setUserName] = useState("");
  const [userModule, setUserModule] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("@kenzie-hub:token")) {
      navigate("/", { replace: true });
    }
  }, []);

  useEffect(() => {
    const userId = localStorage.getItem("@kenzie-hub:userId");
    api
      .get(`/users/${userId}`)
      .then((res) => {
        setUserName(res.data.name);
        setUserModule(res.data.course_module);
        toast.success(`Seja bem vindo(a)  ${res.data.name} =)`, {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: 4000,
        });
      })
      .catch((err) => {
        if (err) {
          toast.error("Ops, algo deu errado =(", {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 4000,
          });
        }
      });
  }, []);

  return (
    <UserInfoContainer>
      <ToastContainer />
      <h3>Olá, {userName}</h3>
      <p>{userModule}</p>
    </UserInfoContainer>
  );
}
