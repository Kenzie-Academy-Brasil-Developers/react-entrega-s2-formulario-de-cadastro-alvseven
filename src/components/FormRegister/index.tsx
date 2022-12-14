import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { registerFormSchema } from "../../utils/schema";

import "react-toastify/dist/ReactToastify.css";

import { Container, FormContainer, Error } from "./styles";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { normalizePhoneNumber } from "../../utils/phonemask";
import { RegisterUserProps } from "../../services/registerUser";

export default function FormRegister() {
  const { onSubmit } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<RegisterUserProps>({
    resolver: yupResolver(registerFormSchema),
  });

  const phoneValue = watch("contact");

  useEffect(() => {
    setValue("contact", normalizePhoneNumber(phoneValue));
  }, [phoneValue, setValue]);

  return (
    <Container>
      <img src="./logo.svg" alt="logo kenzie hub" />
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
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
          placeholder="Fale sobre voc??"
          {...register("bio")}
        />
        <Error>{errors.bio?.message}</Error>

        <label htmlFor="contact">Contato</label>

        <input
          type={"tel"}
          id="contato"
          placeholder="Digite seu n??mero de celular"
          {...register("contact")}
        />
        <Error>{errors.contact?.message} </Error>

        <label htmlFor="module">M??dulo</label>
        <select {...register("course_module")}>
          <option value="Primeiro m??dulo (Introdu????o ao Frontend)">
            Primeiro M??dulo
          </option>
          <option value="Segundo m??dulo (Frontend Avan??ado)">
            Segundo M??dulo
          </option>
          <option value="Terceiro m??dulo (Introdu????o ao Backend)">
            Terceiro M??dulo
          </option>
          <option value="Quarto m??dulo (Backend Avan??ado)">
            Quarto M??dulo
          </option>
        </select>

        <Link to="/">J?? possui uma conta? Clique aqui para fazer login</Link>
        <button type="submit">Cadastrar</button>
      </FormContainer>
    </Container>
  );
}
