import { Dispatch, SetStateAction, MouseEvent } from "react";
import { UserTechs } from "../../services/getUser";
import { TechListItem } from "./styles";

interface TechCardProps {
  tech: UserTechs;
  modalDetailsIsOpen: boolean;
  setModalDetailsIsOpen: Dispatch<SetStateAction<boolean>>;
  setTech: Dispatch<SetStateAction<UserTechs>>;
  setTechId: Dispatch<SetStateAction<string>>;
}

export default function TechCard({
  tech,
  modalDetailsIsOpen,
  setModalDetailsIsOpen,
  setTech,
  setTechId,
}: TechCardProps) {
  const toggleModalDetailsVisibility = (event: MouseEvent) => {
    const target = event.target as HTMLLIElement;
    setModalDetailsIsOpen(!modalDetailsIsOpen);
    setTechId(target.id);
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
