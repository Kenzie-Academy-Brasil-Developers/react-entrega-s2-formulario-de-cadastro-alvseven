import { AddContainer, AddButton } from "./styles";

interface AddTechProps {
  toggleModalAddVisibility: () => void;
}

export default function AddTech({ toggleModalAddVisibility }: AddTechProps) {
  return (
    <AddContainer>
      <h4>Tecnologias</h4>
      <AddButton onClick={toggleModalAddVisibility}>+</AddButton>
    </AddContainer>
  );
}
