import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { TechListItem } from "./styles";

export default function TechCard({ tech }) {
  const { modalDetailsIsOpen, setModalDetailsIsOpen, setTechId } =
    useContext(AuthContext);

  const toggleModalDetailsVisibility = (event) => {
    setModalDetailsIsOpen(!modalDetailsIsOpen);
    setTechId(event.target.id);
  };

  return (
    <TechListItem
      status={tech.status}
      key={tech.title}
      onClick={(e) => toggleModalDetailsVisibility(e)}
      id={tech.id}
    >
      <h5>{tech.title}</h5>

      <span>{tech.status}</span>
    </TechListItem>
  );
}
