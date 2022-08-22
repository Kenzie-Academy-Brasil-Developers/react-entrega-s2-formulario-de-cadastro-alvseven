import { api } from "./api";
import { UserTechs } from "./getUser";

export async function editUserTech(
  techInfo: string,
  techId: string
): Promise<UserTechs> {
  const token = localStorage.getItem("@kenzie-hub:token");

  const { data } = await api.put(
    `/users/techs/${techId}`,
    { status: techInfo },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
}
