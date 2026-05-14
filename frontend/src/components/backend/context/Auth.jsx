import { createContext, useState } from "react";
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const userInfo = localStorage.getItem("userInfo");
  const [user, SetUser] = useState(userInfo);

  const login = (user) => {
    SetUser(user);
  };

  const logout = () => {
    localStorage.removeItem("userInfo");
    SetUser(null);
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
