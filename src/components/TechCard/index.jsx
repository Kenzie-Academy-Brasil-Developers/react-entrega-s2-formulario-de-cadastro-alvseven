import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { TechListItem } from "./styles";

export default function TechCard({ tech }) {
  const { modalDetailsIsOpen, setModalDetailsIsOpen, setTech, setTechId } =
    useContext(AuthContext);

  const toggleModalDetailsVisibility = () => {
    setModalDetailsIsOpen(!modalDetailsIsOpen);
    setTech(tech);
    setTechId(tech.id);
  };

  return (
    <TechListItem
      status={tech.status}
      key={tech.title}
      onClick={() => toggleModalDetailsVisibility()}
      id={tech.id}
    >
      <h5>{tech.title}</h5>

      <span>{tech.status}</span>
    </TechListItem>
  );
}
