import { AddContainer, AddButton } from "./styles";

export default function AddTech({ toggleModalAddVisibility }) {
  return (
    <AddContainer>
      <h4>Tecnologias</h4>
      <AddButton onClick={toggleModalAddVisibility}>+</AddButton>
    </AddContainer>
  );
}
