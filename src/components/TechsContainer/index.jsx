import { useState } from "react";
import AddTech from "../AddTech";
import FormAddTech from "../FormAddTech";
import FormDetailsTech from "../FormDetails";
import TechsList from "../TechsList";

import { Container } from "./styles";

export default function TechsContainer() {
  const [modalAddIsOpen, setModalAddIsOpen] = useState(false);
  const [modalDetailsIsOpen, setModalDetailsIsOpen] = useState(false);
  const [techId, setTechId] = useState("");
  const [tech, setTech] = useState(null);

  const toggleModalAddVisibility = () => {
    setModalAddIsOpen(!modalAddIsOpen);
  };

  return (
    <Container>
      <AddTech toggleModalAddVisibility={toggleModalAddVisibility} />
      <TechsList
        modalDetailsIsOpen={modalDetailsIsOpen}
        setModalDetailsIsOpen={setModalDetailsIsOpen}
        setTechId={setTechId}
        setTech={setTech}
      />
      {modalAddIsOpen && (
        <FormAddTech toggleModalAddVisibility={toggleModalAddVisibility} />
      )}
      {modalDetailsIsOpen && (
        <FormDetailsTech
          tech={tech}
          techId={techId}
          modalDetailsIsOpen={modalDetailsIsOpen}
          setModalDetailsIsOpen={setModalDetailsIsOpen}
        />
      )}
    </Container>
  );
}
