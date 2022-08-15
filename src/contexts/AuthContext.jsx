import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    async function getUser() {
      const token = localStorage.getItem("@kenzie-hub:token");
      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
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

  const onSubmit = (data) => {
    const { email, password, name, bio, contact, course_module } = data;

    api
      .post("/users", {
        email,
        password,
        name,
        bio,
        contact,
        course_module,
      })
      .then((res) => {
        if (res.data.id) {
          setTimeout(
            () =>
              toast.success("Conta criada com sucesso!", {
                position: toast.POSITION.RIGHT_CENTER,
                autoClose: 2000,
              }),
            2500
          );
          setTimeout(() => navigate("/", { replace: true }), 6000);
        }
      })
      .catch((err) => {
        if (err.response.data.message) {
          setTimeout(
            () =>
              toast.error(
                "Não foi possível criar a sua conta, email já cadastrado!",
                {
                  position: toast.POSITION.RIGHT_CENTER,
                  autoClose: 2000,
                }
              ),
            2500
          );
        }
      })
      .finally(
        toast.info("Conferindo os dados...", {
          position: toast.POSITION.RIGHT_CENTER,
          autoClose: 2000,
        })
      );
  };

  const submit = (data) => {
    const { email, password } = data;

    api
      .post("/sessions", {
        email,
        password,
      })
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem("@kenzie-hub:token", res.data.token);
          localStorage.setItem("@kenzie-hub:userId", res.data.user.id);
          setTimeout(
            () =>
              toast.success("Login realizado com sucesso!", {
                position: toast.POSITION.RIGHT_CENTER,
                autoClose: 1000,
              }),
            2500
          );
          setTimeout(
            () => {
              setUser(res.data);
              navigate("/dashboard", { replace: true });
            },

            5000
          );
        }
      })
      .catch((err) => {
        if (err) {
          setTimeout(
            () =>
              toast.error(
                "Não foi possível realizar o login! dados informados incorretos",
                {
                  position: toast.POSITION.RIGHT_CENTER,
                  autoClose: 2000,
                }
              ),
            2500
          );
        }
      })
      .finally(
        toast.info("Conferindo os dados...", {
          position: toast.POSITION.RIGHT_CENTER,
          autoClose: 2000,
        })
      );
  };

  return (
    <AuthContext.Provider
      value={{
        submit,
        onSubmit,
        user,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
