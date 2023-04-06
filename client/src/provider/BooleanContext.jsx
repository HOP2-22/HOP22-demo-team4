import { createContext, useState } from "react";

export const BooleanContext = createContext();

export const BooleanProvider = ({ children }) => {
  const [loading, setLoading] = useState();

  return (
    <BooleanContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </BooleanContext.Provider>
  );
};
