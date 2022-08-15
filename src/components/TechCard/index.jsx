import { TechListItem } from "./styles";

export default function TechCard({
  tech,
  modalDetailsIsOpen,
  setModalDetailsIsOpen,
  setTech,
  setTechId,
}) {
  const toggleModalDetailsVisibility = (event) => {
    setModalDetailsIsOpen(!modalDetailsIsOpen);
    setTechId(event.target.id);
    setTech(tech);
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
