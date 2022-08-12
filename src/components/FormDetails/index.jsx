import { toast } from "react-toastify";
import { api } from "../../services/api";
import { ModalInner, RegisterTechForm } from "./styles";
import { ModalContainer, CloseContainer } from "./styles";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Form({ modalDetailsIsOpen, setModalDetailsIsOpen }) {
  const [techStatus, setTechStatus] = useState("Iniciante");

  const { tech, techId } = useContext(AuthContext);

  const updateTech = () => {
    api
      .put(`/users/techs/${techId}`, {
        status: techStatus,
      })
      .then((res) => {
        if (res.request.status === 201) {
          setModalDetailsIsOpen(!modalDetailsIsOpen);
          toast.success("Tecnologia editada com sucesso!", {
            position: toast.POSITION.RIGHT_CENTER,
            autoClose: 2000,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const deleteTech = () => {
    api.delete(`users/techs/${techId}`).then((res) => {
      setModalDetailsIsOpen(!modalDetailsIsOpen);
      toast.success("Tecnologia excluída com sucesso!", {
        position: toast.POSITION.RIGHT_CENTER,
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

          <button onClick={updateTech}>Editar tecnologia</button>
          <button onClick={deleteTech}>Excluir tecnologia</button>
        </RegisterTechForm>
      </ModalContainer>
    </ModalInner>
  );
}
