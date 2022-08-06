import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

import { Container, FormContainer, Error } from "./styles";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { loginFormSchema } from "../../utils/schema";
import { api } from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FormLogin() {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
  });

  const submit = (data) => {
    const { email, password } = data;

    api
      .post("/sessions", {
        email,
        password,
      })
      .then((res) => {
        if (res.data.token) {
          toast.success("Login realizado com sucesso!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
          });
        }
      })
      .catch((err) => {
        if (err) {
          toast.error(
            "Não foi possível realizar login, preencha os campos corretamente",
            {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 3000,
            }
          );
        }
      });
  };

  return (
    <Container>
      <ToastContainer />
      <img src="./logo.svg" alt="logo kenzie hub" />
      <FormContainer onSubmit={handleSubmit(submit)}>
        <h3>Login</h3>

        <label htmlFor="email">Email</label>
        <div>
          <input
            type="email"
            id="email"
            placeholder="tsunode@email.com"
            {...register("email")}
          />
        </div>
        <Error>{errors.email?.message} </Error>
        <label htmlFor="password">Senha</label>
        <div>
          <input
            type={passwordShown ? "text" : "password"}
            id="password"
            placeholder="**********"
            {...register("password")}
          />
          <span onClick={togglePasswordVisibility}>
            {passwordShown ? <AiFillEye /> : <AiFillEyeInvisible />}
          </span>
        </div>
        <Error> {errors.password?.message}</Error>
        <Link to="/register">
          Ainda não possui uma conta? Clique aqui para se cadastrar
        </Link>
        <button type="submit">Entrar</button>
      </FormContainer>
    </Container>
  );
}
