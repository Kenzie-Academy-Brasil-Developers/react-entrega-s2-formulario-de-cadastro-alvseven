import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { loginFormSchema } from "../../utils/schema";
import { api } from "../../services/api";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

import { Container, FormContainer, Error } from "./styles";

export default function FormLogin() {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const navigate = useNavigate();

  function redirect() {
    navigate("/dashboard", { replace: true });
  }

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
          localStorage.setItem("@kenzie-hub:token", res.data.token);
          localStorage.setItem("@kenzie-hub:userId", res.data.user.id);
          setTimeout(
            () =>
              toast.success("Login realizado com sucesso!", {
                position: toast.POSITION.RIGHT_CENTER,
                autoClose: 2000,
              }),
            2500
          );
          setTimeout(redirect, 6000);
        }
      })
      .catch((err) => {
        if (err) {
          setTimeout(
            () =>
              toast.error(
                "Não foi possível realizar o login! dados informados incorretos",
                {
                  position: toast.POSITION.RIGHT_CENTER,
                  autoClose: 2000,
                }
              ),
            2500
          );
        }
      })
      .finally(
        toast.info("Só um instante...", {
          position: toast.POSITION.RIGHT_CENTER,
          autoClose: 2000,
        })
      );
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
