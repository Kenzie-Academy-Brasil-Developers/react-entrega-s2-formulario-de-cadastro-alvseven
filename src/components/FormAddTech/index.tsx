import { toast } from "react-toastify";
import { api } from "../../services/api";
import { RegisterTechForm, Error, ModalInner } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addTechFormSchema } from "../../utils/schema";
import { ModalContainer, CloseContainer } from "./styles";

interface CreateTechProps {
  title: string;
  status: string;
}

interface FormAddTechsProps {
  toggleModalAddVisibility: () => void;
}

export default function FormAddTech({
  toggleModalAddVisibility,
}: FormAddTechsProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTechProps>({
    resolver: yupResolver(addTechFormSchema),
  });

  const createTech = (data: CreateTechProps) => {
    const { title, status } = data;
    api
      .post("/users/techs", { title, status })
      .then((res) => {
        if (res) {
          toggleModalAddVisibility();
          toast.success("Tecnologia criada com sucesso!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 401) {
          toast.error("Tecnologia já cadastrada!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
          });
        } else {
          toast.error("Oops, algo deu errado :(", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });
        }
      });
  };

  return (
    <ModalInner>
      <ModalContainer>
        <CloseContainer>
          <h5>Adicione uma tecnologia</h5>
          <button onClick={() => toggleModalAddVisibility()}>X</button>
        </CloseContainer>

        <RegisterTechForm onSubmit={handleSubmit(createTech)}>
          <label htmlFor="title">Nome</label>
          <input
            type="title"
            id="title"
            placeholder="Digite aqui a tecnologia"
            {...register("title")}
          />
          <Error>{errors.title?.message}</Error>
          <label htmlFor="status">Selecionar status</label>
          <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>

          <button type="submit">Adicionar tecnologia</button>
        </RegisterTechForm>
      </ModalContainer>
    </ModalInner>
  );
}
