import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import {
  AtLeastEightDigits,
  atLeastOneLowerCase,
  atLeastOneNumber,
  atLeastOneSpecialCharacter,
  atLeastOneUpperCase,
} from "../../utils/validations";

import { Container, FormContainer, Error } from "./styles";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

export default function FormLogin() {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Por favor preencha o campo email")
      .email("Formato de email inválido"),
    password: yup.string().required("Por favor preencha o campo senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const submit = (data) => console.log(data);

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
          <span onClick={togglePassword}>
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
