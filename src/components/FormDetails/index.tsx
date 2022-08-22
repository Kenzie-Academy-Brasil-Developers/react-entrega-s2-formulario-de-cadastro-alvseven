import { toast } from "react-toastify";
import { ModalInner, RegisterTechForm } from "./styles";
import { ModalContainer, CloseContainer } from "./styles";
import { useState, Dispatch, SetStateAction } from "react";
import { UserTechs } from "../../services/getUser";
import { editUserTech } from "../../services/editTech";
import { deleteUserTech } from "../../services/deleteTech";

export interface FormEditProps {
  modalDetailsIsOpen: boolean;
  setModalDetailsIsOpen: Dispatch<SetStateAction<boolean>>;
  tech: UserTechs;
  techId: string;
}

export default function Form({
  modalDetailsIsOpen,
  setModalDetailsIsOpen,
  tech,
  techId,
}: FormEditProps) {
  const [techStatus, setTechStatus] = useState(tech.status);

  const updateTech = () => {
    editUserTech(techStatus, techId)
      .then((res) => {
        if (res) {
          setModalDetailsIsOpen(!modalDetailsIsOpen);
          toast.success("Tecnologia editada com sucesso!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const deleteTech = () => {
    deleteUserTech(techId).then((res) => {
      setModalDetailsIsOpen(!modalDetailsIsOpen);
      toast.success("Tecnologia excluída com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    });
  };

  return (
    <ModalInner>
      <ModalContainer>
        <CloseContainer>
          <h5>Edite ou exclua a tecnologia</h5>
          <button onClick={() => setModalDetailsIsOpen(!modalDetailsIsOpen)}>
            X
          </button>
        </CloseContainer>

        <RegisterTechForm onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="title">Nome</label>
          <input id="title" disabled value={tech.title} />
          <label htmlFor="status">Selecionar status</label>
          <select
            defaultValue={tech.status}
            onChange={(e) => setTechStatus(e.target.value)}
          >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>

          <button
            disabled={techStatus !== tech.status ? false : true}
            onClick={updateTech}
          >
            Editar tecnologia
          </button>
          <button onClick={deleteTech}>Excluir tecnologia</button>
        </RegisterTechForm>
      </ModalContainer>
    </ModalInner>
  );
}
