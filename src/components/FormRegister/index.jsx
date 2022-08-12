import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { registerFormSchema } from "../../utils/schema";
import { api } from "../../services/api";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Container, FormContainer, Error } from "./styles";

export default function FormRegister() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerFormSchema),
  });

  const onSubmit = (data) => {
    const { email, password, name, bio, contact, course_module } = data;

    api
      .post("/users", {
        email,
        password,
        name,
        bio,
        contact,
        course_module,
      })
      .then((res) => {
        if (res.data.id) {
          setTimeout(
            () =>
              toast.success("Conta criada com sucesso!", {
                position: toast.POSITION.RIGHT_CENTER,
                autoClose: 2000,
              }),
            2500
          );
          setTimeout(() => navigate("/", { replace: true }), 6000);
        }
      })
      .catch((err) => {
        if (err.response.data.message) {
          setTimeout(
            () =>
              toast.error(
                "Não foi possível criar a sua conta, email já cadastrado!",
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
        toast.info("Conferindo os dados...", {
          position: toast.POSITION.RIGHT_CENTER,
          autoClose: 2000,
        })
      );
  };

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
          placeholder="Fale sobre você"
          {...register("bio")}
        />
        <Error>{errors.bio?.message}</Error>

        <label htmlFor="contact">Contato</label>

        <input
          type={"tel"}
          id="contato"
          placeholder="(99) 98765-4321"
          {...register("contact")}
        />
        <Error>{errors.contact?.message} </Error>

        <label htmlFor="module">Módulo</label>
        <select {...register("course_module")}>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro Módulo
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo Módulo
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro Módulo
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto Módulo
          </option>
        </select>

        <Link to="/">Já possui uma conta? Clique aqui para fazer login</Link>
        <button type="submit">Cadastrar</button>
      </FormContainer>
    </Container>
  );
}
