import { api } from "./api";
import { UserTechs } from "./getUser";

export async function deleteUserTech(techId: string): Promise<UserTechs> {
  const token = localStorage.getItem("@kenzie-hub:token");

  const { data } = await api.delete(`/users/techs/${techId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
}
