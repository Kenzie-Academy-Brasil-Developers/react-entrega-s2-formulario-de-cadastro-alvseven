import { createContext, useEffect, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

import { registerUser, RegisterUserProps } from "../services/registerUser";
import { userLogin } from "../services/userLogin";
import { User } from "../services/getUser";

interface AuthProps {
  children: ReactNode;
}

interface AuthProviderData {
  user: User | null;
  isLoading: boolean;
  submit: (data: LoginUserProps) => void;
  onSubmit: (data: RegisterUserProps) => void;
}

interface LoginUserProps {
  email: string;
  password: string;
}

export const AuthContext = createContext<AuthProviderData>(
  {} as AuthProviderData
);

const AuthProvider = ({ children }: AuthProps) => {
  const [user, setUser] = useState<User>({} as User);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  useEffect(() => {
    async function getUser() {
      const token = localStorage.getItem("@kenzie-hub:token");
      if (token) {
        try {
          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          const { data } = await api.get("/profile");
          setUser(data);
        } catch (error) {
          console.error(error);
        }
        navigate("/dashboard", { replace: true });
      }

      setIsLoading(false);
    }
    getUser();
  }, []);

  const onSubmit = (data: RegisterUserProps) => {
    registerUser(data)
      .then((res) => {
        if (res) {
          toast.success("Conta criada com sucesso!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
          });
          navigate("/", { replace: true });
        }
      })
      .catch((err) => {
        if (err) {
          toast.error(
            "Não foi possível criar a sua conta, email já cadastrado!",
            {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 2000,
            }
          );
        }
      });
  };

  const submit = (data: LoginUserProps) => {
    userLogin(data)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("@kenzie-hub:token", res.token);
          localStorage.setItem("@kenzie-hub:userId", res.user.id);

          toast.success("Login realizado com sucesso!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000,
          });
          setTimeout(
            () => {
              setUser(res.user);
              navigate("/dashboard", { replace: true });
            },

            1000
          );
        }
      })
      .catch((err) => {
        if (err) {
          toast.error(
            "Não foi possível realizar o login! dados informados incorretos",
            {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 2000,
            }
          );
        }
      });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        submit,
        onSubmit,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
