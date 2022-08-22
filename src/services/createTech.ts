import { api } from "./api";
import { UserTechs } from "./getUser";

export interface CreateTechProps {
  title: string;
  status: string;
}

export async function createUserTech(
  techData: CreateTechProps
): Promise<UserTechs> {
  const { data } = await api.post("/users/techs", { techData });
  return data;
}
