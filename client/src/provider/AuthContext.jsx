import { createContext } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  return (
    <AuthContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
