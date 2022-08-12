import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [modalAddIsOpen, setModalAddIsOpen] = useState(false);
  const [modalDetailsIsOpen, setModalDetailsIsOpen] = useState(false);
  const [techId, setTechId] = useState("");

  const toggleModalAddVisibility = () => {
    setModalAddIsOpen(!modalAddIsOpen);
  };

  return (
    <AuthContext.Provider
      value={{
        modalAddIsOpen,
        setModalAddIsOpen,
        modalDetailsIsOpen,
        setModalDetailsIsOpen,
        techId,
        setTechId,
        toggleModalAddVisibility,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
