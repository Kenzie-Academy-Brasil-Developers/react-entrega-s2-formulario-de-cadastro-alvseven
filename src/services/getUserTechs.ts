import { api } from "./api";
import { UserTechs } from "./getUser";

export async function getUserTechs(userId: string | null): Promise<UserTechs> {
  const { data } = await api.get<UserTechs>(`/users/${userId}`);
  return data;
}
