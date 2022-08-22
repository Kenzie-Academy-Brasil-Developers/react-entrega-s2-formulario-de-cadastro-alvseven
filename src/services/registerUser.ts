import { api } from "./api";

interface RegisterUserProps {
  email: string;
  password: string;
  name: string;
  bio: string;
  contact: number;
  course_module: string;
}

export async function registerUser(
  userData: RegisterUserProps
): Promise<RegisterUserProps> {
  const { email, password, name, bio, contact, course_module } = userData;
  const { data } = await api.post("/users", {
    email,
    password,
    name,
    bio,
    contact,
    course_module,
  });
  return data;
}
