import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import * as validateToken from "@/actions/validate-token";

type AppContextType = {
  isLoggedIn: boolean;
  getUsername: string | null;
  deleteUsername: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // for data handling
  const { isError } = useQuery({
    queryKey: ["validate_token"],
    queryFn: validateToken.validateToken,
    retry: false,
  });

  const getUsername = localStorage.getItem("USERNAME");
  const deleteUsername = () => {
    localStorage.removeItem("USERNAME");
  };

  return (
    <AppContext.Provider
      value={{
        isLoggedIn: !isError,
        getUsername,
        deleteUsername,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as AppContextType;
};
