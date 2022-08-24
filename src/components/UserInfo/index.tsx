import { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserInfoContainer } from "./styles";
import { getUser } from "../../services/getUser";

export default function UserInfo() {
  const [userName, setUserName] = useState<string>("");
  const [userModule, setUserModule] = useState<string>("");

  useEffect(() => {
    const userId = localStorage.getItem("@kenzie-hub:userId");
    getUser(userId)
      .then((res) => {
        setUserName(res.name);
        setUserModule(res.course_module);
        toast.success(`Seja bem vindo(a)  ${res.name} =)`, {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: 4000,
        });
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <UserInfoContainer>
      <ToastContainer />
      <h3>Olá, {userName}, como vai você?</h3>
      <p>{userModule}</p>
    </UserInfoContainer>
  );
}
