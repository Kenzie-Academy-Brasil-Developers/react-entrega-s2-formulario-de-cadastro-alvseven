import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import AddTech from "../AddTech";
import FormAddTech from "../FormAddTech";
import FormDetailsTech from "../FormDetails";
import TechsList from "../TechsList";

import { Container } from "./styles";

export default function TechsContainer() {
  const {
    modalAddIsOpen,
    modalDetailsIsOpen,
    setModalDetailsIsOpen,
    techId,

    toggleModalAddVisibility,
  } = useContext(AuthContext);

  return (
    <Container>
      <AddTech toggleModalAddVisibility={toggleModalAddVisibility} />
      <TechsList />
      {modalAddIsOpen && (
        <FormAddTech toggleModalAddVisibility={toggleModalAddVisibility} />
      )}
      {modalDetailsIsOpen && (
        <FormDetailsTech
          techId={techId}
          modalDetailsIsOpen={modalDetailsIsOpen}
          setModalDetailsIsOpen={setModalDetailsIsOpen}
        />
      )}
    </Container>
  );
}
