import * as yup from "yup";
import {
  AtLeastEightDigits,
  atLeastOneLowerCase,
  atLeastOneNumber,
  atLeastOneSpecialCharacter,
  atLeastOneUpperCase,
  cellphoneFormat,
} from "./validations";

export const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .required("Por favor preencha o campo email")
    .email("Formato de email inválido"),
  password: yup.string().required("Por favor preencha o campo senha"),
});

export const registerFormSchema = yup.object().shape({
  name: yup.string().required("Por favor preencha o campo nome"),
  email: yup
    .string()
    .required("Por favor preencha o campo email")
    .email("Formato de e-mail inválido"),
  password: yup
    .string()
    .required("Por favor preencha o campo senha")
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
    .matches(AtLeastEightDigits, "A senha deve conter pelo menos 8 caracteres"),
  confirmPassword: yup
    .string()
    .required("Por favor preencha o campo confirmar senha")
    .oneOf([yup.ref("password"), null], "Senhas diferentes"),
  bio: yup.string().required("Por favor preencha o campo bio"),
  contact: yup
    .string()
    .required("Por favor preencha o campo contato")
    .matches(cellphoneFormat, "Formato de número inválido"),
});

export const addTechFormSchema = yup.object().shape({
  title: yup.string().required("Por favor preencha o campo nome"),
});
