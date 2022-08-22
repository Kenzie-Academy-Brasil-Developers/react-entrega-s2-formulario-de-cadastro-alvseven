import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { api } from "../../services/api";
import { UserTechs } from "../../services/getUser";
import TechCard from "../TechCard";
import { EmptyTechContainer, List } from "./styles";

export interface TechListProps {
  modalDetailsIsOpen: boolean;
  setModalDetailsIsOpen: Dispatch<SetStateAction<boolean>>;
  setTech: Dispatch<SetStateAction<UserTechs>>;
  setTechId: Dispatch<SetStateAction<string>>;
}

export default function TechsList({
  modalDetailsIsOpen,
  setModalDetailsIsOpen,
  setTech,
  setTechId,
}: TechListProps) {
  const userId = localStorage.getItem("@kenzie-hub:userId");

  const [techs, setTechs] = useState<UserTechs[]>([]);

  useEffect(() => {
    api.get(`/users/${userId}`).then((res) => setTechs(res.data.techs));
  }, [techs, userId]);

  return (
    <>
      {techs.length > 0 ? (
        <List>
          {techs.map((tech: UserTechs) => {
            return (
              <TechCard
                tech={tech}
                key={tech.id}
                modalDetailsIsOpen={modalDetailsIsOpen}
                setModalDetailsIsOpen={setModalDetailsIsOpen}
                setTechId={setTechId}
                setTech={setTech}
              />
            );
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
