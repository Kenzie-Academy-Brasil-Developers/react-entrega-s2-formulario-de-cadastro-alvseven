import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../contexts/AuthContext";

import { LoginUserProps } from "../../services/userLogin";
import { loginFormSchema } from "../../utils/schema";

import "react-toastify/dist/ReactToastify.css";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

import { Container, FormContainer, Error } from "./styles";

export default function FormLogin() {
  const { submit } = useContext(AuthContext);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserProps>({
    resolver: yupResolver(loginFormSchema),
  });

  return (
    <Container>
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
