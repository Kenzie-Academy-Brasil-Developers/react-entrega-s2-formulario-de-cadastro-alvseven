import { useState, useEffect } from "react";
import { api } from "../../services/api";
import TechCard from "../TechCard";
import { EmptyTechContainer, List } from "./styles";

export default function TechsList() {
  const userId = localStorage.getItem("@kenzie-hub:userId");

  const [techs, setTechs] = useState([]);

  useEffect(() => {
    api.get(`/users/${userId}`).then((res) => setTechs(res.data.techs));
  }, [techs, userId]);

  return (
    <>
      {techs.length > 0 ? (
        <List>
          {techs.map((tech) => {
            return <TechCard tech={tech} key={tech.id} />;
          })}
        </List>
      ) : (
        <EmptyTechContainer>
          <h2>
            Por enquanto não há nenhuma tecnologia cadastrada, que tal adicionar
            uma ? {`${":)"}`}
          </h2>{" "}
        </EmptyTechContainer>
      )}
    </>
  );
}
