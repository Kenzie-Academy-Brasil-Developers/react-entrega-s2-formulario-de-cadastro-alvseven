import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  AtLeastEightDigits,
  atLeastOneLowerCase,
  atLeastOneNumber,
  atLeastOneSpecialCharacter,
  atLeastOneUpperCase,
} from "../../utils/validations";

import { Container, FormContainer, Error } from "./styles";

export default function FormRegister() {
  const formSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup
      .string()
      .required()
      .matches(
        atLeastOneLowerCase,
        "A senha deve conter pelo menos uma letra minúscula"
      )
      .matches(
        atLeastOneUpperCase,
        "A senha deve conter pelo menos uma letra maiúscula"
      )
      .matches(atLeastOneNumber, "A senha deve conter pelo menos 1 número")
      .matches(
        atLeastOneSpecialCharacter,
        "A senha deve conter pelo menos um caractere especial"
      )
      .matches(
        AtLeastEightDigits,
        "A senha deve conter pelo menos 8 caracteres"
      ),
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
        <h3>Crie sua conta</h3>

        <label htmlFor="name">Nome</label>

        <input
          type="text"
          id="name"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
        <Error>{errors.name?.message}</Error>

        <label htmlFor="email">Email</label>

        <input
          type={"email"}
          id="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        <Error> {errors.email?.message} </Error>

        <label htmlFor="password">Senha</label>

        <input
          type={"password"}
          id="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
        <Error>{errors.password?.message}</Error>
        <label htmlFor="confirm-password">Confirmar Senha</label>

        <input
          type={"password"}
          id="confirm-password"
          placeholder="Confirme sua senha"
          {...register("confirmPassword")}
        />
        <Error>{errors.confirmPassword?.message}</Error>

        <label htmlFor="bio">Bio</label>

        <input
          type={"text"}
          id="bio"
          placeholder="Fale sobre você"
          {...register("bio")}
        />
        <Error>{errors.confirmPassword?.message}</Error>

        <label htmlFor="contact">Contato</label>

        <input
          type={"tel"}
          id="contato"
          placeholder="(99) 98765-4321"
          {...register("contact")}
        />
        <Error>{errors.contact?.message} </Error>

        <label htmlFor="module">Módulo</label>
        <select>
          <option value="primeiroModulo">Primeiro Módulo</option>
          <option value="segundoModulo">Segundo Módulo</option>
          <option value="terceiroModulo">Terceiro Módulo</option>
          <option value="quartoModulo">Quarto Módulo</option>
        </select>

        <Link to="/">Já possui uma conta? Clique aqui para fazer login</Link>
        <button type="submit">Cadastrar</button>
      </FormContainer>
    </Container>
  );
}
