import { toast } from "react-toastify";
import { api } from "../../services/api";
import { ModalInner, RegisterTechForm } from "./styles";
import { ModalContainer, CloseContainer } from "./styles";
import { useState, useEffect } from "react";

export default function Form({
  techId,
  modalDetailsIsOpen,
  setModalDetailsIsOpen,
}) {
  const token = localStorage.getItem("@kenzie-hub:token");
  const userId = localStorage.getItem("@kenzie-hub:userId");
  const [techName, setTechName] = useState("");
  const [techStatus, setTechStatus] = useState("Iniciante");

  useEffect(() => {
    api
      .get(`users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const techs = res.data.techs;
        const tech = techs.find((tech) => tech.id === techId);

        setTechName(tech.title);
      });
  }, [techId, token, userId]);

  const updateTech = () => {
    api
      .put(
        `/users/techs/${techId}`,
        {
          status: techStatus,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
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
    api
      .delete(`users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
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
          <input id="title" disabled value={techName} />
          <label htmlFor="status">Selecionar status</label>
          <select onChange={(e) => setTechStatus(e.target.value)}>
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
